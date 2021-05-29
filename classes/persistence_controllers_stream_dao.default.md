[brazilian-stremio-addon](../README.md) / [Exports](../modules.md) / [persistence/controllers/stream-dao](../modules/persistence_controllers_stream_dao.md) / default

# Class: default

[persistence/controllers/stream-dao](../modules/persistence_controllers_stream_dao.md).default

This class abstracts database operations related to the Stream model

## Table of contents

### Constructors

- [constructor](persistence_controllers_stream_dao.default.md#constructor)

### Methods

- [addIfAbsent](persistence_controllers_stream_dao.default.md#addifabsent)
- [getAll](persistence_controllers_stream_dao.default.md#getall)
- [getByMetaId](persistence_controllers_stream_dao.default.md#getbymetaid)
- [getByMetaIdAndInfoHash](persistence_controllers_stream_dao.default.md#getbymetaidandinfohash)
- [getByStreamId](persistence_controllers_stream_dao.default.md#getbystreamid)

## Constructors

### constructor

\+ **new default**(): [*default*](persistence_controllers_stream_dao.default.md)

**Returns:** [*default*](persistence_controllers_stream_dao.default.md)

## Methods

### addIfAbsent

▸ **addIfAbsent**(`stream`: [*IStream*](../interfaces/persistence_models_stream.istream.md)): *Promise*<[*IStream*](../interfaces/persistence_models_stream.istream.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [*IStream*](../interfaces/persistence_models_stream.istream.md) |

**Returns:** *Promise*<[*IStream*](../interfaces/persistence_models_stream.istream.md)\>

Defined in: [src/persistence/controllers/stream-dao.ts:23](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/controllers/stream-dao.ts#L23)

___

### getAll

▸ **getAll**(): *Promise*<[*IStream*](../interfaces/persistence_models_stream.istream.md)[]\>

**Returns:** *Promise*<[*IStream*](../interfaces/persistence_models_stream.istream.md)[]\>

Defined in: [src/persistence/controllers/stream-dao.ts:9](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/controllers/stream-dao.ts#L9)

___

### getByMetaId

▸ **getByMetaId**(`metaId`: *string*): *Promise*<[*IStream*](../interfaces/persistence_models_stream.istream.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `metaId` | *string* |

**Returns:** *Promise*<[*IStream*](../interfaces/persistence_models_stream.istream.md)[]\>

Defined in: [src/persistence/controllers/stream-dao.ts:12](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/controllers/stream-dao.ts#L12)

___

### getByMetaIdAndInfoHash

▸ **getByMetaIdAndInfoHash**(`metaId`: *string*, `infoHash`: *string*): *Promise*<``null`` \| [*IStream*](../interfaces/persistence_models_stream.istream.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `metaId` | *string* |
| `infoHash` | *string* |

**Returns:** *Promise*<``null`` \| [*IStream*](../interfaces/persistence_models_stream.istream.md)\>

Defined in: [src/persistence/controllers/stream-dao.ts:16](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/controllers/stream-dao.ts#L16)

___

### getByStreamId

▸ **getByStreamId**(`streamId`: *string*): *Promise*<[*IStream*](../interfaces/persistence_models_stream.istream.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamId` | *string* |

**Returns:** *Promise*<[*IStream*](../interfaces/persistence_models_stream.istream.md)[]\>

Defined in: [src/persistence/controllers/stream-dao.ts:6](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/controllers/stream-dao.ts#L6)
