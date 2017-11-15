'use strict';
const errorHandler = function(err) {
	if (err) {
		throw err;
	}
};

module.exports = errorHandler;
