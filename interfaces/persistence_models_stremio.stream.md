[brazilian-stremio-addon](../README.md) / [Exports](../modules.md) / [persistence/models/stremio](../modules/persistence_models_stremio.md) / Stream

# Interface: Stream

[persistence/models/stremio](../modules/persistence_models_stremio.md).Stream

Tells Stremio how to obtain the media content.

It may be torrent info hash, HTTP URL, etc.

## Table of contents

### Properties

- [behaviorHints](persistence_models_stremio.stream.md#behaviorhints)
- [externalUrl](persistence_models_stremio.stream.md#externalurl)
- [fileIdx](persistence_models_stremio.stream.md#fileidx)
- [infoHash](persistence_models_stremio.stream.md#infohash)
- [name](persistence_models_stremio.stream.md#name)
- [subtitles](persistence_models_stremio.stream.md#subtitles)
- [title](persistence_models_stremio.stream.md#title)
- [url](persistence_models_stremio.stream.md#url)
- [ytId](persistence_models_stremio.stream.md#ytid)

## Properties

### behaviorHints

• `Optional` **behaviorHints**: *object*

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `countryWhitelist?` | *string*[] | Hints it's restricted to particular countries.  Array of ISO 3166-1 alpha-3 country codes in lowercase in which the stream is accessible. |
| `group?` | *string* | If defined, addons with the same behaviorHints.group will be chosen automatically for binge watching.  This should be something that identifies the stream's nature within your addon. For example, if your addon is called "gobsAddon", and the stream is 720p, the group should be "gobsAddon-720p". If the next episode has a stream with the same group, stremio should select that stream implicitly. |
| `notWebReady?` | *boolean* | Applies if the protocol of the url is http(s).  Needs to be set to true if the URL does not support https or is not an MP4 file. |

Defined in: [src/persistence/models/stremio.ts:315](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L315)

___

### externalUrl

• `Optional` **externalUrl**: *string*

Meta Link or an external URL to the video, which should be opened in a browser (webpage).

e.g. a link to Netflix.

Defined in: [src/persistence/models/stremio.ts:298](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L298)

___

### fileIdx

• `Optional` **fileIdx**: *number*

The index of the video file within the torrent (from infoHash).

If fileIdx is not specified, the largest file in the torrent will be selected.

Defined in: [src/persistence/models/stremio.ts:292](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L292)

___

### infoHash

• `Optional` **infoHash**: *string*

Info hash of a torrent file, and fileIdx is the index of the video file within the torrent.

If fileIdx is not specified, the largest file in the torrent will be selected.

Defined in: [src/persistence/models/stremio.ts:286](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L286)

___

### name

• `Optional` **name**: *string*

Name of the stream

Usually a short name to identify the addon that provided the stream

Defined in: [src/persistence/models/stremio.ts:310](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L310)

___

### subtitles

• `Optional` **subtitles**: [*Subtitle*](persistence_models_stremio.subtitle.md)[]

Array of Subtitle objects representing subtitles for this stream.

Defined in: [src/persistence/models/stremio.ts:314](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L314)

___

### title

• `Optional` **title**: *string*

Title of the stream

Usually used for stream quality.

Defined in: [src/persistence/models/stremio.ts:304](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L304)

___

### url

• `Optional` **url**: *string*

Direct URL to a video stream - http, https, rtmp protocols are supported.

Defined in: [src/persistence/models/stremio.ts:276](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L276)

___

### ytId

• `Optional` **ytId**: *string*

Youtube video ID, plays using the built-in YouTube player.

Defined in: [src/persistence/models/stremio.ts:280](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stremio.ts#L280)
