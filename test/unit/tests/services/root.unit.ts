import buildFastify from '../../../../src/app';
import supertest from 'supertest';
import jestOpenAPI from 'jest-openapi';
import path from 'path';

jestOpenAPI(path.join(__dirname, '../../../../node_modules/@blockfrost/openapi/openapi.yaml'));

describe('GET /example/endpoint', () => {
  test('responds with success on request /root', async () => {
    const fastify = buildFastify();

    await fastify.ready();
    const response = await supertest(fastify.server).get('/');

    expect(response.body).toEqual({ url: 'https://blockfrost.io/', version: expect.any(String) });
    expect(response).toSatisfyApiSpec();

    fastify.close();
  });
});
