/* eslint-disable */

require('concurrently')(
  [
    {
      name: 'server',
      prefixColor: 'green',
      command: 'yarn dev:msw',
    },
    {
      name: 'cypress',
      prefixColor: 'blue',
      command: 'yarn run:cypress',
    },
  ],
  {
    prefixLength: 1,
    killOthers: ['failure', 'success'],
  }
).result.then(
  () => process.exit(0),
  (info) => {
    const cypress = info.find((x) => x?.command?.name === 'cypress');

    process.exit(cypress?.exitCode ?? 1);
  }
);
