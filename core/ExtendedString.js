'use strict';
class ExtendedString extends String {

	constructor (arg) {
		super(arg);
	}

	nthIndexOf (pattern, n) {
		let i = -1;
		while (n-- && i++ < this.length) {
			i = this.indexOf(pattern, i);
			if (i < 0) break;
		}
		return i;
	}

	count (search) {
		let m = this.match(new RegExp(search.toString().replace(/(?=[.\\+*?[^\]$(){}\|])/g, '\\'), 'g'));
		return m ? m.length : 0;
	}

}

module.exports = ExtendedString;