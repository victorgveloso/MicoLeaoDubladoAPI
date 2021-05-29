[brazilian-stremio-addon](../README.md) / [Exports](../modules.md) / [persistence/controllers/meta-dao](../modules/persistence_controllers_meta_dao.md) / default

# Class: default

[persistence/controllers/meta-dao](../modules/persistence_controllers_meta_dao.md).default

This class abstracts database operations related to the Meta model

## Table of contents

### Constructors

- [constructor](persistence_controllers_meta_dao.default.md#constructor)

### Methods

- [add](persistence_controllers_meta_dao.default.md#add)
- [addIfAbsent](persistence_controllers_meta_dao.default.md#addifabsent)
- [getAll](persistence_controllers_meta_dao.default.md#getall)
- [getByCatalogId](persistence_controllers_meta_dao.default.md#getbycatalogid)
- [getByGenre](persistence_controllers_meta_dao.default.md#getbygenre)
- [getById](persistence_controllers_meta_dao.default.md#getbyid)
- [getByName](persistence_controllers_meta_dao.default.md#getbyname)
- [update](persistence_controllers_meta_dao.default.md#update)
- [upsert](persistence_controllers_meta_dao.default.md#upsert)

## Constructors

### constructor

\+ **new default**(): [*default*](persistence_controllers_meta_dao.default.md)

**Returns:** [*default*](persistence_controllers_meta_dao.default.md)

## Methods

### add

▸ **add**(`meta`: [*IMeta*](../interfaces/persistence_models_meta.imeta.md)): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `meta` | [*IMeta*](../interfaces/persistence_models_meta.imeta.md) |

**Returns:** *Promise*<any\>

Defined in: [src/persistence/controllers/meta-dao.ts:21](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/controllers/meta-dao.ts#L21)

___

### addIfAbsent

▸ **addIfAbsent**(`meta`: [*IMeta*](../interfaces/persistence_models_meta.imeta.md)): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `meta` | [*IMeta*](../interfaces/persistence_models_meta.imeta.md) |

**Returns:** *Promise*<any\>

Defined in: [src/persistence/controllers/meta-dao.ts:24](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/controllers/meta-dao.ts#L24)

___

### getAll

▸ **getAll**(`skip?`: *number*, `limit?`: *number*): *Promise*<any\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `skip` | *number* | 0 |
| `limit` | *number* | 100 |

**Returns:** *Promise*<any\>

Defined in: [src/persistence/controllers/meta-dao.ts:6](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/controllers/meta-dao.ts#L6)

___

### getByCatalogId

▸ **getByCatalogId**(`catalogId`: *string*, `skip?`: *number*, `limit?`: *number*): *Promise*<any\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `catalogId` | *string* | - |
| `skip` | *number* | 0 |
| `limit` | *number* | 100 |

**Returns:** *Promise*<any\>

Defined in: [src/persistence/controllers/meta-dao.ts:12](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/controllers/meta-dao.ts#L12)

___

### getByGenre

▸ **getByGenre**(`catalogId`: *string*, `genre`: *string*, `skip?`: *number*, `limit?`: *number*): *Promise*<any\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `catalogId` | *string* | - |
| `genre` | *string* | - |
| `skip` | *number* | 0 |
| `limit` | *number* | 100 |

**Returns:** *Promise*<any\>

Defined in: [src/persistence/controllers/meta-dao.ts:9](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/controllers/meta-dao.ts#L9)

___

### getById

▸ **getById**(`id`: *string*): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | *string* |

**Returns:** *Promise*<any\>

Defined in: [src/persistence/controllers/meta-dao.ts:18](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/controllers/meta-dao.ts#L18)

___

### getByName

▸ **getByName**(`name`: *string*, `skip?`: *number*, `limit?`: *number*): *Promise*<any\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | *string* | - |
| `skip` | *number* | 0 |
| `limit` | *number* | 100 |

**Returns:** *Promise*<any\>

Defined in: [src/persistence/controllers/meta-dao.ts:15](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/controllers/meta-dao.ts#L15)

___

### update

▸ **update**(`meta`: [*IMeta*](../interfaces/persistence_models_meta.imeta.md)): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `meta` | [*IMeta*](../interfaces/persistence_models_meta.imeta.md) |

**Returns:** *Promise*<any\>

Defined in: [src/persistence/controllers/meta-dao.ts:33](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/controllers/meta-dao.ts#L33)

___

### upsert

▸ **upsert**(`meta`: [*IMeta*](../interfaces/persistence_models_meta.imeta.md)): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `meta` | [*IMeta*](../interfaces/persistence_models_meta.imeta.md) |

**Returns:** *Promise*<any\>

Defined in: [src/persistence/controllers/meta-dao.ts:36](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/controllers/meta-dao.ts#L36)
