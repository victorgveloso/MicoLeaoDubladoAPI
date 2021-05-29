[brazilian-stremio-addon](../README.md) / [Exports](../modules.md) / [persistence/models/stremio](../modules/persistence_models_stremio.md) / ManifestExtra

# Interface: ManifestExtra

[persistence/models/stremio](../modules/persistence_models_stremio.md).ManifestExtra

## Table of contents

### Properties

- [isRequired](persistence_models_stremio.manifestextra.md#isrequired)
- [name](persistence_models_stremio.manifestextra.md#name)
- [options](persistence_models_stremio.manifestextra.md#options)
- [optionsLimit](persistence_models_stremio.manifestextra.md#optionslimit)

## Properties

### isRequired

• `Optional` **isRequired**: *boolean*

Set to true if this property must always be passed.

Defined in: [src/persistence/models/stremio.ts:517](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L517)

___

### name

• **name**: [*Extra*](../modules/persistence_models_stremio.md#extra)

The name of the property

This name will be used in the extraProps argument itself.

Defined in: [src/persistence/models/stremio.ts:513](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L513)

___

### options

• `Optional` **options**: *string*[]

Possible values for this property.
This is useful for things like genres, where you need the user to select from a pre-set list of options.

e.g. { name: "genre", options: ["Action", "Comedy", "Drama"] }

It's also useful if we want to specify a limited number of pages (for the skip parameter).

e.g. { name: "skip", options: ["0", "100", "200"] }

Defined in: [src/persistence/models/stremio.ts:529](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L529)

___

### optionsLimit

• `Optional` **optionsLimit**: *number*

The limit of values a user may select from the pre-set options list

By default this is set to 1.

Defined in: [src/persistence/models/stremio.ts:535](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L535)
