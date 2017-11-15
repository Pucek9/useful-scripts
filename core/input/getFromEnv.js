'use strict';
function getFromEnv () {
	return {
		script: process.argv[2],
		pathToExecute: process.argv[3],
		filterReg: process.argv[4],
		args: process.argv.slice(5),
	};
}

module.exports = getFromEnv;