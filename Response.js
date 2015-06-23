C.statics("Response", {
	ENVS: {
		PHONE: "phone",
		TABLET: "tablet",
		COMPUTER: "computer"
	},

	ENV: null,

	declared: {},

	_init: function() {
		this._onReSize();

		$(window).on("resize", Response._onReSize);
		this._render();
	},

	_onReSize: function() {
		var height = $(document).height(),
			width = $(document).width();

		var old = Response.ENV+"";

		Response.ENV = Response.ENVS.COMPUTER;
		if(width < 1100) {
			Response.ENV = Response.ENVS.TABLET;
		}
		if(width < 480) {
			Response.ENV = Response.ENVS.PHONE;
		}

		if(old != Response.ENV) {
			Response._render();
		}
	},

	_render: function() {
		var components = Parser.getComponents();

		for(var i = 0; i < components.length; i++) {
			var component = $(components[i]);

			component.html(Response._renderComponent(component.attr("component")));
		}
	},

	render: function(name, params) {
		var component = Response._getComponent(name);

		return Response._renderComponent(Response.ENV, params);
	},

	_renderComponent: function(name, params) {
		var clas = this._getComponent(name);

		if(clas != undefined) {
			return clas._render(Response.ENV, params);
		} else {
			return "";
		}
	},

	_getComponent: function(name) {
		return this.declared[name];
	},

	// Public methods
	define: function(name, cls) {
		cls.name = name;
		Response.declared[name] = C.extends("Component", cls);
	},

	refresh: function() {
		this._render();
	}
});

(function() {
	$(function() {
		Response._init();
	});
})();