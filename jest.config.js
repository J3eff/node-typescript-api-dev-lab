// Arquivo de configuração do JEST para conversar com Typescript
const { resolve } = require('path'); 
const root = resolve(__dirname);
module.exports = {
  rootDir: root, // Diretorio que arquivo esta
  displayName: 'root-tests', // Adiciona a label nos testes
  testMatch: ['<rootDir>/src/**/*.test.ts'], // 
  testEnvironment: 'node',
  clearMocks: true, // Limpa os mocks por padrão
  preset: 'ts-jest', 
  moduleNameMapper: { // Para poder utilizar os alias nos testes
    '@src/(.*)': '<rootDir>/src/$1',
    '@test/(.*)': '<rootDir>/test/$1',
  },
};