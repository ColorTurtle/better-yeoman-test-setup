/* global describe, it */

(function () {
    'use strict';

    describe('A Collection constructor', function () {
        describe(',when run', function () {
            it('should return a new object', function () {
              var students = new Collection;

              expect(students.constructor.name).to.equal("Collection");
            });

            it('store its first param in a property called models', function(){
            	var toBeAdded = [{name: 'Bower', id: '1'}, {name: 'Jack', id:'2'}]
            	var students = new Collection(toBeAdded)

            	expect(students.models).to.be.a('Array');
            	expect(students.models[1].name).to.equal('Jack');
            });
        });
    });

// Write more tests below... 
    describe('A Collection instance', function () {
        describe('has a .find() menthod', function () {
            it('should return an object when given an ide that is present in the models', function(){
            	var toBeAdded = [{name: 'Bower', id: '1'}, {name: 'Jack', id:'2'}]
            	var students = new Collection(toBeAdded)

            	expect(students.find('1')).to.exist;
            	expect(students.find('1')).to.be.an('object');
            	expect(students.find('1')).to.include.key('name');
            	expect(students.find('1')).to.deep.equal({name: 'Bower', id: '1'});
            	expect(students.find('1')).to.deep.property('name', 'Bower');
            	// expect(students.find('1')).to.equal({name: 'Bower', id: '1'});
            });
            it('should not return an object when that id is not present in the models');
            
            it('should return undefined when that id is not present in the models');
            it('should throw an error when given an argument other than a string');
        });
       
        describe("has an .add method", function(){

        });
    });
})();



