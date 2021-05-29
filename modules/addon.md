[brazilian-stremio-addon](../README.md) / [Exports](../modules.md) / addon

# Module: addon

## Table of contents

### Functions

- [createCatalogHandler](addon.md#createcataloghandler)
- [createStreamHandler](addon.md#createstreamhandler)

## Functions

### createCatalogHandler

▸ **createCatalogHandler**(`args`: [*Args*](../interfaces/persistence_models_stremio.args.md)): *Promise*<{ `metas`: [*IMeta*](../interfaces/persistence_models_meta.imeta.md)[]  }\>

Addon's controller for catalog-related requests

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [*Args*](../interfaces/persistence_models_stremio.args.md) | Arguments documented at [Stremio's SDK Reference](https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/requests/defineCatalogHandler.md) |

**Returns:** *Promise*<{ `metas`: [*IMeta*](../interfaces/persistence_models_meta.imeta.md)[]  }\>

A list of movies' metadata

Defined in: [src/addon.ts:11](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/addon.ts#L11)

___

### createStreamHandler

▸ **createStreamHandler**(`args`: [*Args*](../interfaces/persistence_models_stremio.args.md)): *Promise*<{ `streams`: [*IStream*](../interfaces/persistence_models_stream.istream.md)[]  }\>

Addon's controller for stream-related requests

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [*Args*](../interfaces/persistence_models_stremio.args.md) | Arguments documented at [Stremio's SDK Reference](https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/requests/defineStreamHandler.md) |

**Returns:** *Promise*<{ `streams`: [*IStream*](../interfaces/persistence_models_stream.istream.md)[]  }\>

A list of streams of movie and series.

Defined in: [src/addon.ts:55](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/addon.ts#L55)
