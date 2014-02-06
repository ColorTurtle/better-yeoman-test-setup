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

	this.add = function(name, id) {

		// if (typeof(name) != 'string' || typeof(id) != 'string') {
			if (name == null || id == null) {
			throw new Error ("It seems you're missing something.");
		}

		this.models.push({name: name, id: id})
	}
}

