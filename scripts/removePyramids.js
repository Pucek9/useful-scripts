'use strict';
const fs = require('fs');
const ExtendedString = require('../core/ExtendedString');
let countAllFunctions, countChangedFunctions;
const ignoredStrings = [
	'if ',
	'.map',
	'.filter',
	'.find',
	'.reduce',
	'.forEach',
	'&&',
	':',
	'browser'
];

const canRemovePyramid = function (fun) {
	const conditions = [
		fun.match(/\.then\(function\ \((.*)\)/g) && fun.match(/\.then\(function\ \((.*)\)/g).length > 1,
		fun.match(/\}\)\.then/g) === null,
		!fun.includesOr(ignoredStrings)
	];
	return conditions.reduce((condition, acc) => condition && acc);
};

const processFunction = function (f) {
	countAllFunctions++;
	f = new ExtendedString(f);
	if (canRemovePyramid(f)) {
		countChangedFunctions++;
		const infexOfFirstThen = f.indexOf('.then');
		const infexOfSecondThen = f.indexOf('.then', infexOfFirstThen + 1);
		const infexOfLastClousure = f.lastIndexOf('});');
		const infexOfSecondLastClousure = f.lastIndexOf('});', infexOfLastClousure - 1);
		const usedClousure = f.includes('/^') ? infexOfSecondLastClousure : infexOfLastClousure;

		const prefix = f.substring(0, f.nthIndexOf('.then', 2));
		const suffix = f.substring(usedClousure);
		const body = f
			.substring(infexOfSecondThen, usedClousure)
			.replace(/\.then\(/gi, ';}).then(')
			.replace(/\}\)\;\r\n/g, '');
		return prefix + body + suffix;
	} else {
		return f;
	}
};

const processFile = function (data) {
	return data
		.toString()
		.split(/(= function|this.Given|this.Then|this.When)/)
		.map(processFunction)
		.join('');
};

const removePyramids = function (path) {
	countAllFunctions = 0;
	countChangedFunctions = 0;
	const data = fs.readFileSync(path);
	const convertedFile = processFile(data);
	if(countChangedFunctions > 0) {
		console.log(`Converted file ${path}\nChanged functions ${countChangedFunctions}/${countAllFunctions}`);
	}
	fs.writeFileSync(path, convertedFile);
};

module.exports = removePyramids;