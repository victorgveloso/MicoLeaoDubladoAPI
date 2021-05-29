[brazilian-stremio-addon](../README.md) / [Exports](../modules.md) / router

# Module: router

## Table of contents

### Functions

- [getRouter](router.md#getrouter)
- [upsertContentData](router.md#upsertcontentdata)

## Functions

### getRouter

▸ **getRouter**(`addonInterface`: [*AddonInterface*](../interfaces/persistence_models_stremio.addoninterface.md)): *any*

getRouter is a Proxy to the default getRouter
It includes our custom endpoints

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `addonInterface` | [*AddonInterface*](../interfaces/persistence_models_stremio.addoninterface.md) | the addon's main object |

**Returns:** *any*

the modified router

Defined in: [src/router.ts:33](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/router.ts#L33)

___

### upsertContentData

▸ **upsertContentData**(`__namedParameters`: { `meta`: [*IMeta*](../interfaces/persistence_models_meta.imeta.md) ; `streams`: [*IStream*](../interfaces/persistence_models_stream.istream.md)[]  }): *Promise*<void\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *object* |
| `__namedParameters.meta` | [*IMeta*](../interfaces/persistence_models_meta.imeta.md) |
| `__namedParameters.streams` | [*IStream*](../interfaces/persistence_models_stream.istream.md)[] |

**Returns:** *Promise*<void\>

Defined in: [src/router.ts:14](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/router.ts#L14)
