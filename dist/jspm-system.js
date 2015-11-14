'use strict';

/*ibabel*/
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

/*ibabel*/
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*ibabel*/
var /*obabel*/JspmSystem = (function () {
	function JspmSystem() {
		/*ibabel*/var /*obabel*/rootScope = arguments.length <= 0 || arguments[0] === undefined ? GLOBAL : arguments[0];
		/*ibabel*/var /*obabel*/systemFactory = arguments.length <= 1 || arguments[1] === undefined ? JspmSystem.defaultSystemFactory : arguments[1];
		/*ibabel*/
		_classCallCheck(this, /*obabel*/JspmSystem);

		Object.assign(this, { rootScope: rootScope, systemFactory: systemFactory });
	}

	_createClass(JspmSystem, [{
		key: 'applyRoot',
		value: function applyRoot() {
			return this._system = this.rootScope.System = this.systemFactory();
		}
	}, {
		key: 'isGlobal',
		get: function get() {
			return this.rootScope === GLOBAL;
		}
	}, {
		key: 'isCurrent',
		get: function get() {
			return this.rootScope.System === this.System;
		}
	}, {
		key: 'System',
		get: function get() {
			return this._system || this.applyRoot();
		}
	}]);

	return JspmSystem;
})();

/*ibabel*/
/*obabel*/JspmSystem.defaultSystemFactory = function () /*ibabel*/{
	return (/*obabel*/require('jspm').Loader()
	);
};

module.exports = JspmSystem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qc3BtLXN5c3RlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7OztjQUVQLFVBQVU7QUFPZixVQVBLLFVBQVUsR0FPa0U7MEJBQXJFLFNBQVMseURBQUcsTUFBTTswQkFBRSxhQUFhLHlEQUFHLFVBQVUsQ0FBQyxvQkFBb0I7O2tDQVAxRSxVQUFVOztBQVFkLFFBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFULFNBQVMsRUFBRSxhQUFhLEVBQWIsYUFBYSxFQUFDLENBQUMsQ0FBQztFQUNqRDs7Y0FUSSxVQUFVOzs4QkFXSDtBQUNYLFVBQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7R0FDbkU7OztzQkFFYztBQUFFLFVBQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNLENBQUM7R0FBRTs7O3NCQUNwQztBQUFFLFVBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQztHQUFFOzs7c0JBQ3BEO0FBQUUsVUFBTyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztHQUFFOzs7UUFqQnBELFVBQVU7Ozs7VUFBVixVQUFVLENBS1Isb0JBQW9CLEdBQUc7bUJBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRTs7Q0FBQTs7QUFlM0QsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMiLCJmaWxlIjoianNwbS1zeXN0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEpzcG1TeXN0ZW0ge1xuXHRyb290U2NvcGU7XG5cdHN5c3RlbUZhY3Rvcnk7XG5cdF9zeXN0ZW07XG5cblx0c3RhdGljIGRlZmF1bHRTeXN0ZW1GYWN0b3J5ID0gKCk9PnJlcXVpcmUoJ2pzcG0nKS5Mb2FkZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihyb290U2NvcGUgPSBHTE9CQUwsIHN5c3RlbUZhY3RvcnkgPSBKc3BtU3lzdGVtLmRlZmF1bHRTeXN0ZW1GYWN0b3J5KSB7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCB7IHJvb3RTY29wZSwgc3lzdGVtRmFjdG9yeX0pO1xuXHR9XG5cblx0YXBwbHlSb290KCkge1xuXHRcdHJldHVybiB0aGlzLl9zeXN0ZW0gPSB0aGlzLnJvb3RTY29wZS5TeXN0ZW0gPSB0aGlzLnN5c3RlbUZhY3RvcnkoKTtcblx0fVxuXG5cdGdldCBpc0dsb2JhbCgpIHsgcmV0dXJuIHRoaXMucm9vdFNjb3BlID09PSBHTE9CQUw7IH1cblx0Z2V0IGlzQ3VycmVudCgpIHsgcmV0dXJuIHRoaXMucm9vdFNjb3BlLlN5c3RlbSA9PT0gdGhpcy5TeXN0ZW07IH1cblx0Z2V0IFN5c3RlbSgpIHsgcmV0dXJuIHRoaXMuX3N5c3RlbSB8fCB0aGlzLmFwcGx5Um9vdCgpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSnNwbVN5c3RlbTtcbiJdfQ==