[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# Drive Now

An unofficial API client for the Drive Now resources which provides methods to retrieve information about the car fleet.

__Latest:__ [0.1.0](./CHANGELOG.md#0.1.0)


## Features

- supports UMD for browser and server usage
- usable with promises and callbacks

## Usage

```sh
npm install --save drive-now
```

## Getting Started


```js

import DriveNow from 'drive-now'

const client = new DriveNow({
  apikey: '<insertAPIKey>'
})

// client methods to call
```

## API

For now checkout the [source](./src/client.js) or the provided [example](./example/cities.js).

## TODO

- enhance methods
- extend documentation
- add tests for coverage
