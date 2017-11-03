var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
require("G:\\HOC\\WebDev\\node.js\\Project\\DemoJs\\Node base\\Modules\\StringExtend.js");
/*
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});*/
describe('String', function () {
    describe('reverse()', function () {
        it('reverse string "love"', function () {
            expect("love".reverse()).to.equal("evol");
        })
    });
    
    describe('camelcase()', function () {
        it('camelize string "all men ar created equal"', function () {
            expect("all men are created equal".camelcase()).to.equal("All Men Are Created Equal");
        })
    });
    
});
