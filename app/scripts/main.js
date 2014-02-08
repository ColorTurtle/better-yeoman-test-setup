console.log('\'Allo \'Allo!');

function Collection (models) {
	this.models = models || [];

	this.find = function(id) {
		var result;

		if (typeof(id) != 'string') {
			throw new Error("Whoops!");
		}

		this.models.forEach(function(value, index){
			if (value.id == id) {
				result = value;
			}
		});

		if (result) {
			return result;
		}
	}

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
	}

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

	}
}
	
