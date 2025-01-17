import app from './app';
import { getConfig } from './config';

const port = getConfig().server.port;
const debug = getConfig().server.debug;

const server = app({
  logger: {
    transport:
      process.env.NODE_ENV === 'development' || debug
        ? {
            target: 'pino-pretty',
            options: {
              translateTime: 'HH:MM:ss Z',
            },
          }
        : undefined,
  },
  ignoreTrailingSlash: true,

  // https://www.fastify.io/docs/latest/Server/#maxparamlength
  // if the param overflows this number, 404 will be returned
  // currently the biggest param seems to be the address which can be 30864 (haxxxors having fun)
  // select tx_id,LENGTH(address) from tx_out where LENGTH(address) > 16000 ORDER BY LENGTH(address) desc LIMIT 10;
  maxParamLength: 32_768,
});

server.listen({ port }, error => {
  if (error) {
    console.error(error);
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1);
  }
});
