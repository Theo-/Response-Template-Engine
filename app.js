Response.define("main", {
	render: function(env) {
		return [
			{
				name: "leftPanel"
			},
			{
				name: "rightPanel",
				parameters: {
					name: "test de parameter"
				}
			}
		];
	},

	renderPhone: function(env) {
		return [
			{
				name: "mobilePanel"
			}
		]
	}
});

Response.define("rightPanel", {
	render: function(env, params) {
		return [
			"right Panel "+env+" ... "+params.name
		];
	}
});

Response.define("mobilePanel", {
	render: function(env) {

		return [
			{
				name: "APP_HEADER"
			},
			"mobile Panel "+env
		];
	}
});

Response.define("leftPanel", {
	render: function(env) {
		return [
			{
				name: "APP_HEADER"
			},
			"leftPanel"
		];
	}
});

Response.define("VSB_header", {
	render: function(env) {
		return [
			"<h1>APP_HEADER</h1>"
		];
	}
});