'use strict';
function showInput (input) {
	console.log('Console input received:');
	console.log('  script: ' + input.script);
	console.log('  pathToExecute: ' + input.pathToExecute);
	console.log('  filterReg: ' + input.filterReg);
	console.log('  args: ' + input.args);
}

module.exports = showInput;