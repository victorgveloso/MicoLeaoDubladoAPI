[brazilian-stremio-addon](../README.md) / [Exports](../modules.md) / [persistence/controllers/catalog-dao](../modules/persistence_controllers_catalog_dao.md) / default

# Class: default

[persistence/controllers/catalog-dao](../modules/persistence_controllers_catalog_dao.md).default

This class abstracts database operations related to the Catalog model

## Table of contents

### Constructors

- [constructor](persistence_controllers_catalog_dao.default.md#constructor)

### Methods

- [add](persistence_controllers_catalog_dao.default.md#add)
- [getAll](persistence_controllers_catalog_dao.default.md#getall)
- [getById](persistence_controllers_catalog_dao.default.md#getbyid)

## Constructors

### constructor

\+ **new default**(): [*default*](persistence_controllers_catalog_dao.default.md)

**Returns:** [*default*](persistence_controllers_catalog_dao.default.md)

## Methods

### add

▸ **add**(`catalog`: [*ICatalog*](../interfaces/persistence_models_catalog.icatalog.md)): *Promise*<[*ICatalog*](../interfaces/persistence_models_catalog.icatalog.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `catalog` | [*ICatalog*](../interfaces/persistence_models_catalog.icatalog.md) |

**Returns:** *Promise*<[*ICatalog*](../interfaces/persistence_models_catalog.icatalog.md)\>

Defined in: [src/persistence/controllers/catalog-dao.ts:13](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/controllers/catalog-dao.ts#L13)

___

### getAll

▸ **getAll**(): *Promise*<[*ICatalog*](../interfaces/persistence_models_catalog.icatalog.md)[]\>

**Returns:** *Promise*<[*ICatalog*](../interfaces/persistence_models_catalog.icatalog.md)[]\>

Defined in: [src/persistence/controllers/catalog-dao.ts:7](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/controllers/catalog-dao.ts#L7)

___

### getById

▸ **getById**(`id`: *any*): *Promise*<[*ICatalog*](../interfaces/persistence_models_catalog.icatalog.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | *any* |

**Returns:** *Promise*<[*ICatalog*](../interfaces/persistence_models_catalog.icatalog.md)[]\>

Defined in: [src/persistence/controllers/catalog-dao.ts:10](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/controllers/catalog-dao.ts#L10)
