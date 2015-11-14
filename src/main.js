'use strict';
const jspm  = require('jspm');

let _current = null;
const _getSystem = function() {
	return (_current || (_current = new JspmSystem())).System;
}

class JspmSystem {

	static get System() { return _getSystem(); }

	//Memoized
	get System() {
		Object.defineProperty(this, "System", { value: jspm.Loader() });
		return this.System; 
	} 
}

var factory = Object.assign(
	function() { return JspmSystem.System; }, 
	{
		globally() { return GLOBAL.System = _getSystem(); },
		isGlobal() { return _getSystem() === GLOBAL.System; }
	}
);

module.exports = factory;
