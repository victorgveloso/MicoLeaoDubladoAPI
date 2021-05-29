[brazilian-stremio-addon](../README.md) / [Exports](../modules.md) / persistence/controllers/movie-assembler

# Module: persistence/controllers/movie-assembler

## Table of contents

### Functions

- [default](persistence_controllers_movie_assembler.md#default)

## Functions

### default

▸ **default**(`movie`: [*MovieDTO*](persistence_models_transfer_objects_movie.md#moviedto)): *object*

Data mapper function that transform a received MovieDTO into an object with a meta and many streams

#### Parameters

| Name | Type |
| :------ | :------ |
| `movie` | [*MovieDTO*](persistence_models_transfer_objects_movie.md#moviedto) |

**Returns:** *object*

| Name | Type |
| :------ | :------ |
| `meta` | [*IMeta*](../interfaces/persistence_models_meta.imeta.md) |
| `streams` | [*IStream*](../interfaces/persistence_models_stream.istream.md)[] |

the movie's metadata and streams

Defined in: [src/persistence/controllers/movie-assembler.ts:32](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/controllers/movie-assembler.ts#L32)
