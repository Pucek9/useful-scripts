'use strict';
const fs = require('fs');

String.prototype.nthIndexOf = function (pattern, n) {
	let i = -1;
	while (n-- && i++ < this.length) {
		i = this.indexOf(pattern, i);
		if (i < 0) break;
	}
	return i;
};

const canRemovePyramid = function (fun) {
	const conditions = [
		fun.includes('.then'),
		!fun.includes('if'),
		!fun.includes('map'),
		!fun.includes('filter'),
		!fun.includes('reduce'),
		!fun.includes('forEach'),
	];
	return conditions.reduce((condition, acc) => condition && acc);
};

const processFile = function (data) {
	return data
		.toString()
		.split(/(= function)/)
		.map((f => {
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
		}))
		.join('');
};

// const processFile = function (data) {
// 	return data
// 		.toString()
// 		.split(/(= function)/)
// 		.map((f => {
// 			if (canRemovePyramid(f)) {
// 				const prefix = f.substring(0, f.nthIndexOf('.then', 2));
// 				const suffix = f.substring(f.lastIndexOf('});'));
// 				const body = f
// 					.substring(f.indexOf('.then', f.indexOf('.then') + 1), f.lastIndexOf('});'))
// 					.replace(/\.then\(/gi, ';}).then(')
// 					.replace(/\}\)\;\r\n/g, '');
// 				return prefix + body + suffix;
// 			} else {
// 				return f;
// 			}
// 		}))
// 		.join('');
// };

var json = "";

const removePyramids = function (path) {
	const data = fs.readFileSync(path);
	const convertedFile = processFile(data);
	console.log(convertedFile);
	fs.writeFileSync(path, convertedFile);
};

module.exports = removePyramids;