/* eslint-disable @typescript-eslint/ban-ts-comment */
import sinon from 'sinon';
import * as databaseUtils from '../../../../src/utils/database';
import supertest from 'supertest';
import fixtures from '../../fixtures/blocks.fixtures';
import buildFastify from '../../../../src/app';
import jestOpenAPI from 'jest-openapi';
import path from 'path';

jestOpenAPI(path.join(__dirname, '../../../../node_modules/@blockfrost/openapi/openapi.yaml'));

describe('blocks service', () => {
  fixtures.map(fixture => {
    test(fixture.name, async () => {
      const queryMock = sinon.stub();
      const fastify = buildFastify({ maxParamLength: 32_768 });

      // @ts-ignore
      const database = sinon.stub(databaseUtils, 'getDbSync').resolves({
        release: () => null,
        query: queryMock,
      });

      await fastify.ready();

      queryMock.onCall(0).resolves(fixture.sqlQueryMock);
      queryMock.onCall(1).resolves(fixture.sqlQueryMock2);

      const response = await supertest(fastify.server).get(fixture.endpoint);

      expect(response).toSatisfyApiSpec();
      expect(response.body).toEqual(fixture.response);

      database.restore();
      fastify.close();
    });
  });
});