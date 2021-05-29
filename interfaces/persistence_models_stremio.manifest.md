[brazilian-stremio-addon](../README.md) / [Exports](../modules.md) / [persistence/models/stremio](../modules/persistence_models_stremio.md) / Manifest

# Interface: Manifest

[persistence/models/stremio](../modules/persistence_models_stremio.md).Manifest

The addon description and capabilities.

The first thing to define for your addon is the manifest, which describes it's name, purpose and some technical details.

## Table of contents

### Properties

- [addonCatalogs](persistence_models_stremio.manifest.md#addoncatalogs)
- [background](persistence_models_stremio.manifest.md#background)
- [behaviorHints](persistence_models_stremio.manifest.md#behaviorhints)
- [catalogs](persistence_models_stremio.manifest.md#catalogs)
- [contactEmail](persistence_models_stremio.manifest.md#contactemail)
- [description](persistence_models_stremio.manifest.md#description)
- [id](persistence_models_stremio.manifest.md#id)
- [idPrefixes](persistence_models_stremio.manifest.md#idprefixes)
- [logo](persistence_models_stremio.manifest.md#logo)
- [name](persistence_models_stremio.manifest.md#name)
- [resources](persistence_models_stremio.manifest.md#resources)
- [types](persistence_models_stremio.manifest.md#types)
- [version](persistence_models_stremio.manifest.md#version)

## Properties

### addonCatalogs

• `Optional` **addonCatalogs**: [*ManifestCatalog*](persistence_models_stremio.manifestcatalog.md)[]

Array of Catalog objects, a list of other addon manifests.

This can be used for an addon to act just as a catalog of other addons.

Defined in: [src/persistence/models/stremio.ts:413](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L413)

___

### background

• `Optional` **background**: *string*

Background image for the addon.

URL to png/jpg, at least 1024x786 resolution.

Defined in: [src/persistence/models/stremio.ts:419](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L419)

___

### behaviorHints

• `Optional` **behaviorHints**: *object*

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `adult?` | *boolean* | If the addon includes adult content.  Defaults to false. |
| `p2p?` | *boolean* | If the addon includes P2P content, such as BitTorrent, which may reveal the user's IP to other streaming parties.  Used to provide an adequate warning to the user. |

Defined in: [src/persistence/models/stremio.ts:430](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L430)

___

### catalogs

• **catalogs**: [*ManifestCatalog*](persistence_models_stremio.manifestcatalog.md)[]

A list of the content catalogs your addon provides.

Leave this an empty array ([]) if your addon does not provide the catalog resource.

Defined in: [src/persistence/models/stremio.ts:407](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L407)

___

### contactEmail

• `Optional` **contactEmail**: *string*

Contact email for addon issues.
Used for the Report button in the app.
Also, the Stremio team may reach you on this email for anything relating your addon.

Defined in: [src/persistence/models/stremio.ts:429](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L429)

___

### description

• **description**: *string*

 Human readable description

Defined in: [src/persistence/models/stremio.ts:379](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L379)

___

### id

• **id**: *string*

Identifier, dot-separated, e.g. "com.stremio.filmon"

Defined in: [src/persistence/models/stremio.ts:371](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L371)

___

### idPrefixes

• `Optional` **idPrefixes**: *string*[]

Use this if you want your addon to be called only for specific content IDs.

For example, if you set this to ["yt_id:", "tt"], your addon will only be called for id values that start with 'yt_id:' or 'tt'.

Defined in: [src/persistence/models/stremio.ts:401](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L401)

___

### logo

• `Optional` **logo**: *string*

Logo icon, URL to png, monochrome, 256x256.

Defined in: [src/persistence/models/stremio.ts:423](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L423)

___

### name

• **name**: *string*

Human readable name

Defined in: [src/persistence/models/stremio.ts:375](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L375)

___

### resources

• **resources**: [*ShortManifestResource*](../modules/persistence_models_stremio.md#shortmanifestresource)[] \| [*FullManifestResource*](persistence_models_stremio.fullmanifestresource.md)[]

Supported resources, defined as an array of objects (long version) or strings (short version).

Example #1: [{"name": "stream", "types": ["movie"], "idPrefixes": ["tt"]}]

Example #2: ["catalog", "meta", "stream", "subtitles", "addon_catalog"]

Defined in: [src/persistence/models/stremio.ts:391](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L391)

___

### types

• **types**: [*ContentType*](../modules/persistence_models_stremio.md#contenttype)[]

Supported types.

Defined in: [src/persistence/models/stremio.ts:395](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L395)

___

### version

• **version**: *string*

Semantic version of the addon

Defined in: [src/persistence/models/stremio.ts:383](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L383)
