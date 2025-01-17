export default [
  {
    testName: 'addresses/:address generic shelley address',
    endpoints: [
      '/addresses/addr1q8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkw9etpkygj5x4kjpym5h35cvj5zw83s6nvw5fnrnck4cmvshkfm4y',
    ],
    response: {
      address:
        'addr1q8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkw9etpkygj5x4kjpym5h35cvj5zw83s6nvw5fnrnck4cmvshkfm4y',
      amount: [{ unit: 'lovelace', quantity: expect.any(String) }],
      stake_address: expect.toBeTypeOrNull(String),
      type: 'shelley',
      script: false,
    },
  },
  {
    testName: 'addresses/:address generic shelley address payment cred',
    endpoints: ['/addresses/addr_vkh1ch9vxc3z2s6k6gynwj7xnpj2sfc7xr2d363xvw0z6hrdjxyfmju'],
    response: {
      address: 'addr_vkh1ch9vxc3z2s6k6gynwj7xnpj2sfc7xr2d363xvw0z6hrdjxyfmju',
      amount: [{ unit: 'lovelace', quantity: expect.any(String) }],
      stake_address: expect.toBeTypeOrNull(String),
      type: 'shelley',
      script: false,
    },
  },
  {
    testName: 'addresses/:address/total generic shelley address',
    endpoints: [
      '/addresses/addr1q8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkw9etpkygj5x4kjpym5h35cvj5zw83s6nvw5fnrnck4cmvshkfm4y/total',
    ],
    response: {
      address:
        'addr1q8zu4smzyf2r2mfqjd6tc6vxf2p8rccdfk82ye3eut2udkw9etpkygj5x4kjpym5h35cvj5zw83s6nvw5fnrnck4cmvshkfm4y',
      received_sum: [{ unit: 'lovelace', quantity: expect.any(String) }],
      sent_sum: [{ unit: 'lovelace', quantity: expect.any(String) }],
      tx_count: expect.any(Number),
    },
  },
  {
    testName: 'addresses/:address/total generic shelley address payment cred',
    endpoints: ['/addresses/addr_vkh1ch9vxc3z2s6k6gynwj7xnpj2sfc7xr2d363xvw0z6hrdjxyfmju/total'],
    response: {
      address: 'addr_vkh1ch9vxc3z2s6k6gynwj7xnpj2sfc7xr2d363xvw0z6hrdjxyfmju',
      received_sum: [{ unit: 'lovelace', quantity: expect.any(String) }],
      sent_sum: [{ unit: 'lovelace', quantity: expect.any(String) }],
      tx_count: expect.any(Number),
    },
  },
  {
    testName: 'addresses/:address generic dormant exchange byron address',
    endpoints: [
      '/addresses/DdzFFzCqrhstmqBkaU98vdHu6PdqjqotmgudToWYEeRmQKDrn4cAgGv9EZKtu1DevLrMA1pdVazufUCK4zhFkUcQZ5Gm88mVHnrwmXvT',
    ],
    response: {
      address:
        'DdzFFzCqrhstmqBkaU98vdHu6PdqjqotmgudToWYEeRmQKDrn4cAgGv9EZKtu1DevLrMA1pdVazufUCK4zhFkUcQZ5Gm88mVHnrwmXvT',
      amount: [{ unit: 'lovelace', quantity: expect.any(String) }],
      stake_address: expect.toBeTypeOrNull(String),
      type: 'byron',
      script: false,
    },
  },
  {
    testName: 'addresses/:address/utxos generic dormant exchange byron address',
    endpoints: [
      '/addresses/DdzFFzCqrhstmqBkaU98vdHu6PdqjqotmgudToWYEeRmQKDrn4cAgGv9EZKtu1DevLrMA1pdVazufUCK4zhFkUcQZ5Gm88mVHnrwmXvT/utxos',
    ],
    response: [],
  },
  {
    testName: 'addresses/:address/txs generic shelley address',
    endpoints: [
      '/addresses/addr1q904hvj3tcr9cendlrm6y4fhcy34tgezlqn92z7z4lwkzczvqdpz4hpzh09mr3360akg0y9wss24hhvfhtkp2fjh65cs7q4z89/txs?count=5&page=2',
      '/addresses/addr1q904hvj3tcr9cendlrm6y4fhcy34tgezlqn92z7z4lwkzczvqdpz4hpzh09mr3360akg0y9wss24hhvfhtkp2fjh65cs7q4z89/txs?count=5&page=2&order=asc',
      '/addresses/addr_vkh1tadmy527qewxvm0c77392d7pyd26xghcye2shs40m4skqhysmzt/txs?count=5&page=2',
      '/addresses/addr_vkh1tadmy527qewxvm0c77392d7pyd26xghcye2shs40m4skqhysmzt/txs?count=5&page=2&order=asc',
    ],
    response: [
      '197102e656d9d0e65f03d27c7bab18593f96592f5d08933d268bea4cc7aa83d7',
      'ac6ef171258c29d82ab6f640269d22e7091ad7611b8d8d0c0a4258e2875ca5cc',
      '8bdd47d11532aa837dea9da97817a03f843c90097b83b9d9e64508828095ee4e',
      '032e0704ecda7c9d6ed524da163a8d748f3b1b2027afa5d61372ca4d6dd21e49',
      'b0aed5f066cd788948ac3cfab6c02e65e2edd88e6ee548456ce7186716a9123c',
    ],
  },
  {
    testName: 'addresses/:address/transactions generic shelley address',
    endpoints: [
      '/addresses/addr1q904hvj3tcr9cendlrm6y4fhcy34tgezlqn92z7z4lwkzczvqdpz4hpzh09mr3360akg0y9wss24hhvfhtkp2fjh65cs7q4z89/transactions?count=5&page=2',
      '/addresses/addr1q904hvj3tcr9cendlrm6y4fhcy34tgezlqn92z7z4lwkzczvqdpz4hpzh09mr3360akg0y9wss24hhvfhtkp2fjh65cs7q4z89/transactions?count=5&page=2&order=asc',
      '/addresses/addr_vkh1tadmy527qewxvm0c77392d7pyd26xghcye2shs40m4skqhysmzt/transactions?count=5&page=2',
      '/addresses/addr_vkh1tadmy527qewxvm0c77392d7pyd26xghcye2shs40m4skqhysmzt/transactions?count=5&page=2&order=asc',
    ],
    response: [
      {
        tx_hash: '197102e656d9d0e65f03d27c7bab18593f96592f5d08933d268bea4cc7aa83d7',
        tx_index: 1,
        block_height: 4607739,
        block_time: 1598420398,
      },
      {
        tx_hash: 'ac6ef171258c29d82ab6f640269d22e7091ad7611b8d8d0c0a4258e2875ca5cc',
        tx_index: 0,
        block_height: 4607849,
        block_time: 1598422757,
      },
      {
        tx_hash: '8bdd47d11532aa837dea9da97817a03f843c90097b83b9d9e64508828095ee4e',
        tx_index: 0,
        block_height: 4607861,
        block_time: 1598423039,
      },
      {
        tx_hash: '032e0704ecda7c9d6ed524da163a8d748f3b1b2027afa5d61372ca4d6dd21e49',
        tx_index: 0,
        block_height: 4608710,
        block_time: 1598440167,
      },
      {
        tx_hash: 'b0aed5f066cd788948ac3cfab6c02e65e2edd88e6ee548456ce7186716a9123c',
        tx_index: 2,
        block_height: 4609348,
        block_time: 1598453091,
      },
    ],
  },
  {
    testName: 'addresses/:address/transactions?queryparams generic shelley address ',
    endpoints: [
      '/addresses/addr1q904hvj3tcr9cendlrm6y4fhcy34tgezlqn92z7z4lwkzczvqdpz4hpzh09mr3360akg0y9wss24hhvfhtkp2fjh65cs7q4z89/transactions?from=5018666&to=5431295&order=desc&count=2&page=2',
      '/addresses/addr1q904hvj3tcr9cendlrm6y4fhcy34tgezlqn92z7z4lwkzczvqdpz4hpzh09mr3360akg0y9wss24hhvfhtkp2fjh65cs7q4z89/transactions?from=5018666:3&to=5431295&order=desc&count=2&page=2',
      '/addresses/addr1q904hvj3tcr9cendlrm6y4fhcy34tgezlqn92z7z4lwkzczvqdpz4hpzh09mr3360akg0y9wss24hhvfhtkp2fjh65cs7q4z89/transactions?from=5018666&to=5431295:999&order=desc&count=2&page=2',
      '/addresses/addr1q904hvj3tcr9cendlrm6y4fhcy34tgezlqn92z7z4lwkzczvqdpz4hpzh09mr3360akg0y9wss24hhvfhtkp2fjh65cs7q4z89/transactions?from=5018666:3&to=5431295:999&order=desc&count=2&page=2',
    ],
    response: [
      {
        tx_hash: '35b987f5d72f8ab0d88c9d602b9d6db54f7fd6838bc60f2d5213dba35c9a94c5',
        tx_index: 0,
        block_height: 5150163,
        block_time: 1609452028,
      },
      {
        tx_hash: '92bd7869ffacc580b6d9bbe97cb1f5228956b2e88db7de65ad700e11b4366a0d',
        tx_index: 1,
        block_height: 5150153,
        block_time: 1609451793,
      },
    ],
  },
  {
    testName: 'addresses/:address/txs generic dormant exchange byron address',
    endpoints: [
      '/addresses/DdzFFzCqrhstmqBkaU98vdHu6PdqjqotmgudToWYEeRmQKDrn4cAgGv9EZKtu1DevLrMA1pdVazufUCK4zhFkUcQZ5Gm88mVHnrwmXvT/txs?count=5&page=2',
      '/addresses/DdzFFzCqrhstmqBkaU98vdHu6PdqjqotmgudToWYEeRmQKDrn4cAgGv9EZKtu1DevLrMA1pdVazufUCK4zhFkUcQZ5Gm88mVHnrwmXvT/txs?count=5&page=2&order=asc',
    ],
    response: [
      '5663e4bee226c57862716b6d6fef259d5b2924553a2ee7d6eaa440a3bffada78',
      '4fd88c6abac6def51317c4075d9cf0d55b4a0f83743ec39f27a7fc5c42c2040e',
      '459b0a24f059be3ce2ce29ec7d1bcb080618be47d18898b36142b315c77b4086',
      'bcb86a0b48ddd559193043fb0194daa1dad69f1d1dd6e32a4f736826cbbb9085',
      'f889c4b5ed1811f3089603b02ae096298b114e140d82c8a20521ae25d248bc1f',
    ],
  },
  {
    testName: 'addresses/:address/extended address with nutcoin',
    endpoints: [
      '/addresses/addr1qxxfwz7n3lnduxxgff6smhwlxkcw3gcax3q39363cpq4axnntgjccmteyrsldd67rxv2yq6ew2a7t48q34p9j7nf0kjq4rdx3w/extended',
    ],
    response: {
      address:
        'addr1qxxfwz7n3lnduxxgff6smhwlxkcw3gcax3q39363cpq4axnntgjccmteyrsldd67rxv2yq6ew2a7t48q34p9j7nf0kjq4rdx3w',
      amount: [
        { unit: 'lovelace', quantity: '5368142', decimals: 6, has_nft_onchain_metadata: false },
        {
          unit: '00000002df633853f6a47465c9496721d2d5b1291b8398016c0e87ae6e7574636f696e',
          quantity: '1',
          decimals: null,
          has_nft_onchain_metadata: false,
        },
        {
          unit: '432749982ba3bd2d969715860bb27f9efab8ab6ba7bd1e94a1a2982950414e4441',
          quantity: '1000000',
          decimals: null,
          has_nft_onchain_metadata: true,
        },
        {
          unit: 'aa1b03c6a49951282e9a68b17133a814f4c603f85be469e22869ecb4726561646d65',
          quantity: '1',
          decimals: null,
          has_nft_onchain_metadata: true,
        },
        {
          unit: 'b43131f2c82825ee3d81705de0896c611f35ed38e48e33a3bdf298dc43727970746f4d6167653033373930',
          quantity: '1',
          decimals: null,
          has_nft_onchain_metadata: true,
        },
        {
          unit: 'd5e6bf0500378d4f0da4e8dde6becec7621cd8cbf5cbb9b87013d4cc537061636542756431303433',
          quantity: '1',
          decimals: null,
          has_nft_onchain_metadata: true,
        },
      ],
      stake_address: 'stake1u9e45fvvd4ujpc0kka0pnx9zqdvh9wl96nsg6sje0f5hmfq45lrja',
      type: 'shelley',
      script: false,
    },
  },

  //
  // long running tests without cache
  //

  // {
  //   testName: 'addresses/:address - biggest address with most assets',
  //   endpoints: ['/addresses/addr1w999n67e86jn6xal07pzxtrmqynspgx0fwmcmpua4wc6yzsxpljz3'],
  //   response: {
  //     address: 'addr1w999n67e86jn6xal07pzxtrmqynspgx0fwmcmpua4wc6yzsxpljz3',
  //     amount: [{ unit: 'lovelace', quantity: expect.any(String) }],
  //     stake_address: expect.toBeTypeOrNull(String),
  //     type: 'shelley',
  //     script: true,
  //   },
  // },
  // {
  //   testName: 'addresses/:address/total generic dormant exchange byron address',
  //   endpoints: [
  //     '/addresses/DdzFFzCqrhstmqBkaU98vdHu6PdqjqotmgudToWYEeRmQKDrn4cAgGv9EZKtu1DevLrMA1pdVazufUCK4zhFkUcQZ5Gm88mVHnrwmXvT/total',
  //   ],
  //   response: {
  //     address:
  //       'DdzFFzCqrhstmqBkaU98vdHu6PdqjqotmgudToWYEeRmQKDrn4cAgGv9EZKtu1DevLrMA1pdVazufUCK4zhFkUcQZ5Gm88mVHnrwmXvT',
  //     received_sum: [{ unit: 'lovelace', quantity: expect.any(String) }],
  //     sent_sum: [{ unit: 'lovelace', quantity: expect.any(String) }],
  //     tx_count: expect.any(Number),
  //   },
  // },
];
