import { FastifyInstance } from 'fastify';
import { getSchemaForEndpoint } from '../../utils/open-api';
import * as ResponseTypes from '../../types/responses/ledger';
import { getConfig } from '../../config';
import { GENESIS } from '../../constants/genesis';

async function ledger(fastify: FastifyInstance) {
  fastify.route({
    url: '/genesis',
    method: 'GET',
    schema: getSchemaForEndpoint('/genesis'),
    handler: async (_request, reply) => {
      const network = getConfig().network;
      const genesisData: ResponseTypes.Ledger | undefined = GENESIS[network];

      if (genesisData) {
        return reply.send(genesisData);
      } else {
        return reply.code(500).header('Content-Type', 'application/json; charset=utf-8').send({
          error: 'Internal Server Error',
          message: 'Internal Server Error',
          status_code: 500,
        });
      }
    },
  });
}

module.exports = ledger;
