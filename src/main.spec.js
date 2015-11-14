'use strict';
const jspm = require('jspm');
const sys = jspm.Loader();

const should = require('chai').should();
const shouldBeSystem = o => o.should.be.instanceof(sys.constructor);

describe("the module exports", ()=>{
	let m = require('./main.js');
	let instance = m();
	
	it ("is a function", ()=> m.should.be.a("function"));
	it("returns an instance of the jspm module loader", ()=> shouldBeSystem(instance));
			
	describe("function globally()", ()=> {
		it('assigns the jspm module loader to the global variable System', ()=> {
			m.should.have.property("globally");
			System.should.not.equal(instance);
			m.globally().should.equal(instance);
			System.should.equal(instance);
		});	
	});
});
