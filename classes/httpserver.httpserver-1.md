[brazilian-stremio-addon](../README.md) / [Exports](../modules.md) / [HttpServer](../modules/httpserver.md) / HttpServer

# Class: HttpServer

[HttpServer](../modules/httpserver.md).HttpServer

Module responsible to merge AddonInterface's default router with custom/extended router

## Table of contents

### Constructors

- [constructor](httpserver.httpserver-1.md#constructor)

### Properties

- [addonInterface](httpserver.httpserver-1.md#addoninterface)
- [app](httpserver.httpserver-1.md#app)
- [opts](httpserver.httpserver-1.md#opts)

### Methods

- [createCachedServer](httpserver.httpserver-1.md#createcachedserver)
- [getRouter](httpserver.httpserver-1.md#getrouter)
- [serve](httpserver.httpserver-1.md#serve)
- [serveAPI](httpserver.httpserver-1.md#serveapi)
- [serveLandingPage](httpserver.httpserver-1.md#servelandingpage)
- [serveStatic](httpserver.httpserver-1.md#servestatic)
- [start](httpserver.httpserver-1.md#start)

## Constructors

### constructor

\+ **new HttpServer**(`addonInterface`: [*AddonInterface*](../interfaces/persistence_models_stremio.addoninterface.md), `opts?`: {}): [*HttpServer*](httpserver.httpserver-1.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `addonInterface` | [*AddonInterface*](../interfaces/persistence_models_stremio.addoninterface.md) | - |
| `opts` | *object* | {} |

**Returns:** [*HttpServer*](httpserver.httpserver-1.md)

Defined in: [src/HttpServer.ts:32](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/HttpServer.ts#L32)

## Properties

### addonInterface

• **addonInterface**: [*AddonInterface*](../interfaces/persistence_models_stremio.addoninterface.md)

Defined in: [src/HttpServer.ts:15](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/HttpServer.ts#L15)

___

### app

• **app**: *Express*

Defined in: [src/HttpServer.ts:32](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/HttpServer.ts#L32)

___

### opts

• **opts**: *object*

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cache?` | *number* | - |
| `cacheMaxAge?` | *number* | (in seconds) cacheMaxAge means the Cache-Control header being set to max-age=$cacheMaxAge |
| `getRouter?` | (`o`: [*AddonInterface*](../interfaces/persistence_models_stremio.addoninterface.md)) => *any* | Custom router param. If undefined stremio's default router is used |
| `port?` | *number* | - |
| `static?` | *string* | Static directory to serve. |

Defined in: [src/HttpServer.ts:16](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/HttpServer.ts#L16)

## Methods

### createCachedServer

▸ `Private` **createCachedServer**(): *Express*

Factory method to Express.js app with preconfigured cache headers.

**Returns:** *Express*

an Express.js app

Defined in: [src/HttpServer.ts:53](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/HttpServer.ts#L53)

___

### getRouter

▸ `Private` **getRouter**(): *any*

Extract the custom router from the optional parameters or retrieve the default router.

**Returns:** *any*

Defined in: [src/HttpServer.ts:83](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/HttpServer.ts#L83)

___

### serve

▸ **serve**(): *Promise*<{ `server`: *Server* ; `url`: *string*  }\>

Serve all contents and start server

**Returns:** *Promise*<{ `server`: *Server* ; `url`: *string*  }\>

general informations about the running server

Defined in: [src/HttpServer.ts:42](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/HttpServer.ts#L42)

___

### serveAPI

▸ `Private` **serveAPI**(): *void*

Add the API endpoints into the express.js app.

**Returns:** *void*

Defined in: [src/HttpServer.ts:76](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/HttpServer.ts#L76)

___

### serveLandingPage

▸ `Private` **serveLandingPage**(): *void*

Add the landing page (front-end of the addon website) into the express.js app.

**Returns:** *void*

Defined in: [src/HttpServer.ts:101](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/HttpServer.ts#L101)

___

### serveStatic

▸ `Private` **serveStatic**(): *void*

Add the optional static content to be served by the express.js app.

**Returns:** *void*

Defined in: [src/HttpServer.ts:89](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/HttpServer.ts#L89)

___

### start

▸ `Private` **start**(): *Promise*<{ `server`: *Server* ; `url`: *string*  }\>

Start the express.js app.

**Returns:** *Promise*<{ `server`: *Server* ; `url`: *string*  }\>

general information about the running server

Defined in: [src/HttpServer.ts:113](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/HttpServer.ts#L113)
