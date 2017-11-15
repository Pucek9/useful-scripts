'use strict';
const getFromEnv = require('./getFromEnv');
const getFromPrompt = require('./getFromPrompt');

function setArguments () {
	if (process.argv.length > 3) {
		return getFromEnv();
	}
	return getFromPrompt();
}

module.exports = setArguments;