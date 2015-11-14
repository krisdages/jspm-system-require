'use strict';

/*ibabel*/
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

/*ibabel*/
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*obabel*/var jspm = require('jspm');

var _current = null;
var _getSystem = function _getSystem() {
	return (_current || (_current = new JspmSystem())).System;
};

/*ibabel*/
var /*obabel*/JspmSystem = (function () {
	function JspmSystem() {
		_classCallCheck(this, JspmSystem);
	}

	_createClass(JspmSystem, [{
		key: 'System',

		//Memoized
		get: function get() {
			Object.defineProperty(this, "System", { value: jspm.Loader() });
			return this.System;
		}
	}], [{
		key: 'System',
		get: function get() {
			return _getSystem();
		}
	}]);

	return JspmSystem;
})();

var factory = Object.assign(function () {
	return JspmSystem.System;
}, { /*ibabel*/
	/*obabel*/globally: function globally() {
		return GLOBAL.System = _getSystem();
	},
	/*ibabel*/ /*obabel*/isGlobal: function isGlobal() {
		return _getSystem() === GLOBAL.System;
	}
});

module.exports = factory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7VUFDYixJQUFNLElBQUksR0FBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRTlCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztBQUNwQixJQUFNLFVBQVUsR0FBRyxTQUFiLFVBQVUsR0FBYztBQUM3QixRQUFPLENBQUMsUUFBUSxLQUFLLFFBQVEsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFBLENBQUMsQ0FBRSxNQUFNLENBQUM7Q0FDMUQsQ0FBQTs7O2NBRUssVUFBVTtVQUFWLFVBQVU7d0JBQVYsVUFBVTs7O2NBQVYsVUFBVTs7OztzQkFLRjtBQUNaLFNBQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2hFLFVBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztHQUNuQjs7O3NCQU5tQjtBQUFFLFVBQU8sVUFBVSxFQUFFLENBQUM7R0FBRTs7O1FBRnZDLFVBQVU7OztBQVdoQixJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUMxQixZQUFXO0FBQUUsUUFBTyxVQUFVLENBQUMsTUFBTSxDQUFDO0NBQUUsRUFDeEM7V0FDQyxRQUFRLHNCQUFHO0FBQUUsU0FBTyxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsRUFBRSxDQUFDO0VBQUU7c0JBQ25ELFFBQVEsc0JBQUc7QUFBRSxTQUFPLFVBQVUsRUFBRSxLQUFLLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFBRTtDQUNyRCxDQUNELENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IGpzcG0gID0gcmVxdWlyZSgnanNwbScpO1xuXG5sZXQgX2N1cnJlbnQgPSBudWxsO1xuY29uc3QgX2dldFN5c3RlbSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKF9jdXJyZW50IHx8IChfY3VycmVudCA9IG5ldyBKc3BtU3lzdGVtKCkpKS5TeXN0ZW07XG59XG5cbmNsYXNzIEpzcG1TeXN0ZW0ge1xuXG5cdHN0YXRpYyBnZXQgU3lzdGVtKCkgeyByZXR1cm4gX2dldFN5c3RlbSgpOyB9XG5cblx0Ly9NZW1vaXplZFxuXHRnZXQgU3lzdGVtKCkge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIlN5c3RlbVwiLCB7IHZhbHVlOiBqc3BtLkxvYWRlcigpIH0pO1xuXHRcdHJldHVybiB0aGlzLlN5c3RlbTsgXG5cdH0gXG59XG5cbnZhciBmYWN0b3J5ID0gT2JqZWN0LmFzc2lnbihcblx0ZnVuY3Rpb24oKSB7IHJldHVybiBKc3BtU3lzdGVtLlN5c3RlbTsgfSwgXG5cdHtcblx0XHRnbG9iYWxseSgpIHsgcmV0dXJuIEdMT0JBTC5TeXN0ZW0gPSBfZ2V0U3lzdGVtKCk7IH0sXG5cdFx0aXNHbG9iYWwoKSB7IHJldHVybiBfZ2V0U3lzdGVtKCkgPT09IEdMT0JBTC5TeXN0ZW07IH1cblx0fVxuKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5O1xuIl19