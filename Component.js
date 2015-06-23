C.define("Component", {
	renders: {
		mobile: null,
		tablet: null,
		computer: "render"
	},

	_init: function() {

	},

	_render: function(env, params) {
		var env_name = env.charAt(0).toUpperCase() + env.slice(1).toLowerCase();

		if(typeof this["render"+env_name] == 'function') {
			var data = this["render"+env_name].apply(this, [env, params]);
		} else {
			var data = this["render"].apply(this, [env, params]);
		}

		if(typeof data == 'undefined') {
			return null;
		}

		// We parse data
		var html = "<div id='"+this.name+"' class='"+Response.ENV+"'>";
		for(var i = 0; i < data.length; i++) {
			html += [
				Parser.parseTemplate(data[i])
			].join("");
		}
		html += "</div>";

		return html;
	}
});