SELECT encode(tx.hash, 'hex') AS "tx_hash",
  txo.index AS "tx_index",
  txo.index AS "output_index",
  txo.value::TEXT AS "amount_lovelace", -- cast to TEXT to avoid number overflow
  (
    SELECT json_agg(
        json_build_object(
          'unit',
          CONCAT(encode(ma.policy, 'hex'), encode(ma.name, 'hex')),
          'quantity',
          mto.quantity::TEXT -- cast to TEXT to avoid number overflow
        )
      )
    FROM ma_tx_out mto
      JOIN multi_asset ma ON (mto.ident = ma.id)
    WHERE mto.tx_out_id = txo.id
  ) AS "amount",
  encode(b.hash, 'hex') AS "block",
  encode(data_hash, 'hex') AS "data_hash",
  encode(dat.bytes, 'hex') AS "inline_datum",
  encode(scr.hash, 'hex') AS "reference_script_hash"
FROM tx
  JOIN tx_out txo ON (tx.id = txo.tx_id)
  LEFT JOIN tx_in txi ON (txo.tx_id = txi.tx_out_id)
  AND (txo.index = txi.tx_out_index)
  LEFT JOIN ma_tx_out mto ON (mto.tx_out_id = txo.id)
  LEFT JOIN multi_asset ma ON (mto.ident = ma.id)
  JOIN block b ON (b.id = tx.block_id)
  LEFT JOIN datum dat ON (txo.inline_datum_id = dat.id)
  LEFT JOIN script scr ON (txo.reference_script_id = scr.id)
WHERE txi.tx_in_id IS NULL
  AND (
    txo.address = $4
    OR txo.payment_cred = $5
  )
  AND (
    CASE
      WHEN LOWER($6) <> 'lovelace' THEN (
        encode(ma.policy, 'hex') || encode(ma.name, 'hex')
      ) = $6
      ELSE mto IS NULL
    END
  )
ORDER BY CASE
    WHEN LOWER($1) = 'desc' THEN txo.id
  END DESC,
  CASE
    WHEN LOWER($1) <> 'desc'
    OR $1 IS NULL THEN txo.id
  END ASC
LIMIT CASE
    WHEN $2 >= 1
    AND $2 <= 100 THEN $2
    ELSE 100
  END OFFSET CASE
    WHEN $3 > 1
    AND $3 < 2147483647 THEN ($3 - 1) * (
      CASE
        WHEN $2 >= 1
        AND $2 <= 100 THEN $2
        ELSE 100
      END
    )
    ELSE 0
  END