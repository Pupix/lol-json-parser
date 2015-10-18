# lol-json-parser
A parser for .json files from League of Legends.

## Download
lol-json-parser is installable via:

- [GitHub](https://github.com/Pupix/lol-json-parser) `git clone https://github.com/Pupix/lol-json-parser.git`
- [npm](https://www.npmjs.com/): `npm install lol-json-parser`

## Usage example

```js
var JsonParser = require('lol-json-parser'),
    json = new JsonParser();
    
    json.read('KindredSR.json', function (err, data) {
        console.log(data);
        //  {
        //      champion: "Kindred"
        //      customPanel: null
        //      customTag: ""
        //      map: "SR"
        //      mode: "CLASSIC"
        //      title: "KindredSR"
        //      type: "riot",
        //      blocks: [...]
        //  }
    });

```

## Available methods

**N.B:** All methods act as promises if no callback is passed.

### parse(path, cb)

It will roughly parse a .json file from the given path.

**Parameters**

1. **path {string}** A path to where the file to parse resides.
2. **[cb] {Function}** A callback called with `(error, parsedData)` as arguments.

### read(path, cb)

It will read a .json file from the given path, creating a data object.

**Parameters**

1. **path {string}** A path to where the file to read resides.
2. **[cb] {Function}** A callback called with `(error, readData)` as arguments.

