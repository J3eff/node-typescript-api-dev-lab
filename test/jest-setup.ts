import { SetupServer } from '@src/server';
import supertest from 'supertest';

// Vai ser executado antes de todos os testes, para realizar o setup do server
beforeAll(() => {
  const server = new SetupServer();
  server.init();
  global.testRequest = supertest(server.getApp());
});
