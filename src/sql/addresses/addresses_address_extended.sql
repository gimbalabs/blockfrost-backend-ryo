WITH queried_address AS (
  SELECT stake_address_id AS "stake_address_id"
  FROM tx_out txo
  WHERE txo.address = $1
    OR txo.payment_cred = $2
  LIMIT 1
), queried_amount AS (
  SELECT COALESCE(txo.value, 0) AS "amount",
    array_agg(mto.id) AS "assets_ids"
  FROM tx_out txo
    JOIN tx ON (txo.tx_id = tx.id)
    LEFT JOIN tx_in txi ON (txo.tx_id = txi.tx_out_id)
    AND (txo.index = txi.tx_out_index)
    LEFT JOIN ma_tx_out mto ON (mto.tx_out_id = txo.id)
  WHERE txi IS NULL
    AND (
      txo.address = $1
      OR txo.payment_cred = $2
    ) -- don't count utxos that are part of transaction that failed script validation at stage 2
    AND tx.valid_contract = 'true'
  GROUP BY txo.id
)
SELECT (
    SELECT CASE
        WHEN $2 <> '' THEN encode($2, 'hex')
        ELSE (
          SELECT address
          FROM tx_out txo
          WHERE txo.address = $1
          LIMIT 1
        )
      END
  ) AS "address",
  (
    SELECT COALESCE(SUM(amount), 0)::TEXT -- cast to TEXT to avoid number overflow
    FROM queried_amount
  ) AS "amount_lovelace",
  (
    SELECT json_agg(
        json_build_object(
          'unit',
          token_name,
          'quantity',
          token_quantity::TEXT, -- cast to TEXT to avoid number overflow
          'has_nft_onchain_metadata',
          has_nft_onchain_metadata
        )
      )
    FROM (
        SELECT CONCAT(encode(policy, 'hex'), encode(name, 'hex')) AS "token_name",
          SUM(quantity) AS "token_quantity",
          (
            SELECT CASE
                WHEN txm.json->encode(ma.policy, 'hex')->convert_from(ma.name, 'UTF8') IS NOT NULL THEN 'true'
                ELSE 'false'
              END
            FROM tx_metadata txm
            WHERE txm.tx_id = (
                SELECT MAX(txmmax.tx_id)
                FROM ma_tx_mint mtmmax
                  JOIN multi_asset mamax ON (mtmmax.ident = mamax.id)
                  JOIN tx_metadata txmmax ON (mtmmax.tx_id = txmmax.tx_id)
                WHERE txmmax.key = 721
                  AND quantity > 0
                  AND (
                    encode(mamax.policy, 'hex') || encode(mamax.name, 'hex')
                  ) = encode(ma.policy, 'hex') || encode(ma.name, 'hex')
                  --AND bf_fn_is_valid_utf8(mamax.name) = 'true'
                  /*
                   ^ To use the condition above, you first have to create
                   a custom function in dbsync:

                   CREATE OR REPLACE FUNCTION bf_fn_is_valid_utf8(BYTEA) RETURNS BOOLEAN AS $$
                   BEGIN
                   PERFORM convert_from($1, 'UTF8');
                   RETURN TRUE;
                   EXCEPTION
                   WHEN character_not_in_repertoire
                   THEN
                   RAISE WARNING '%', SQLERRM;
                   RETURN FALSE;
                   END; $$ LANGUAGE plpgsql;
                   */
              )
              AND txm.key = 721
          ) AS "has_nft_onchain_metadata"
        FROM ma_tx_out mto
          JOIN multi_asset ma ON (mto.ident = ma.id)
        WHERE mto.id IN (
            SELECT unnest(assets_ids)
            FROM queried_amount
          )
        GROUP BY ma.name,
          ma.policy
        ORDER BY (ma.policy, ma.name)
      ) AS "assets"
  ) AS "amount",
  (
    SELECT sa.view
    FROM stake_address sa
    WHERE sa.id = (
        SELECT *
        FROM queried_address
      )
  ) AS "stake_address",
  (
    SELECT address_has_script
    FROM tx_out txo
    WHERE txo.address = $1
      OR txo.payment_cred = $2
    LIMIT 1
  ) AS "script"