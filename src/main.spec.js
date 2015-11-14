'use strict';
const canonicalSnippet = "require('jspm-system-register')";
const jspm = require('jspm');
const sys = jspm.Loader();

const should = require('chai').should();
const shouldBeSystem = o => o.should.be.instanceof(sys.constructor);

describe("the module exports", ()=>{
	let m = require('./main.js');
	let s = System;
	let instance = m();
	
	it ("is a function", ()=> {m.should.be.a("function")});
	it("returns an instance of the jspm module loader", ()=>{shouldBeSystem(instance)});
	
	it("has property isGlobal", /*TODO ()=>{instance.should.have.property("isGlobal")} */);
	it('assigns the jspm module loader to GLOBAL.System', ()=> {
			instance.should.equal(System).should.not.equal(s);
		});	
});

