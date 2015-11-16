'use strict';
let JspmSystem=require('./jspm-system.js');

const instanceKey = Symbol("node-jspm-env metadata");

function Factory(options = {}) { 
	
	let { rootScope, systemFactory } = options;
	//TODO: configurable array of extras and once-only check
	require('babel-core/register');
	let newInstance = new JspmSystem(rootScope, systemFactory);
	newInstance.System[instanceKey] = newInstance;
	return newInstance.System;
};

module.exports = Factory;
