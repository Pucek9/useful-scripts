'use strict';
const lib = require('prepend-file');
const errorHandler = require('../core/errorHandler');

const prependFile = function (path, appendedText) {
	lib(path, appendedText, (err) => {
		errorHandler(err);
		console.log(`Appended text "${appendedText}" to file ${path}`);
	});
};

module.exports = prependFile;