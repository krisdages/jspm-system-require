'use strict';
let System = require('jspm').Loader();
let should = require('chai').should();
let pq = require('proxyquire');

describe("the module exports", ()=>{
  let m = require('./main.js');
  let sys;
  let babelWasRequired = false;
  let babelRequireProxy = pq("./main.js", {"babel-core/register":function() { this.exports={};babelWasRequired=true;}});
  
  it("is a function that", ()=> m.should.be.a("function"));
  it("will accept zero parameters,", ()=> sys=m());
  it("is a factory for the jspm module loader for node.js,", ()=> sys.should.be.instanceof(SystemJSNodeLoader));
  it('assigns the jspm module loader to the global variable System,', ()=> sys.should.equal(System));
  it("will also include the babel require hook if option {withBabel} is truthy.", ()=> {
    m({withBabel:"hello"});
    babelWasRequired.should.be.true();
  });
      
  });

