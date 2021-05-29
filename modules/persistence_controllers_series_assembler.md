[brazilian-stremio-addon](../README.md) / [Exports](../modules.md) / persistence/controllers/series-assembler

# Module: persistence/controllers/series-assembler

## Table of contents

### Functions

- [default](persistence_controllers_series_assembler.md#default)

## Functions

### default

▸ **default**(`series`: [*default*](persistence_models_transfer_objects_series.md#default)): *object*

Data mapper function that transform a received SeriesDTO into an object with a meta and many streams

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `series` | [*default*](persistence_models_transfer_objects_series.md#default) | Data Transfer Object for series content |

**Returns:** *object*

| Name | Type |
| :------ | :------ |
| `meta` | [*IMeta*](../interfaces/persistence_models_meta.imeta.md) |
| `streams` | [*IStream*](../interfaces/persistence_models_stream.istream.md)[] |

the series' metadata and streams

Defined in: [src/persistence/controllers/series-assembler.ts:40](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/controllers/series-assembler.ts#L40)
