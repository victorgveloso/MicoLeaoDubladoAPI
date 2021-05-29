[brazilian-stremio-addon](../README.md) / [Exports](../modules.md) / [persistence/models/stremio](../modules/persistence_models_stremio.md) / MetaDetail

# Interface: MetaDetail

[persistence/models/stremio](../modules/persistence_models_stremio.md).MetaDetail

Detailed description of a meta item.

This description is displayed when the user selects an item form the catalog.

## Hierarchy

- [*MetaPreview*](persistence_models_stremio.metapreview.md)

  ↳ **MetaDetail**

## Table of contents

### Properties

- [awards](persistence_models_stremio.metadetail.md#awards)
- [background](persistence_models_stremio.metadetail.md#background)
- [behaviourHints](persistence_models_stremio.metadetail.md#behaviourhints)
- [cast](persistence_models_stremio.metadetail.md#cast)
- [country](persistence_models_stremio.metadetail.md#country)
- [description](persistence_models_stremio.metadetail.md#description)
- [director](persistence_models_stremio.metadetail.md#director)
- [genres](persistence_models_stremio.metadetail.md#genres)
- [id](persistence_models_stremio.metadetail.md#id)
- [imdbRating](persistence_models_stremio.metadetail.md#imdbrating)
- [language](persistence_models_stremio.metadetail.md#language)
- [links](persistence_models_stremio.metadetail.md#links)
- [logo](persistence_models_stremio.metadetail.md#logo)
- [name](persistence_models_stremio.metadetail.md#name)
- [poster](persistence_models_stremio.metadetail.md#poster)
- [posterShape](persistence_models_stremio.metadetail.md#postershape)
- [releaseInfo](persistence_models_stremio.metadetail.md#releaseinfo)
- [released](persistence_models_stremio.metadetail.md#released)
- [runtime](persistence_models_stremio.metadetail.md#runtime)
- [type](persistence_models_stremio.metadetail.md#type)
- [videos](persistence_models_stremio.metadetail.md#videos)
- [website](persistence_models_stremio.metadetail.md#website)

## Properties

### awards

• `Optional` **awards**: *string*

Human-readable that describes all the significant awards.

Defined in: [src/persistence/models/stremio.ts:179](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L179)

___

### background

• `Optional` **background**: *string*

The background shown on the stremio detail page.

Heavily encouraged if you want your content to look good.

URL to PNG, max file size 500kb.

Inherited from: [MetaPreview](persistence_models_stremio.metapreview.md).[background](persistence_models_stremio.metapreview.md#background)

Defined in: [src/persistence/models/stremio.ts:92](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L92)

___

### behaviourHints

• `Optional` **behaviourHints**: *object*

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `defaultVideo?` | *string* \| *boolean* | Set to a Video Object id in order to open the Detail page directly to that video's streams. |

Defined in: [src/persistence/models/stremio.ts:184](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L184)

___

### cast

• `Optional` **cast**: *string*[]

Array of members of the cast.

use 'links' instead

**`deprecated`**

Defined in: [src/persistence/models/stremio.ts:137](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L137)

___

### country

• `Optional` **country**: *string*

Official country of origin.

Defined in: [src/persistence/models/stremio.ts:175](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L175)

___

### description

• `Optional` **description**: *string*

A few sentences describing your content.

Inherited from: [MetaPreview](persistence_models_stremio.metapreview.md).[description](persistence_models_stremio.metapreview.md#description)

Defined in: [src/persistence/models/stremio.ts:104](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L104)

___

### director

• `Optional` **director**: *string*[]

Array of directors.

Deprecated: use 'links' instead

**`deprecated`**

Defined in: [src/persistence/models/stremio.ts:129](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L129)

___

### genres

• `Optional` **genres**: *string*[]

genre/categories of the content.

e.g. ["Thriller", "Horror"]

**WARNING: this will soon be deprecated, use 'links' instead**

Defined in: [src/persistence/models/stremio.ts:120](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L120)

___

### id

• **id**: *string*

Universal identifier.
You may use a prefix unique to your addon.

Example: 'yt_id:UCrDkAvwZum-UTjHmzDI2iIw'

Inherited from: [MetaPreview](persistence_models_stremio.metapreview.md).[id](persistence_models_stremio.metapreview.md#id)

Defined in: [src/persistence/models/stremio.ts:61](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L61)

___

### imdbRating

• `Optional` **imdbRating**: *string*

IMDb rating, which should be a number from 0.0 to 10.0.

Defined in: [src/persistence/models/stremio.ts:141](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L141)

___

### language

• `Optional` **language**: *string*

Spoken language.

Defined in: [src/persistence/models/stremio.ts:171](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L171)

___

### links

• `Optional` **links**: [*MetaLink*](persistence_models_stremio.metalink.md)[]

Can be used to link to internal pages of Stremio.

example: array of actor / genre / director links.

Defined in: [src/persistence/models/stremio.ts:155](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L155)

___

### logo

• `Optional` **logo**: *string*

The logo shown on the stremio detail page.

Encouraged if you want your content to look good.

URL to PNG.

Inherited from: [MetaPreview](persistence_models_stremio.metapreview.md).[logo](persistence_models_stremio.metapreview.md#logo)

Defined in: [src/persistence/models/stremio.ts:100](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L100)

___

### name

• **name**: *string*

Name of the content.

Inherited from: [MetaPreview](persistence_models_stremio.metapreview.md).[name](persistence_models_stremio.metapreview.md#name)

Defined in: [src/persistence/models/stremio.ts:69](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L69)

___

### poster

• `Optional` **poster**: *string*

URL to PNG of poster.

Accepted aspect ratios: 1:0.675 (IMDb poster type) or 1:1 (square).

You can use any resolution, as long as the file size is below 100kb.
Below 50kb is recommended

Inherited from: [MetaPreview](persistence_models_stremio.metapreview.md).[poster](persistence_models_stremio.metapreview.md#poster)

Defined in: [src/persistence/models/stremio.ts:78](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L78)

___

### posterShape

• `Optional` **posterShape**: ``"square"`` \| ``"regular"`` \| ``"landscape"``

Poster can be square (1:1 aspect) or regular (1:0.675) or landscape (1:1.77).

Defaults to 'regular'.

Inherited from: [MetaPreview](persistence_models_stremio.metapreview.md).[posterShape](persistence_models_stremio.metapreview.md#postershape)

Defined in: [src/persistence/models/stremio.ts:84](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L84)

___

### releaseInfo

• `Optional` **releaseInfo**: *string*

Defined in: [src/persistence/models/stremio.ts:121](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L121)

___

### released

• `Optional` **released**: *string*

ISO 8601, initial release date.

For movies, this is the cinema debut.

e.g. "2010-12-06T05:00:00.000Z"

Defined in: [src/persistence/models/stremio.ts:149](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L149)

___

### runtime

• `Optional` **runtime**: *string*

Human-readable expected runtime.

e.g. "120m"

Defined in: [src/persistence/models/stremio.ts:167](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L167)

___

### type

• **type**: [*ContentType*](../modules/persistence_models_stremio.md#contenttype)

Type of the content.

Inherited from: [MetaPreview](persistence_models_stremio.metapreview.md).[type](persistence_models_stremio.metapreview.md#type)

Defined in: [src/persistence/models/stremio.ts:65](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L65)

___

### videos

• `Optional` **videos**: [*MetaVideo*](persistence_models_stremio.metavideo.md)[]

Used for channel and series.

If you do not provide this (e.g. for movie), Stremio assumes this meta item has one video, and it's ID is equal to the meta item id.

Defined in: [src/persistence/models/stremio.ts:161](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L161)

___

### website

• `Optional` **website**: *string*

URL to official website.

Defined in: [src/persistence/models/stremio.ts:183](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L183)
