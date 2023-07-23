import { defineConfig } from 'cypress';

export default defineConfig({
  chromeWebSecurity: false,
  modifyObstructiveCode: false,

  defaultCommandTimeout: 40000,
  requestTimeout: 40000,
  pageLoadTimeout: 60000,

  video: true,
  videoCompression: 10,
  viewportHeight: 1080,
  viewportWidth: 1920,

  watchForFileChanges: false,

  retries: {
    runMode: 1,
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'src/tests/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'src/tests/cypress/setup.ts',
  },
});
