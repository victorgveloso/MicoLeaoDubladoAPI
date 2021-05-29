[brazilian-stremio-addon](../README.md) / [Exports](../modules.md) / [persistence/models/stremio](../modules/persistence_models_stremio.md) / FullManifestResource

# Interface: FullManifestResource

[persistence/models/stremio](../modules/persistence_models_stremio.md).FullManifestResource

## Table of contents

### Properties

- [idPrefixes](persistence_models_stremio.fullmanifestresource.md#idprefixes)
- [name](persistence_models_stremio.fullmanifestresource.md#name)
- [types](persistence_models_stremio.fullmanifestresource.md#types)

## Properties

### idPrefixes

• `Optional` **idPrefixes**: *string*[]

Use this if you want your addon to be called only for specific content IDs

For example, if you set this to ["yt_id:", "tt"], your addon will only be called for id values that start with 'yt_id:' or 'tt'.

Defined in: [src/persistence/models/stremio.ts:478](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L478)

___

### name

• **name**: [*ShortManifestResource*](../modules/persistence_models_stremio.md#shortmanifestresource)

Resource name.

Defined in: [src/persistence/models/stremio.ts:468](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L468)

___

### types

• **types**: [*ContentType*](../modules/persistence_models_stremio.md#contenttype)[]

Supported types.

Defined in: [src/persistence/models/stremio.ts:472](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L472)
