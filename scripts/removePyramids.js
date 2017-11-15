'use strict';
const fs = require('fs');
const ExtendedString = require('../core/ExtendedString');

const canRemovePyramid = function (fun) {
	const conditions = [
		fun.includes('.then'),
		fun.count('().then') > 1,
		!fun.includes('if'),
		!fun.includes('map'),
		!fun.includes('filter'),
		!fun.includes('find'),
		!fun.includes('reduce'),
		!fun.includes('forEach'),
	];
	return conditions.reduce((condition, acc) => condition && acc);
};

const processFunction = function (f) {
	f = new ExtendedString(f);
	if (canRemovePyramid(f)) {
		const prefix = f.substring(0, f.nthIndexOf('.then', 2));
		const suffix = f.substring(f.lastIndexOf('});'));
		const body = f
			.substring(f.indexOf('.then', f.indexOf('.then') + 1), f.lastIndexOf('});'))
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
		.split(/(= function)/)
		.map(processFunction)
		.join('');
};

const removePyramids = function (path) {
	const data = fs.readFileSync(path);
	const convertedFile = processFile(data);
	console.log(convertedFile);
	fs.writeFileSync(path, convertedFile);
};

module.exports = removePyramids;