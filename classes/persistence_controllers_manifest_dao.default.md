[brazilian-stremio-addon](../README.md) / [Exports](../modules.md) / [persistence/controllers/manifest-dao](../modules/persistence_controllers_manifest_dao.md) / default

# Class: default

[persistence/controllers/manifest-dao](../modules/persistence_controllers_manifest_dao.md).default

This class abstracts database operations related to the Manifest model

## Table of contents

### Constructors

- [constructor](persistence_controllers_manifest_dao.default.md#constructor)

### Methods

- [add](persistence_controllers_manifest_dao.default.md#add)
- [get](persistence_controllers_manifest_dao.default.md#get)

## Constructors

### constructor

\+ **new default**(): [*default*](persistence_controllers_manifest_dao.default.md)

**Returns:** [*default*](persistence_controllers_manifest_dao.default.md)

## Methods

### add

▸ **add**(`manifest`: [*IManifest*](../interfaces/persistence_models_manifest.imanifest.md)): *Promise*<[*IManifest*](../interfaces/persistence_models_manifest.imanifest.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `manifest` | [*IManifest*](../interfaces/persistence_models_manifest.imanifest.md) |

**Returns:** *Promise*<[*IManifest*](../interfaces/persistence_models_manifest.imanifest.md)\>

Defined in: [src/persistence/controllers/manifest-dao.ts:14](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/controllers/manifest-dao.ts#L14)

___

### get

▸ **get**(): *Promise*<[*IManifest*](../interfaces/persistence_models_manifest.imanifest.md)\>

**Returns:** *Promise*<[*IManifest*](../interfaces/persistence_models_manifest.imanifest.md)\>

Defined in: [src/persistence/controllers/manifest-dao.ts:7](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/controllers/manifest-dao.ts#L7)
