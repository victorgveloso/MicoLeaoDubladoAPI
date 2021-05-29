[brazilian-stremio-addon](../README.md) / [Exports](../modules.md) / [persistence/models/stremio](../modules/persistence_models_stremio.md) / MetaVideo

# Interface: MetaVideo

[persistence/models/stremio](../modules/persistence_models_stremio.md).MetaVideo

## Table of contents

### Properties

- [available](persistence_models_stremio.metavideo.md#available)
- [episode](persistence_models_stremio.metavideo.md#episode)
- [id](persistence_models_stremio.metavideo.md#id)
- [overview](persistence_models_stremio.metavideo.md#overview)
- [released](persistence_models_stremio.metavideo.md#released)
- [season](persistence_models_stremio.metavideo.md#season)
- [streams](persistence_models_stremio.metavideo.md#streams)
- [thumbnail](persistence_models_stremio.metavideo.md#thumbnail)
- [title](persistence_models_stremio.metavideo.md#title)
- [trailer](persistence_models_stremio.metavideo.md#trailer)

## Properties

### available

• `Optional` **available**: *boolean*

Set to true to explicitly state that this video is available for streaming, from your addon.

No need to use this if you've passed stream.

Defined in: [src/persistence/models/stremio.ts:248](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L248)

___

### episode

• `Optional` **episode**: *number*

Episode number, if applicable.

Defined in: [src/persistence/models/stremio.ts:252](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L252)

___

### id

• **id**: *string*

ID of the video.

Defined in: [src/persistence/models/stremio.ts:214](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L214)

___

### overview

• `Optional` **overview**: *string*

Video overview/summary

Defined in: [src/persistence/models/stremio.ts:264](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L264)

___

### released

• **released**: *string*

ISO 8601, publish date of the video.

for episodes, this should be the initial air date.

e.g. "2010-12-06T05:00:00.000Z"

Defined in: [src/persistence/models/stremio.ts:226](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L226)

___

### season

• `Optional` **season**: *number*

Season number, if applicable.

Defined in: [src/persistence/models/stremio.ts:256](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L256)

___

### streams

• `Optional` **streams**: [*Stream*](persistence_models_stremio.stream.md)[]

In case you can return links to streams while forming meta response,
you can pass and array of Stream Objects to point the video to a HTTP URL, BitTorrent,
YouTube or any other stremio-supported transport protocol.

Note that this is exclusive: passing video.streams means that Stremio will not request any streams
from other addons for that video.
If you return streams that way, it is still recommended to implement the streams resource.

Defined in: [src/persistence/models/stremio.ts:242](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L242)

___

### thumbnail

• `Optional` **thumbnail**: *string*

URL to png of the video thumbnail, in the video's aspect ratio.

max file size 5kb.

Defined in: [src/persistence/models/stremio.ts:232](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L232)

___

### title

• **title**: *string*

Title of the video.

Defined in: [src/persistence/models/stremio.ts:218](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L218)

___

### trailer

• `Optional` **trailer**: *string*

YouTube ID of the trailer video; use if this is an episode for a series.

Defined in: [src/persistence/models/stremio.ts:260](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L260)
