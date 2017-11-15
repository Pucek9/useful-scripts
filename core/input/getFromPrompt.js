'use strict';
const prompt = require('prompt');

const propmtArgs = [
	'script: <prependFile|removePyramids>',
	'pathToExecute',
	'filterReg',
	'args: []'
];

function promptInput (schema) {
	return new Promise((resolve, reject) => {
		prompt.get(schema, function (err, result) {
			if (err) {
				reject(err);
			} else {
				resolve({
					script: result[propmtArgs[0]],
					pathToExecute: result[propmtArgs[1]],
					filterReg: result[propmtArgs[2]],
					args: result[propmtArgs[3]].split(' ')
				});
			}
		});
	});
}

function getFromPrompt () {
	prompt.start();
	return promptInput(propmtArgs);
}

module.exports = getFromPrompt;