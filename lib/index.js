(function () {
    'use strict';

    var fileParser = require('lol-file-parser');

    module.exports = fileParser({

        name: 'JSONFile',

        parse: function (parser, cb) {
            cb(null, parser.stringView().join(''));
        },

        read: function (data, cb) {
            cb(null, JSON.parse(data));
        }

    });

}());
