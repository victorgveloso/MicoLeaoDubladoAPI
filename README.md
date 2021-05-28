# Mico Leão Dublado **API**

![Mico Leão Dublado Logo](https://i.ibb.co/9tWdHsv/icon.jpg)

[![Automated tests](https://github.com/victorgveloso/MicoLeaoDubladoAPI/actions/workflows/test.yml/badge.svg)](https://github.com/victorgveloso/MicoLeaoDubladoAPI/actions/workflows/test.yml)
[![Check test server health](https://github.com/victorgveloso/MicoLeaoDubladoAPI/actions/workflows/healthcheck.yml/badge.svg)](https://github.com/victorgveloso/MicoLeaoDubladoAPI/actions/workflows/healthcheck.yml)
[![Publish Typedoc to Github Pages](https://github.com/victorgveloso/MicoLeaoDubladoAPI/actions/workflows/docs.yml/badge.svg)](https://github.com/victorgveloso/MicoLeaoDubladoAPI/actions/workflows/docs.yml)

Mico Leão Dublado is...

This project adheres to the Contributor Covenant
[code of conduct](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/master/CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code.

## Dependencies
  * NodeJS
  * TypeScript
  * Docker (with docker-compose)
## Running
  * Run:
```sh
make start # to start
make test # to run automated tests
make clean # to delete data, cache and docker image
make # to run all three commands in the order: clean -> test -> start
```

## Using
Mico Leão Dublado API is a HTTP API (use an HTTP client of your choice).

### Entrypoints
|Verb|path                                             |request body|request example|response example|response model|
|----|-------------------------------------------------|------------|------------|----------------|--------------|
|GET | /manifest.json                                  | X          | X          |  [/src/persistence/models/stub/manifest.json](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/main/src/persistence/models/stub/manifest.json) | [/src/persistence/models/manifest.ts](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/main/src/persistence/models/manifest.ts) |
|GET | /stream/series/{imdbId}:{season}:{episode}.json | X          | X          |  [/src/persistence/models/stub/stream.json](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/main/src/persistence/models/stub/stream.json) | [/src/persistence/models/stream.ts](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/main/src/persistence/models/stream.ts) |
|GET | /meta/series/{imdbId}.json                      | X          | X          |  [/src/persistence/models/stub/meta.json](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/main/src/persistence/models/stub/meta.json) | [/src/persistence/models/meta.ts](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/main/src/persistence/models/meta.ts) |
|GET | /catalog/series/{imdbId}/{extra?}.json          | X          | X          |  [/src/persistence/models/stub/catalog.json](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/main/src/persistence/models/stub/catalog.json) | [/src/persistence/models/catalog.ts](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/main/src/persistence/models/catalog.ts) |
|GET | /stream/movie/{imdbId}.json                     | X          | X          |  [/src/persistence/models/stub/stream.json](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/main/src/persistence/models/stub/stream.json) | [/src/persistence/models/stream.ts](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/main/src/persistence/models/stream.ts) |
|GET | /meta/movie/{imdbId}.json                       | X          | X          |  [/src/persistence/models/stub/meta.json](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/main/src/persistence/models/stub/meta.json) | [/src/persistence/models/meta.ts](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/main/src/persistence/models/meta.ts) |
|GET | /catalog/movie/{imdbId}/{extra?}.json           | X          | X          |  [/src/persistence/models/stub/catalog.json](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/main/src/persistence/models/stub/catalog.json) | [/src/persistence/models/catalog.ts](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/main/src/persistence/models/catalog.ts) |
|POST| /movie                                          |[/src/persistence/models/transfer-objects/movie.ts](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/main/src/persistence/models/transfer-objects/movie.ts)|[/src/persistence/models/stub/movie.json](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/main/src/persistence/models/stub/movie.json)| X  | X  |
|POST| /series                                          |[/src/persistence/models/transfer-objects/series.ts](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/main/src/persistence/models/transfer-objects/movseriesie.ts)|[/src/persistence/models/stub/series.json](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/main/src/persistence/models/stub/series.json)| X  | X  |

## Contributing

If you are interested in reporting/fixing issues and contributing directly to the code base, please see [CONTRIBUTING.md](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/master/CONTRIBUTING.md) for more information on what we're looking for and how to get started.

## Community

You might find us in the [StremioAddons Discord Server](https://discord.gg/WTqVGKXh) and in [r/StremioAddons](https://reddit.com/r/StremioAddons/).

### License: [Apache](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/master/LICENSE)
