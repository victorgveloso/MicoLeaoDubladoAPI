[brazilian-stremio-addon](../README.md) / [Exports](../modules.md) / [persistence/models/stremio](../modules/persistence_models_stremio.md) / MetaPreview

# Interface: MetaPreview

[persistence/models/stremio](../modules/persistence_models_stremio.md).MetaPreview

Summarized collection of meta items.

Catalogs are displayed on the Stremio's Board, Discover and Search.

## Hierarchy

- **MetaPreview**

  ↳ [*MetaDetail*](persistence_models_stremio.metadetail.md)

## Table of contents

### Properties

- [background](persistence_models_stremio.metapreview.md#background)
- [description](persistence_models_stremio.metapreview.md#description)
- [id](persistence_models_stremio.metapreview.md#id)
- [logo](persistence_models_stremio.metapreview.md#logo)
- [name](persistence_models_stremio.metapreview.md#name)
- [poster](persistence_models_stremio.metapreview.md#poster)
- [posterShape](persistence_models_stremio.metapreview.md#postershape)
- [type](persistence_models_stremio.metapreview.md#type)

## Properties

### background

• `Optional` **background**: *string*

The background shown on the stremio detail page.

Heavily encouraged if you want your content to look good.

URL to PNG, max file size 500kb.

Defined in: [src/persistence/models/stremio.ts:92](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L92)

___

### description

• `Optional` **description**: *string*

A few sentences describing your content.

Defined in: [src/persistence/models/stremio.ts:104](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L104)

___

### id

• **id**: *string*

Universal identifier.
You may use a prefix unique to your addon.

Example: 'yt_id:UCrDkAvwZum-UTjHmzDI2iIw'

Defined in: [src/persistence/models/stremio.ts:61](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L61)

___

### logo

• `Optional` **logo**: *string*

The logo shown on the stremio detail page.

Encouraged if you want your content to look good.

URL to PNG.

Defined in: [src/persistence/models/stremio.ts:100](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L100)

___

### name

• **name**: *string*

Name of the content.

Defined in: [src/persistence/models/stremio.ts:69](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L69)

___

### poster

• `Optional` **poster**: *string*

URL to PNG of poster.

Accepted aspect ratios: 1:0.675 (IMDb poster type) or 1:1 (square).

You can use any resolution, as long as the file size is below 100kb.
Below 50kb is recommended

Defined in: [src/persistence/models/stremio.ts:78](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L78)

___

### posterShape

• `Optional` **posterShape**: ``"square"`` \| ``"regular"`` \| ``"landscape"``

Poster can be square (1:1 aspect) or regular (1:0.675) or landscape (1:1.77).

Defaults to 'regular'.

Defined in: [src/persistence/models/stremio.ts:84](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L84)

___

### type

• **type**: [*ContentType*](../modules/persistence_models_stremio.md#contenttype)

Type of the content.

Defined in: [src/persistence/models/stremio.ts:65](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L65)
