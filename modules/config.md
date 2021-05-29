[brazilian-stremio-addon](../README.md) / [Exports](../modules.md) / config

# Module: config

## Table of contents

### Variables

- [DB\_HOST](config.md#db_host)
- [DB\_NAME](config.md#db_name)
- [DB\_PORT](config.md#db_port)
- [PORT](config.md#port)

### Functions

- [connect](config.md#connect)

## Variables

### DB\_HOST

• `Const` **DB\_HOST**: *string*

Defined in: [src/config.ts:7](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/config.ts#L7)

___

### DB\_NAME

• `Const` **DB\_NAME**: *string*

Defined in: [src/config.ts:9](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/config.ts#L9)

___

### DB\_PORT

• `Const` **DB\_PORT**: *string* \| ``27017``

Defined in: [src/config.ts:8](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/config.ts#L8)

___

### PORT

• `Const` **PORT**: *string* \| ``3000``

Defined in: [src/config.ts:6](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/config.ts#L6)

## Functions

### connect

▸ **connect**(): *Promise*<string\>

Connect to a database through an URI built with the available Environment Variables

**Returns:** *Promise*<string\>

URI to the database

Defined in: [src/config.ts:16](https://github.com/victorgveloso/MicoLeaoDubladoAPI/blob/9dfa6b5/src/config.ts#L16)
