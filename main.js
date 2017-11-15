'use strict';
const filterFiles = require('./core/filterFiles');
const setArguments = require('./core/input/setArguments');
const showInput = require('./core/input/showInput');
const prependFile = require('./scripts/prependFile');
const removePyramids = require('./scripts/removePyramids');

const scripts = {
	prependFile,
	removePyramids
};

const runScript = function (files, runScript, args) {
	files.forEach((path) => {
		runScript(path, ...args);
	});
};

async function main () {
	const input = await setArguments();
	showInput(input);
	const files = await filterFiles(input.pathToExecute, input.filterReg);
	runScript(files, scripts[input.script], input.args);
}

main();
