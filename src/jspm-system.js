'use strict';

class JspmSystem {
	rootScope;
	systemFactory;
	_system;

	static defaultSystemFactory = ()=>require('jspm').Loader();

	constructor(rootScope = GLOBAL, systemFactory = JspmSystem.defaultSystemFactory) {
		Object.assign(this, { rootScope, systemFactory});
	}

	applyRoot() {
		return this._system = this.rootScope.System = this.systemFactory();
	}

	get isGlobal() { return this.rootScope === GLOBAL; }
	get isCurrent() { return this.rootScope.System === this.System; }
	get System() { return this._system || this.applyRoot(); }
}

module.exports = JspmSystem;
