'use strict';
const recursive = require('recursive-readdir');
const errorHandler = require('../core/errorHandler');

function promptInput (testFolder, filterReg) {
	return new Promise((resolve, reject) => {
		recursive(testFolder, (err, pathes) => {
			errorHandler(err);
			let filteredPaths = pathes.filter((path) => {
				return path.endsWith(filterReg);
			});
			console.log(`Found files ${filteredPaths.length}`);
			resolve(filteredPaths);
		});
	});
}

function filterFiles (testFolder, filterReg) {

	const filteredPaths = promptInput(testFolder, filterReg);
	return filteredPaths;
}

module.exports = filterFiles;
