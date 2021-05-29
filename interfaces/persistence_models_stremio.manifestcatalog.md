[brazilian-stremio-addon](../README.md) / [Exports](../modules.md) / [persistence/models/stremio](../modules/persistence_models_stremio.md) / ManifestCatalog

# Interface: ManifestCatalog

[persistence/models/stremio](../modules/persistence_models_stremio.md).ManifestCatalog

## Table of contents

### Properties

- [extra](persistence_models_stremio.manifestcatalog.md#extra)
- [genres](persistence_models_stremio.manifestcatalog.md#genres)
- [id](persistence_models_stremio.manifestcatalog.md#id)
- [name](persistence_models_stremio.manifestcatalog.md#name)
- [type](persistence_models_stremio.manifestcatalog.md#type)

## Properties

### extra

• `Optional` **extra**: [*ManifestExtra*](persistence_models_stremio.manifestextra.md)[]

All extra properties related to this catalog.

Defined in: [src/persistence/models/stremio.ts:504](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L504)

___

### genres

• `Optional` **genres**: *string*[]

Use the 'options' property of 'extra' instead.

**`deprecated`**

Defined in: [src/persistence/models/stremio.ts:500](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L500)

___

### id

• **id**: *string*

The id of the catalog, can be any unique string describing the catalog (unique per addon, as an addon can have many catalogs).

For example: if the catalog name is "Favourite Youtube Videos", the id can be "fav_youtube_videos".

Defined in: [src/persistence/models/stremio.ts:491](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L491)

___

### name

• **name**: *string*

Human readable name of the catalog.

Defined in: [src/persistence/models/stremio.ts:495](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L495)

___

### type

• **type**: [*ContentType*](../modules/persistence_models_stremio.md#contenttype)

 This is the content type of the catalog.

Defined in: [src/persistence/models/stremio.ts:485](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L485)
