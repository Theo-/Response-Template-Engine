// This parser detects expression in html
C.statics("Parser" , {
	getComponents: function() {
		var objs = $("Response");
		for(var i = 0; i < objs.length; i++) {
			var obj = objs[i];
		}

		return objs;
	},

	parseTemplate: function(obj) {
		if(typeof obj == 'string') {
			return obj;
		}

		if(typeof obj == 'object') {
			if(obj.name != undefined) {
				return [
					Response._renderComponent(obj.name, obj.parameters || {})
				].join("");
			}
		}
	}
});