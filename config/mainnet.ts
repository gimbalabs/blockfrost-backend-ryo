export default {
  server: {
    port: 3000,
    debug: true,
  },
  dbSync: {
    host: 'cdbsync-mainnet.mydomain.com',
    user: 'cexplorer',
    database: 'cdbsync',
    maxConnections: 10,
  },
  network: 'mainnet',
  tokenRegistryUrl: 'https://tokens.cardano.org',
};
