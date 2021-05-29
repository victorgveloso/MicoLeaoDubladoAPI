[brazilian-stremio-addon](../README.md) / [Exports](../modules.md) / [persistence/models/stremio](../modules/persistence_models_stremio.md) / Cache

# Interface: Cache

[persistence/models/stremio](../modules/persistence_models_stremio.md).Cache

A resolving object can also include the following cache related properties

## Table of contents

### Properties

- [cacheMaxAge](persistence_models_stremio.cache.md#cachemaxage)
- [staleError](persistence_models_stremio.cache.md#staleerror)
- [staleRevalidate](persistence_models_stremio.cache.md#stalerevalidate)

## Properties

### cacheMaxAge

• `Optional` **cacheMaxAge**: *number*

(in seconds) sets the Cache-Control header to max-age=$cacheMaxAge
and overwrites the global cache time set in serveHTTP options.

Defined in: [src/persistence/models/stremio.ts:38](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L38)

___

### staleError

• `Optional` **staleError**: *number*

(in seconds) sets the Cache-Control header to stale-if-error=$staleError.

Defined in: [src/persistence/models/stremio.ts:46](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L46)

___

### staleRevalidate

• `Optional` **staleRevalidate**: *number*

(in seconds) sets the Cache-Control header to stale-while-revalidate=$staleRevalidate.

Defined in: [src/persistence/models/stremio.ts:42](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L42)
