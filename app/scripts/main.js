console.log('\'Allo \'Allo!');

function Collection (models) {
	this.models = models || [];
	// this.find = function(id) {
	// 	return this.models[id-1]	 
	this.find = function(id) {
		this.models.forEach(function(value, index)
			var result 
			if typeof(id) != 'string') {
				throw new Error("Whoops!");
		}

		this.models.forEach(function(value, index) {
			if (value.id == id) {
				var result = value;
			}
		)};

		if (result) {
			return result;
		}
	}
}

