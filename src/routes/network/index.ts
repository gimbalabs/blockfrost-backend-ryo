import { FastifyInstance, FastifyRequest } from 'fastify';
import * as QueryTypes from '../../types/queries/network';
import * as ResponseTypes from '../../types/responses/network';
import { getSchemaForEndpoint } from '../../utils/open-api';
import { getDbSync } from '../../utils/database';
import { SQLQuery } from '../../sql';

async function network(fastify: FastifyInstance) {
  fastify.route({
    url: '/network',
    method: 'GET',
    schema: getSchemaForEndpoint('/network'),
    handler: async (_request: FastifyRequest, reply) => {
      const clientDbSync = await getDbSync(fastify);

      try {
        const { rows }: { rows: ResponseTypes.Network[] } =
          await clientDbSync.query<QueryTypes.Network>(SQLQuery.get('network'));

        clientDbSync.release();
        return reply.send(rows[0]);
      } catch (error) {
        if (clientDbSync) {
          clientDbSync.release();
        }
        throw error;
      }
    },
  });
}

module.exports = network;
