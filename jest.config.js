module.exports = {
  roots: [
    '.',
  ],
  verbose: true,
  testMatch: [
    '**/*.test.[jt]s',
  ],
  testEnvironment: 'node',
  transform: {
    '\\.ts$': 'ts-jest',
  },
  setupFilesAfterEnv: [
    './test/jest.setup.js',
  ],
  preset: 'ts-jest',
};