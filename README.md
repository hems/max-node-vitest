## ~ max-node-vitest

A minimal proof of concept demonstrating a future-proof approach to 
developing Node.js scripts for Max MSP, offering an alternative to traditional 
in-patcher methods.

More info:
 - [tests](https://github.com/vitest-dev/vitest)
 - [coverage](https://vitest.dev/guide/coverage).

### ~ scripts

Navigate to the `js` folder
```bash
cd js
```

Build files
```bash
npm run build
```

Constantly watch and build files
```bash
npm run build:watch
```

Run tests
```bash
npm run test
```

Run watch tests
```bash
npm run test:watch
```

Run tests + coverage
```bash
npm run test:coverage
```

Run run test + open html file with the coverage report on the browser
```bash
npm run test:coverage:watch
```

Run watch tests + coverage
```bash
npm run test:coverage:watch
```

### ~ notes

1. Need to add a bit of better documentaiton on the max patch / max mocks / 
Max API tests

2. There are a few things to be considered:

  - Do we want to bundle all the source into 1 file or do we prefer to compile
  and export a separate file for each of the source files?

  - Do we want to use typescript when developing the source files?

    ( spoiler: I do! I can show why it's a good idea! )

  - Are there any disadvantages to this approach?

    ( time will tell and if there are I'm sure we can fix it!)

  - Is it time to add eslint / prettier to this repo? ( yes! )

  - I mean... There are tons of things to be considered and tested
 but this is a good starting point ( :