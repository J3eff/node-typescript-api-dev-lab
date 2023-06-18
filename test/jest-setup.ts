import { SetupServer } from '@src/server';
import supertest from 'supertest';

let server: SetupServer;
// Vai ser executado antes de todos os testes, para realizar o setup do server
beforeAll(async () => {
  server = new SetupServer();
  await server.init();
  global.testRequest = supertest(server.getApp());
});

afterAll(async() => await server.close());
