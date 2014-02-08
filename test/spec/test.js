/* global describe, it */

(function () {
    'use strict';

    describe('A Collection constructor', function () {
        describe(', when run', function () {
            it('should return a new object', function () {
              var students = new Collection;
 
              expect(students.constructor.name).to.equal("Collection");
            });
 
            it('stores its first param in a property called models', function(){
              var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id:'2'}]
              var students = new Collection(toBeAdded)
              
              expect(students.models).to.be.a('Array');
              expect(students.models[1].name).to.equal('Jack');
            });
 
        });
    });
// Write more tests below... 
    describe('A Collection instance', function () {
      describe('has a .find() menthod', function () {
        it('should return an object when given an id that is present in the models', function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(students.find('99')).to.deep.equal({name: 'Jim', id: '99'});
        });

        it("should not return an object when that id is not present in the models", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(students.find('1')).to.not.equal({name: 'Jim', id: '99'});
        });
 
        it("should return undefined when that id is not present in the models", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(students.find('1')).to.equal(undefined);
        });
 
        it("should throw an error when given an arguemnt other than a string", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(function(){students.find(1)}).to.throw(Error);
          expect(function(){students.find({})}).to.throw(Error);
          expect(function(){students.find([])}).to.throw(Error);
        });      
      }); 
            // .add Method
      describe("has an .add method", function(){
				it("should add the object it's given to the models property", function(){
					var fallStudents = [{name: 'Eddie', id: '5'},{name: 'Grandpa', id:'6'}];
          var students = new Collection(fallStudents);
          students.add({name:'Herman', id: '7'});

          expect(fallStudents[2]).to.deep.equal({name: 'Herman', id: '7'});
				});

        it("should increase the models property's length by 1", function(){
					var fallStudents = [{name: 'Eddie', id: '5'},{name: 'Grandpa', id:'6'}];
          var students = new Collection(fallStudents);
          students.add({name: 'Marylin', id: '8'});

          expect(fallStudents.length).to.equal(3);
        });

				it("should throw an error when given an empty object", function(){
          var students = new Collection();
          expect(function(){students.add({})}).to.throw(Error);
				});        

        it("should not accept an empty object as an argument", function(){
					var fallStudents = [{name: 'Eddie', id: '5'},{name: 'Grandpa', id:'6'}];
          var students = new Collection(fallStudents);
       		expect(function(){students.add({})}).to.throw(Error);
        });

        it("should throw an error when given an object without and id property", function(){
					var fallStudents = [{name: 'Eddie', id: '5'},{name: 'Grandpa', id:'6'}];
          var students = new Collection(fallStudents);
       		expect(function(){students.add({name: 'Lily'})}).to.throw(Error);
        });
      });

      describe("has a .remove method", function(){
        it("should, when given an id, remove the corresponding object from the models property", function(){
          var fallStudents = [{name: 'Eddie', id: '5'},{name: 'Grandpa', id:'6'}];
          var students = new Collection(fallStudents);
          students.remove('6');
          expect(students.models[1]).to.be.equal(undefined);
        });

        it("should decrease the models property's length by 1", function(){
          var fallStudents = [{name: 'Eddie', id: '5'},{name: 'Grandpa', id:'6'}];
          var students = new Collection(fallStudents);
          students.remove('6');
          expect(students.models.length).to.equal(1);
        }); 
        
        it("should only accept a single string as an id argument", function(){
          var fallStudents = [{name: 'Eddie', id: '5'},{name: 'Grandpa', id:'6'}];
          var students = new Collection(fallStudents);
          students.remove('5','6');
          expect(function(){students.remove(6)}).to.throw(Error);
          expect(students.models.length).to.equal(1);
        });

        it("should return true on successful removal", function(){
          var fallStudents = [{name: 'Eddie', id: '5'},{name: 'Grandpa', id:'6'}];
          var students = new Collection(fallStudents);
          expect(students.remove('5')).to.equal(true);
        });
      });
// UNFINISHED
      describe("has an .empty() method", function(){
        it('should clear out the models array', function(){
          var fallStudents = [{name: 'Eddie', id: '5'},{name: 'Grandpa', id:'6'}];
          var students = new Collection(fallStudents);
          students.empty();
          expect(function(){_.isEmpty(students)}).to.equal(true);
        });

        it('should decrease the array length to 0', function(){
          var fallStudents = [{name: 'Eddie', id: '5'},{name: 'Grandpa', id:'6'}];
          var students = new Collection(fallStudents);
          students.empty();
          expect(students.models.length).to.equal(0);
        });

        it('should return undefined on searches for array items', function(){
          var fallStudents = [{name: 'Eddie', id: '5'},{name: 'Grandpa', id:'6'}];
          var students = new Collection(fallStudents);
          students.empty();
          expect(function(){_.findWhere(students, {name: 'Eddie'})}).to.equal(0);
        });

        it('should return confirmation message when successful', function(){
          var fallStudents = [{name: 'Eddie', id: '5'},{name: 'Grandpa', id:'6'}];
          var students = new Collection(fallStudents);
          students.empty();
          expect(function(){students.find([])}).to.return(string);
        });
      });
 
// You Are Here
// VVVVVVVVVVVVVVVVVVVVVVVV
      describe("has an .random() method", function(){
        it('should return a random object from the models array', function(){
          var fallStudents = [{name: 'Eddie', id: '5'},{name: 'Grandpa', id:'6'}, {name: 'Marylin', id:'7'}, {name: 'Herman', id: '8'}];
          var students = new Collection(fallStudents);
          var randomSample = students.random();
          var itsThere = true;
          _.each(randomSample, function(eachObject) {
            if (!_.contains(students.models, eachObject))
            {
              itsThere = false;
            };
          })
          expect(itsThere).to.equal(true)
        });

        it('should return an error if given a string as an argument', function(){
          var fallStudents = [{name: 'Eddie', id: '5'},{name: 'Grandpa', id:'6'}, {name: 'Marylin', id:'7'}, {name: 'Herman', id: '8'}];
          var students = new Collection(fallStudents);
          var randomSample = students.random();
          expect(function(){students.random('one')}).to.throw(Error);
        });

        it('should not mutate the array', function(){
          var fallStudents = [{name: 'Eddie', id: '5'},{name: 'Grandpa', id:'6'}, {name: 'Marylin', id:'7'}, {name: 'Herman', id: '8'}];
          var students = new Collection(fallStudents);
          students.random();
          expect(students.models.length).to.equal(4)
        });

        it('should return the number of random items requested', function(){
          var fallStudents = [{name: 'Eddie', id: '5'},{name: 'Grandpa', id:'6'}, {name: 'Marylin', id:'7'}, {name: 'Herman', id: '8'}];
          var students = new Collection(fallStudents);
          var randomSample = students.random(2)
          expect(randomSample.length).to.equal(2);
        });
      });
 
      describe("has a .length() method", function(){
        it('should return the length models array');
        it('should throw an errro when provided an argument');
        it('should not mutate the array');
        it('should return a number');
      });
    });
})();

				

