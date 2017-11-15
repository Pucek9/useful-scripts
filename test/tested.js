let myData = 1;
console.log(myData);
const MyClass = {};

MyClass.prototype.basicFunction = function () {
	return ptor11.getText().then(function (a) {
		return ptor12.getText();
	}).then(function (b) {
		return ptor13.getText();
	}).then(function (c) {
		return ptor14.getText();
	}).then(function (d) {
		console.log(d);
	});
};

MyClass.prototype.advancedFname = function () {
	return ptor2.getText().then(function (a) {
		return ptor22.getText().then(function (b) {
			return ptor23.getText().then(function (c) {
				if (c) {
					return ptor24.getText().then(function (d) {
						console.log(d == true);
						return 3;
					});
				} else {
					return ptor24b.getText().then(function (d) {
						return ptor25.getText().then(function (d) {
							return 2;
						});
					});
				}
			});
		});
	});
};

MyClass.prototype.basicFunction2 = function () {
	return ptor31.getText().then(function (a) {
		return ptor32.getText();
	}).then(function (b) {
		return ptor33.getText();
	}).then(function (c) {
		return ptor34.getText();
	}).then(function (d) {
		console.log(d);
	});
};

MyClass.prototype.advancedFname3 = function () {
	return ptor4.getText().then(function (a) {
		return ptor42.getText().then(function (b) {
			return ptor43.getText().then(function (c) {
				if (c) {
					return ptor44.getText().then(function (d) {
						console.log(d == true);
						return 3;
					});
				} else {
					return ptor44b.getText().then(function (d) {
						return ptor45.getText().then(function (d) {
							return 2;
						});
					});
				}
			});
		});
	});
};

const MyClass2 = new function () {
	this.aa = 4;
	this.ab = 2;
	this.av = 1;
	this.af = 0;

	this.basicFunction = function () {
		return ptor31.getText().then(function (a) {
			return ptor32.getText();
		}).then(function (b) {
			return ptor33.getText();
		}).then(function (c) {
			return ptor34.getText();
		}).then(function (d) {
			console.log(d);
		});
	};
	this.advancedFname = function () {
		return ptor4.getText().then(function (a) {
			return ptor42.getText().then(function (b) {
				return ptor43.getText().then(function (c) {
					if (c) {
						return ptor44.getText().then(function (d) {
							console.log(d == true);
							return 3;
						});
					} else {
						return ptor44b.getText().then(function (d) {
							return ptor45.getText().then(function (d) {
								return 2;
							});
						});
					}
				});
			});
		});
	};
	this.advancedFname2 = function () {
		return ptor4.getText().then(function (a) {
			return ptor42.getText().then(function (b) {
				return ptor43.getText().then(function (c) {
					if (c) {
						return ptor44.getText().then(function (d) {
							console.log(d == true);
							return 3;
						});
					} else {
						return ptor44b.getText().then(function (d) {
							return ptor45.getText().then(function (d) {
								return 2;
							});
						});
					}
				});
			});
		});
	};

	this.basicFunction2 = function () {
		return ptor31.getText().then(function (a) {
			return ptor32.getText();
		}).then(function (b) {
			return ptor33.getText();
		}).then(function (c) {
			return ptor34.getText();
		}).then(function (d) {
			console.log(d);
		});
	};

};
