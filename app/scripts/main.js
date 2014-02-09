console.log('\'Allo \'Allo!');

function Collection (models) {
	this.models = models || [];

	this.find = function(id) {
		var result;

		if (typeof(id) != 'string') {
			throw new Error("Whoops! You need to have the number value surrounded by quotation marks. ");
		};

		var argArray = _.where(this.models, {id: id});

		if (argArray.length >1) {
			return "It seems there is an error in the database. More than one item was found."
		};

		if (argArray.length >1) {
			return findResult;
		};

		this.models.forEach(function(value, index){
			if (value.id == id) {
				result = value;
			}
		});

		if (result) {
			return result;
		}

	};

	this.add = function(newStudent) {

		if (_.isEmpty(newStudent)) {
			throw new Error ("Empty object is not a valid argument.");
		}

		if (_.isUndefined(newStudent)) {
			throw new Error ("It seems you're missing something.");	
		}

		if(!newStudent.hasOwnProperty('id')) {
			throw new Error ("It seems you're missing an id property.");				
		}

		this.models.push(newStudent)
	};

	this.remove = function(idRemove) {
		var lengthTest = [idRemove];
		
		if (idRemove == undefined) {
			console.log('Empty test worked!');
			throw new Error("Whoops! You gotta tell me what you want to remove.");
		}

		if (typeof(idRemove) !== 'string') {
			console.log('String test worked!');
			throw new Error("Whoops! I can only remove the id if it's within quotation marks.");
		}

		if (lengthTest.length != 1) {
			console.log('Length test worked!')
			throw new Error("Sorry, remove only one at a time please.")
		}

		this.models = _.reject(this.models, function(eachModel){
			return eachModel.id === idRemove;
		});

		return true
	};

	this.empty = function(listVictim) {
		listVictim = [];
		this.models = listVictim;
		return 'I hope you meant to do that because it\'s gone for good.'
	};

	this.random = function(howMany) {
		var howMany = howMany || 1;

		if (typeof(howMany) != 'number') {
			throw new Error("Sorry, you can only put in a number value.")
		};

		return _.sample(this.models, howMany);

	};

	this.length = function(arg) {
		var testArray;

		if (arguments.length > 0) {
			throw	new Error("Whoa there buddy. You can't put arguments into the \'.length\' method.")
		}

		return this.models.length;
	};

}
	
