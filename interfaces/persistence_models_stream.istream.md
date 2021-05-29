[brazilian-stremio-addon](../README.md) / [Exports](../modules.md) / [persistence/models/stream](../modules/persistence_models_stream.md) / IStream

# Interface: IStream

[persistence/models/stream](../modules/persistence_models_stream.md).IStream

Stream describes a multimedia content and how to download/play it.
A multimedia title may contains multiple streams associated with it.

## Hierarchy

- *Document*

  ↳ **IStream**

## Table of contents

### Properties

- [$locals](persistence_models_stream.istream.md#$locals)
- [$op](persistence_models_stream.istream.md#$op)
- [$where](persistence_models_stream.istream.md#$where)
- [\_\_v](persistence_models_stream.istream.md#__v)
- [\_id](persistence_models_stream.istream.md#_id)
- [baseModelName](persistence_models_stream.istream.md#basemodelname)
- [collection](persistence_models_stream.istream.md#collection)
- [db](persistence_models_stream.istream.md#db)
- [episode](persistence_models_stream.istream.md#episode)
- [errors](persistence_models_stream.istream.md#errors)
- [fileIdx](persistence_models_stream.istream.md#fileidx)
- [id](persistence_models_stream.istream.md#id)
- [infoHash](persistence_models_stream.istream.md#infohash)
- [isNew](persistence_models_stream.istream.md#isnew)
- [metaId](persistence_models_stream.istream.md#metaid)
- [modelName](persistence_models_stream.istream.md#modelname)
- [schema](persistence_models_stream.istream.md#schema)
- [season](persistence_models_stream.istream.md#season)
- [seeders](persistence_models_stream.istream.md#seeders)
- [size](persistence_models_stream.istream.md#size)
- [sources](persistence_models_stream.istream.md#sources)
- [streamId](persistence_models_stream.istream.md#streamid)
- [title](persistence_models_stream.istream.md#title)
- [type](persistence_models_stream.istream.md#type)

### Methods

- [$getAllSubdocs](persistence_models_stream.istream.md#$getallsubdocs)
- [$getPopulatedDocs](persistence_models_stream.istream.md#$getpopulateddocs)
- [$ignore](persistence_models_stream.istream.md#$ignore)
- [$isDefault](persistence_models_stream.istream.md#$isdefault)
- [$isDeleted](persistence_models_stream.istream.md#$isdeleted)
- [$isEmpty](persistence_models_stream.istream.md#$isempty)
- [$isValid](persistence_models_stream.istream.md#$isvalid)
- [$markValid](persistence_models_stream.istream.md#$markvalid)
- [$session](persistence_models_stream.istream.md#$session)
- [$set](persistence_models_stream.istream.md#$set)
- [delete](persistence_models_stream.istream.md#delete)
- [deleteOne](persistence_models_stream.istream.md#deleteone)
- [depopulate](persistence_models_stream.istream.md#depopulate)
- [directModifiedPaths](persistence_models_stream.istream.md#directmodifiedpaths)
- [equals](persistence_models_stream.istream.md#equals)
- [execPopulate](persistence_models_stream.istream.md#execpopulate)
- [get](persistence_models_stream.istream.md#get)
- [getChanges](persistence_models_stream.istream.md#getchanges)
- [increment](persistence_models_stream.istream.md#increment)
- [init](persistence_models_stream.istream.md#init)
- [invalidate](persistence_models_stream.istream.md#invalidate)
- [isDirectModified](persistence_models_stream.istream.md#isdirectmodified)
- [isDirectSelected](persistence_models_stream.istream.md#isdirectselected)
- [isInit](persistence_models_stream.istream.md#isinit)
- [isModified](persistence_models_stream.istream.md#ismodified)
- [isSelected](persistence_models_stream.istream.md#isselected)
- [markModified](persistence_models_stream.istream.md#markmodified)
- [model](persistence_models_stream.istream.md#model)
- [modifiedPaths](persistence_models_stream.istream.md#modifiedpaths)
- [overwrite](persistence_models_stream.istream.md#overwrite)
- [populate](persistence_models_stream.istream.md#populate)
- [populated](persistence_models_stream.istream.md#populated)
- [remove](persistence_models_stream.istream.md#remove)
- [replaceOne](persistence_models_stream.istream.md#replaceone)
- [save](persistence_models_stream.istream.md#save)
- [set](persistence_models_stream.istream.md#set)
- [toJSON](persistence_models_stream.istream.md#tojson)
- [toObject](persistence_models_stream.istream.md#toobject)
- [unmarkModified](persistence_models_stream.istream.md#unmarkmodified)
- [update](persistence_models_stream.istream.md#update)
- [updateOne](persistence_models_stream.istream.md#updateone)
- [validate](persistence_models_stream.istream.md#validate)
- [validateSync](persistence_models_stream.istream.md#validatesync)

## Properties

### $locals

• **$locals**: *Record*<string, unknown\>

Empty object that you can use for storing properties on the document. This
is handy for passing data to middleware without conflicting with Mongoose
internals.

Inherited from: Document.$locals

Defined in: node_modules/mongoose/index.d.ts:409

___

### $op

• **$op**: ``null`` \| *string*

A string containing the current operation that Mongoose is executing
on this document. May be `null`, `'save'`, `'validate'`, or `'remove'`.

Inherited from: Document.$op

Defined in: node_modules/mongoose/index.d.ts:418

___

### $where

• **$where**: *Record*<string, unknown\>

Additional properties to attach to the query when calling `save()` and `isNew` is false.

Inherited from: Document.$where

Defined in: node_modules/mongoose/index.d.ts:433

___

### \_\_v

• `Optional` **\_\_v**: *any*

This documents __v.

Inherited from: Document.\_\_v

Defined in: node_modules/mongoose/index.d.ts:377

___

### \_id

• `Optional` **\_id**: *any*

This documents _id.

Inherited from: Document.\_id

Defined in: node_modules/mongoose/index.d.ts:374

___

### baseModelName

• `Optional` **baseModelName**: *string*

If this is a discriminator model, `baseModelName` is the name of the base model.

Inherited from: Document.baseModelName

Defined in: node_modules/mongoose/index.d.ts:436

___

### collection

• **collection**: *Collection*

Collection the model uses.

Inherited from: Document.collection

Defined in: node_modules/mongoose/index.d.ts:439

___

### db

• **db**: *Connection*

Connection the model uses.

Inherited from: Document.db

Defined in: node_modules/mongoose/index.d.ts:442

___

### episode

• `Optional` **episode**: *number*

Defined in: [src/persistence/models/stream.ts:15](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stream.ts#L15)

___

### errors

• `Optional` **errors**: *ValidationError*

Hash containing current validation errors.

Inherited from: Document.errors

Defined in: node_modules/mongoose/index.d.ts:474

___

### fileIdx

• `Optional` **fileIdx**: *number*

Defined in: [src/persistence/models/stream.ts:14](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stream.ts#L14)

___

### id

• `Optional` **id**: *any*

The string version of this documents _id.

Inherited from: Document.id

Defined in: node_modules/mongoose/index.d.ts:490

___

### infoHash

• **infoHash**: *string*

Defined in: [src/persistence/models/stream.ts:11](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stream.ts#L11)

___

### isNew

• **isNew**: *boolean*

Boolean flag specifying if the document is new.

Inherited from: Document.isNew

Defined in: node_modules/mongoose/index.d.ts:521

___

### metaId

• **metaId**: *string*

Defined in: [src/persistence/models/stream.ts:7](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stream.ts#L7)

___

### modelName

• **modelName**: *string*

The name of the model

Inherited from: Document.modelName

Defined in: node_modules/mongoose/index.d.ts:536

___

### schema

• **schema**: *Schema*<Document<any, any\>, Model<any, any, any\>, undefined\>

The document's schema.

Inherited from: Document.schema

Defined in: node_modules/mongoose/index.d.ts:570

___

### season

• `Optional` **season**: *number*

Defined in: [src/persistence/models/stream.ts:16](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stream.ts#L16)

___

### seeders

• `Optional` **seeders**: *number*

Defined in: [src/persistence/models/stream.ts:13](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stream.ts#L13)

___

### size

• `Optional` **size**: *number*

Defined in: [src/persistence/models/stream.ts:17](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stream.ts#L17)

___

### sources

• **sources**: *string*[]

Defined in: [src/persistence/models/stream.ts:12](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stream.ts#L12)

___

### streamId

• **streamId**: *string*

Defined in: [src/persistence/models/stream.ts:8](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stream.ts#L8)

___

### title

• **title**: *string*

Defined in: [src/persistence/models/stream.ts:10](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stream.ts#L10)

___

### type

• **type**: *string*

Defined in: [src/persistence/models/stream.ts:9](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/persistence/models/stream.ts#L9)

## Methods

### $getAllSubdocs

▸ **$getAllSubdocs**(): *Document*<any, any\>[]

**Returns:** *Document*<any, any\>[]

Inherited from: Document.$getAllSubdocs

Defined in: node_modules/mongoose/index.d.ts:380

___

### $getPopulatedDocs

▸ **$getPopulatedDocs**(): *Document*<any, any\>[]

Returns an array of all populated documents associated with the query

**Returns:** *Document*<any, any\>[]

Inherited from: Document.$getPopulatedDocs

Defined in: node_modules/mongoose/index.d.ts:392

___

### $ignore

▸ **$ignore**(`path`: *string*): *void*

Don't run validation on this path or persist changes to this path.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |

**Returns:** *void*

Inherited from: Document.$ignore

Defined in: node_modules/mongoose/index.d.ts:383

___

### $isDefault

▸ **$isDefault**(`path`: *string*): *boolean*

Checks if a path is set to its default.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |

**Returns:** *boolean*

Inherited from: Document.$isDefault

Defined in: node_modules/mongoose/index.d.ts:386

___

### $isDeleted

▸ **$isDeleted**(`val?`: *boolean*): *boolean*

Getter/setter, determines whether the document was removed or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val?` | *boolean* |

**Returns:** *boolean*

Inherited from: Document.$isDeleted

Defined in: node_modules/mongoose/index.d.ts:389

___

### $isEmpty

▸ **$isEmpty**(`path`: *string*): *boolean*

Returns true if the given path is nullish or only contains empty objects.
Useful for determining whether this subdoc will get stripped out by the
[minimize option](/docs/guide.html#minimize).

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |

**Returns:** *boolean*

Inherited from: Document.$isEmpty

Defined in: node_modules/mongoose/index.d.ts:399

___

### $isValid

▸ **$isValid**(`path`: *string*): *boolean*

Checks if a path is invalid

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |

**Returns:** *boolean*

Inherited from: Document.$isValid

Defined in: node_modules/mongoose/index.d.ts:402

___

### $markValid

▸ **$markValid**(`path`: *string*): *void*

Marks a path as valid, removing existing validation errors.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |

**Returns:** *void*

Inherited from: Document.$markValid

Defined in: node_modules/mongoose/index.d.ts:412

___

### $session

▸ **$session**(`session?`: ``null`` \| *ClientSession*): *ClientSession*

Getter/setter around the session associated with this document. Used to
automatically set `session` if you `save()` a doc that you got from a
query with an associated session.

#### Parameters

| Name | Type |
| :------ | :------ |
| `session?` | ``null`` \| *ClientSession* |

**Returns:** *ClientSession*

Inherited from: Document.$session

Defined in: node_modules/mongoose/index.d.ts:425

___

### $set

▸ **$set**(`path`: *string*, `val`: *any*, `options?`: *any*): [*IStream*](persistence_models_stream.istream.md)

Alias for `set()`, used internally to avoid conflicts

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |
| `val` | *any* |
| `options?` | *any* |

**Returns:** [*IStream*](persistence_models_stream.istream.md)

Inherited from: Document.$set

Defined in: node_modules/mongoose/index.d.ts:428

▸ **$set**(`path`: *string*, `val`: *any*, `type`: *any*, `options?`: *any*): [*IStream*](persistence_models_stream.istream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |
| `val` | *any* |
| `type` | *any* |
| `options?` | *any* |

**Returns:** [*IStream*](persistence_models_stream.istream.md)

Inherited from: Document.$set

Defined in: node_modules/mongoose/index.d.ts:429

▸ **$set**(`value`: *any*): [*IStream*](persistence_models_stream.istream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | *any* |

**Returns:** [*IStream*](persistence_models_stream.istream.md)

Inherited from: Document.$set

Defined in: node_modules/mongoose/index.d.ts:430

___

### delete

▸ **delete**(`options?`: QueryOptions): *any*

Removes this document from the db.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | QueryOptions |

**Returns:** *any*

Inherited from: Document.delete

Defined in: node_modules/mongoose/index.d.ts:445

▸ **delete**(`options`: QueryOptions, `cb?`: (`err`: CallbackError, `res`: *any*) => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | QueryOptions |
| `cb?` | (`err`: CallbackError, `res`: *any*) => *void* |

**Returns:** *void*

Inherited from: Document.delete

Defined in: node_modules/mongoose/index.d.ts:446

▸ **delete**(`cb`: (`err`: CallbackError, `res`: *any*) => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`err`: CallbackError, `res`: *any*) => *void* |

**Returns:** *void*

Inherited from: Document.delete

Defined in: node_modules/mongoose/index.d.ts:447

___

### deleteOne

▸ **deleteOne**(`options?`: QueryOptions): *any*

Removes this document from the db.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | QueryOptions |

**Returns:** *any*

Inherited from: Document.deleteOne

Defined in: node_modules/mongoose/index.d.ts:450

▸ **deleteOne**(`options`: QueryOptions, `cb?`: (`err`: CallbackError, `res`: *any*) => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | QueryOptions |
| `cb?` | (`err`: CallbackError, `res`: *any*) => *void* |

**Returns:** *void*

Inherited from: Document.deleteOne

Defined in: node_modules/mongoose/index.d.ts:451

▸ **deleteOne**(`cb`: (`err`: CallbackError, `res`: *any*) => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`err`: CallbackError, `res`: *any*) => *void* |

**Returns:** *void*

Inherited from: Document.deleteOne

Defined in: node_modules/mongoose/index.d.ts:452

___

### depopulate

▸ **depopulate**(`path`: *string*): [*IStream*](persistence_models_stream.istream.md)

Takes a populated field and returns it to its unpopulated state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |

**Returns:** [*IStream*](persistence_models_stream.istream.md)

Inherited from: Document.depopulate

Defined in: node_modules/mongoose/index.d.ts:455

___

### directModifiedPaths

▸ **directModifiedPaths**(): *string*[]

Returns the list of paths that have been directly modified. A direct
modified path is a path that you explicitly set, whether via `doc.foo = 'bar'`,
`Object.assign(doc, { foo: 'bar' })`, or `doc.set('foo', 'bar')`.

**Returns:** *string*[]

Inherited from: Document.directModifiedPaths

Defined in: node_modules/mongoose/index.d.ts:462

___

### equals

▸ **equals**(`doc`: *Document*<any, any\>): *boolean*

Returns true if this document is equal to another document.

Documents are considered equal when they have matching `_id`s, unless neither
document has an `_id`, in which case this function falls back to using
`deepEqual()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | *Document*<any, any\> |

**Returns:** *boolean*

Inherited from: Document.equals

Defined in: node_modules/mongoose/index.d.ts:471

___

### execPopulate

▸ **execPopulate**(): *Promise*<[*IStream*](persistence_models_stream.istream.md)\>

Explicitly executes population and returns a promise. Useful for promises integration.

**Returns:** *Promise*<[*IStream*](persistence_models_stream.istream.md)\>

Inherited from: Document.execPopulate

Defined in: node_modules/mongoose/index.d.ts:477

▸ **execPopulate**(`callback`: (`err`: CallbackError, `res`: [*IStream*](persistence_models_stream.istream.md)) => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`err`: CallbackError, `res`: [*IStream*](persistence_models_stream.istream.md)) => *void* |

**Returns:** *void*

Inherited from: Document.execPopulate

Defined in: node_modules/mongoose/index.d.ts:478

___

### get

▸ **get**(`path`: *string*, `type?`: *any*, `options?`: *any*): *any*

Returns the value of a path.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |
| `type?` | *any* |
| `options?` | *any* |

**Returns:** *any*

Inherited from: Document.get

Defined in: node_modules/mongoose/index.d.ts:481

___

### getChanges

▸ **getChanges**(): *UpdateQuery*<[*IStream*](persistence_models_stream.istream.md)\>

Returns the changes that happened to the document
in the format that will be sent to MongoDB.

**Returns:** *UpdateQuery*<[*IStream*](persistence_models_stream.istream.md)\>

Inherited from: Document.getChanges

Defined in: node_modules/mongoose/index.d.ts:487

___

### increment

▸ **increment**(): [*IStream*](persistence_models_stream.istream.md)

Signal that we desire an increment of this documents version.

**Returns:** [*IStream*](persistence_models_stream.istream.md)

Inherited from: Document.increment

Defined in: node_modules/mongoose/index.d.ts:493

___

### init

▸ **init**(`obj`: *any*, `opts?`: *any*, `cb?`: (`err`: CallbackError, `doc`: [*IStream*](persistence_models_stream.istream.md)) => *void*): [*IStream*](persistence_models_stream.istream.md)

Initializes the document without setters or marking anything modified.
Called internally after a document is returned from mongodb. Normally,
you do **not** need to call this function on your own.

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | *any* |
| `opts?` | *any* |
| `cb?` | (`err`: CallbackError, `doc`: [*IStream*](persistence_models_stream.istream.md)) => *void* |

**Returns:** [*IStream*](persistence_models_stream.istream.md)

Inherited from: Document.init

Defined in: node_modules/mongoose/index.d.ts:500

___

### invalidate

▸ **invalidate**(`path`: *string*, `errorMsg`: *string* \| *NativeError*, `value?`: *any*, `kind?`: *string*): ``null`` \| *NativeError*

Marks a path as invalid, causing validation to fail.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |
| `errorMsg` | *string* \| *NativeError* |
| `value?` | *any* |
| `kind?` | *string* |

**Returns:** ``null`` \| *NativeError*

Inherited from: Document.invalidate

Defined in: node_modules/mongoose/index.d.ts:503

___

### isDirectModified

▸ **isDirectModified**(`path`: *string*): *boolean*

Returns true if `path` was directly set and modified, else false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |

**Returns:** *boolean*

Inherited from: Document.isDirectModified

Defined in: node_modules/mongoose/index.d.ts:506

___

### isDirectSelected

▸ **isDirectSelected**(`path`: *string*): *boolean*

Checks if `path` was explicitly selected. If no projection, always returns true.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |

**Returns:** *boolean*

Inherited from: Document.isDirectSelected

Defined in: node_modules/mongoose/index.d.ts:509

___

### isInit

▸ **isInit**(`path`: *string*): *boolean*

Checks if `path` is in the `init` state, that is, it was set by `Document#init()` and not modified since.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |

**Returns:** *boolean*

Inherited from: Document.isInit

Defined in: node_modules/mongoose/index.d.ts:512

___

### isModified

▸ **isModified**(`path?`: *string* \| *string*[]): *boolean*

Returns true if any of the given paths is modified, else false. If no arguments, returns `true` if any path
in this document is modified.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | *string* \| *string*[] |

**Returns:** *boolean*

Inherited from: Document.isModified

Defined in: node_modules/mongoose/index.d.ts:518

___

### isSelected

▸ **isSelected**(`path`: *string*): *boolean*

Checks if `path` was selected in the source query which initialized this document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |

**Returns:** *boolean*

Inherited from: Document.isSelected

Defined in: node_modules/mongoose/index.d.ts:524

___

### markModified

▸ **markModified**(`path`: *string*, `scope?`: *any*): *void*

Marks the path as having pending changes to write to the db.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |
| `scope?` | *any* |

**Returns:** *void*

Inherited from: Document.markModified

Defined in: node_modules/mongoose/index.d.ts:527

___

### model

▸ **model**<T\>(`name`: *string*): T

Returns another Model instance.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | *Model*<any, {}, {}, T\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |

**Returns:** T

Inherited from: Document.model

Defined in: node_modules/mongoose/index.d.ts:533

___

### modifiedPaths

▸ **modifiedPaths**(`options?`: { `includeChildren?`: *boolean*  }): *string*[]

Returns the list of paths that have been modified.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | *object* |
| `options.includeChildren?` | *boolean* |

**Returns:** *string*[]

Inherited from: Document.modifiedPaths

Defined in: node_modules/mongoose/index.d.ts:530

___

### overwrite

▸ **overwrite**(`obj`: *\_AllowStringsForIds*<LeanDocument<[*IStream*](persistence_models_stream.istream.md)\>\>): [*IStream*](persistence_models_stream.istream.md)

Overwrite all values in this document with the values of `obj`, except
for immutable properties. Behaves similarly to `set()`, except for it
unsets all properties that aren't in `obj`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | *\_AllowStringsForIds*<LeanDocument<[*IStream*](persistence_models_stream.istream.md)\>\> |

**Returns:** [*IStream*](persistence_models_stream.istream.md)

Inherited from: Document.overwrite

Defined in: node_modules/mongoose/index.d.ts:543

___

### populate

▸ **populate**(`path`: *string*, `callback?`: (`err`: CallbackError, `res`: [*IStream*](persistence_models_stream.istream.md)) => *void*): [*IStream*](persistence_models_stream.istream.md)

Populates document references, executing the `callback` when complete.
If you want to use promises instead, use this function with
[`execPopulate()`](#document_Document-execPopulate).

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |
| `callback?` | (`err`: CallbackError, `res`: [*IStream*](persistence_models_stream.istream.md)) => *void* |

**Returns:** [*IStream*](persistence_models_stream.istream.md)

Inherited from: Document.populate

Defined in: node_modules/mongoose/index.d.ts:550

▸ **populate**(`path`: *string*, `names`: *string*, `callback?`: (`err`: *any*, `res`: [*IStream*](persistence_models_stream.istream.md)) => *void*): [*IStream*](persistence_models_stream.istream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |
| `names` | *string* |
| `callback?` | (`err`: *any*, `res`: [*IStream*](persistence_models_stream.istream.md)) => *void* |

**Returns:** [*IStream*](persistence_models_stream.istream.md)

Inherited from: Document.populate

Defined in: node_modules/mongoose/index.d.ts:551

▸ **populate**(`opts`: PopulateOptions \| PopulateOptions[], `callback?`: (`err`: CallbackError, `res`: [*IStream*](persistence_models_stream.istream.md)) => *void*): [*IStream*](persistence_models_stream.istream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | PopulateOptions \| PopulateOptions[] |
| `callback?` | (`err`: CallbackError, `res`: [*IStream*](persistence_models_stream.istream.md)) => *void* |

**Returns:** [*IStream*](persistence_models_stream.istream.md)

Inherited from: Document.populate

Defined in: node_modules/mongoose/index.d.ts:552

___

### populated

▸ **populated**(`path`: *string*): *any*

Gets _id(s) used during population of the given `path`. If the path was not populated, returns `undefined`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |

**Returns:** *any*

Inherited from: Document.populated

Defined in: node_modules/mongoose/index.d.ts:555

___

### remove

▸ **remove**(`options?`: QueryOptions): *Promise*<[*IStream*](persistence_models_stream.istream.md)\>

Removes this document from the db.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | QueryOptions |

**Returns:** *Promise*<[*IStream*](persistence_models_stream.istream.md)\>

Inherited from: Document.remove

Defined in: node_modules/mongoose/index.d.ts:558

▸ **remove**(`options?`: QueryOptions, `cb?`: (`err`: CallbackError, `res`: *any*) => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | QueryOptions |
| `cb?` | (`err`: CallbackError, `res`: *any*) => *void* |

**Returns:** *void*

Inherited from: Document.remove

Defined in: node_modules/mongoose/index.d.ts:559

___

### replaceOne

▸ **replaceOne**(`replacement?`: *\_AllowStringsForIds*<LeanDocument<[*IStream*](persistence_models_stream.istream.md)\>\>, `options?`: ``null`` \| QueryOptions, `callback?`: (`err`: *any*, `res`: *any*) => *void*): *Query*<any, [*IStream*](persistence_models_stream.istream.md), {}\>

Sends a replaceOne command with this document `_id` as the query selector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `replacement?` | *\_AllowStringsForIds*<LeanDocument<[*IStream*](persistence_models_stream.istream.md)\>\> |
| `options?` | ``null`` \| QueryOptions |
| `callback?` | (`err`: *any*, `res`: *any*) => *void* |

**Returns:** *Query*<any, [*IStream*](persistence_models_stream.istream.md), {}\>

Inherited from: Document.replaceOne

Defined in: node_modules/mongoose/index.d.ts:562

___

### save

▸ **save**(`options?`: SaveOptions): *Promise*<[*IStream*](persistence_models_stream.istream.md)\>

Saves this document by inserting a new document into the database if [document.isNew](/docs/api.html#document_Document-isNew) is `true`, or sends an [updateOne](/docs/api.html#document_Document-updateOne) operation with just the modified paths if `isNew` is `false`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | SaveOptions |

**Returns:** *Promise*<[*IStream*](persistence_models_stream.istream.md)\>

Inherited from: Document.save

Defined in: node_modules/mongoose/index.d.ts:565

▸ **save**(`options?`: SaveOptions, `fn?`: (`err`: CallbackError, `doc`: [*IStream*](persistence_models_stream.istream.md)) => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | SaveOptions |
| `fn?` | (`err`: CallbackError, `doc`: [*IStream*](persistence_models_stream.istream.md)) => *void* |

**Returns:** *void*

Inherited from: Document.save

Defined in: node_modules/mongoose/index.d.ts:566

▸ **save**(`fn?`: (`err`: CallbackError, `doc`: [*IStream*](persistence_models_stream.istream.md)) => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn?` | (`err`: CallbackError, `doc`: [*IStream*](persistence_models_stream.istream.md)) => *void* |

**Returns:** *void*

Inherited from: Document.save

Defined in: node_modules/mongoose/index.d.ts:567

___

### set

▸ **set**(`path`: *string*, `val`: *any*, `options?`: *any*): [*IStream*](persistence_models_stream.istream.md)

Sets the value of a path, or many paths.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |
| `val` | *any* |
| `options?` | *any* |

**Returns:** [*IStream*](persistence_models_stream.istream.md)

Inherited from: Document.set

Defined in: node_modules/mongoose/index.d.ts:573

▸ **set**(`path`: *string*, `val`: *any*, `type`: *any*, `options?`: *any*): [*IStream*](persistence_models_stream.istream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |
| `val` | *any* |
| `type` | *any* |
| `options?` | *any* |

**Returns:** [*IStream*](persistence_models_stream.istream.md)

Inherited from: Document.set

Defined in: node_modules/mongoose/index.d.ts:574

▸ **set**(`value`: *any*): [*IStream*](persistence_models_stream.istream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | *any* |

**Returns:** [*IStream*](persistence_models_stream.istream.md)

Inherited from: Document.set

Defined in: node_modules/mongoose/index.d.ts:575

___

### toJSON

▸ **toJSON**(`options?`: ToObjectOptions): *LeanDocument*<[*IStream*](persistence_models_stream.istream.md)\>

The return value of this method is used in calls to JSON.stringify(doc).

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | ToObjectOptions |

**Returns:** *LeanDocument*<[*IStream*](persistence_models_stream.istream.md)\>

Inherited from: Document.toJSON

Defined in: node_modules/mongoose/index.d.ts:578

▸ **toJSON**<T\>(`options?`: ToObjectOptions): T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | ToObjectOptions |

**Returns:** T

Inherited from: Document.toJSON

Defined in: node_modules/mongoose/index.d.ts:579

___

### toObject

▸ **toObject**(`options?`: ToObjectOptions): *LeanDocument*<[*IStream*](persistence_models_stream.istream.md)\>

Converts this document into a plain-old JavaScript object ([POJO](https://masteringjs.io/tutorials/fundamentals/pojo)).

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | ToObjectOptions |

**Returns:** *LeanDocument*<[*IStream*](persistence_models_stream.istream.md)\>

Inherited from: Document.toObject

Defined in: node_modules/mongoose/index.d.ts:582

▸ **toObject**<T\>(`options?`: ToObjectOptions): T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | ToObjectOptions |

**Returns:** T

Inherited from: Document.toObject

Defined in: node_modules/mongoose/index.d.ts:583

___

### unmarkModified

▸ **unmarkModified**(`path`: *string*): *void*

Clears the modified state on the specified path.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |

**Returns:** *void*

Inherited from: Document.unmarkModified

Defined in: node_modules/mongoose/index.d.ts:586

___

### update

▸ **update**(`update?`: UpdateWithAggregationPipeline \| *UpdateQuery*<[*IStream*](persistence_models_stream.istream.md)\>, `options?`: ``null`` \| QueryOptions, `callback?`: (`err`: CallbackError, `res`: *any*) => *void*): *Query*<any, [*IStream*](persistence_models_stream.istream.md), {}\>

Sends an update command with this document `_id` as the query selector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `update?` | UpdateWithAggregationPipeline \| *UpdateQuery*<[*IStream*](persistence_models_stream.istream.md)\> |
| `options?` | ``null`` \| QueryOptions |
| `callback?` | (`err`: CallbackError, `res`: *any*) => *void* |

**Returns:** *Query*<any, [*IStream*](persistence_models_stream.istream.md), {}\>

Inherited from: Document.update

Defined in: node_modules/mongoose/index.d.ts:589

___

### updateOne

▸ **updateOne**(`update?`: UpdateWithAggregationPipeline \| *UpdateQuery*<[*IStream*](persistence_models_stream.istream.md)\>, `options?`: ``null`` \| QueryOptions, `callback?`: (`err`: CallbackError, `res`: *any*) => *void*): *Query*<any, [*IStream*](persistence_models_stream.istream.md), {}\>

Sends an updateOne command with this document `_id` as the query selector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `update?` | UpdateWithAggregationPipeline \| *UpdateQuery*<[*IStream*](persistence_models_stream.istream.md)\> |
| `options?` | ``null`` \| QueryOptions |
| `callback?` | (`err`: CallbackError, `res`: *any*) => *void* |

**Returns:** *Query*<any, [*IStream*](persistence_models_stream.istream.md), {}\>

Inherited from: Document.updateOne

Defined in: node_modules/mongoose/index.d.ts:592

___

### validate

▸ **validate**(`pathsToValidate?`: *string*[], `options?`: *any*): *Promise*<void\>

Executes registered validation rules for this document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathsToValidate?` | *string*[] |
| `options?` | *any* |

**Returns:** *Promise*<void\>

Inherited from: Document.validate

Defined in: node_modules/mongoose/index.d.ts:595

▸ **validate**(`callback`: (`err`: CallbackError) => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`err`: CallbackError) => *void* |

**Returns:** *void*

Inherited from: Document.validate

Defined in: node_modules/mongoose/index.d.ts:596

▸ **validate**(`pathsToValidate`: *string*[], `callback`: (`err`: CallbackError) => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathsToValidate` | *string*[] |
| `callback` | (`err`: CallbackError) => *void* |

**Returns:** *void*

Inherited from: Document.validate

Defined in: node_modules/mongoose/index.d.ts:597

▸ **validate**(`pathsToValidate`: *string*[], `options`: *any*, `callback`: (`err`: CallbackError) => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathsToValidate` | *string*[] |
| `options` | *any* |
| `callback` | (`err`: CallbackError) => *void* |

**Returns:** *void*

Inherited from: Document.validate

Defined in: node_modules/mongoose/index.d.ts:598

___

### validateSync

▸ **validateSync**(`pathsToValidate?`: *string*[], `options?`: *any*): ``null`` \| *ValidationError*

Executes registered validation rules (skipping asynchronous validators) for this document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathsToValidate?` | *string*[] |
| `options?` | *any* |

**Returns:** ``null`` \| *ValidationError*

Inherited from: Document.validateSync

Defined in: node_modules/mongoose/index.d.ts:601
