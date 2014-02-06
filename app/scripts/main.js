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
}

