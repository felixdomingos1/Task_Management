"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/snakecase-keys";
exports.ids = ["vendor-chunks/snakecase-keys"];
exports.modules = {

/***/ "(rsc)/./node_modules/snakecase-keys/index.js":
/*!**********************************************!*\
  !*** ./node_modules/snakecase-keys/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst map = __webpack_require__(/*! map-obj */ \"(rsc)/./node_modules/map-obj/index.js\");\nconst { snakeCase } = __webpack_require__(/*! snake-case */ \"(rsc)/./node_modules/snake-case/dist/index.js\");\nmodule.exports = function(obj, options) {\n    options = Object.assign({\n        deep: true,\n        exclude: [],\n        parsingOptions: {}\n    }, options);\n    return map(obj, function(key, val) {\n        return [\n            matches(options.exclude, key) ? key : snakeCase(key, options.parsingOptions),\n            val\n        ];\n    }, options);\n};\nfunction matches(patterns, value) {\n    return patterns.some(function(pattern) {\n        return typeof pattern === \"string\" ? pattern === value : pattern.test(value);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc25ha2VjYXNlLWtleXMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxNQUFNQSxNQUFNQyxtQkFBT0EsQ0FBQztBQUNwQixNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHRCxtQkFBT0EsQ0FBQztBQUU5QkUsT0FBT0MsT0FBTyxHQUFHLFNBQVVDLEdBQUcsRUFBRUMsT0FBTztJQUNyQ0EsVUFBVUMsT0FBT0MsTUFBTSxDQUFDO1FBQUVDLE1BQU07UUFBTUMsU0FBUyxFQUFFO1FBQUVDLGdCQUFnQixDQUFDO0lBQUUsR0FBR0w7SUFFekUsT0FBT04sSUFBSUssS0FBSyxTQUFVTyxHQUFHLEVBQUVDLEdBQUc7UUFDaEMsT0FBTztZQUNMQyxRQUFRUixRQUFRSSxPQUFPLEVBQUVFLE9BQU9BLE1BQU1WLFVBQVVVLEtBQUtOLFFBQVFLLGNBQWM7WUFDM0VFO1NBQ0Q7SUFDSCxHQUFHUDtBQUNMO0FBRUEsU0FBU1EsUUFBU0MsUUFBUSxFQUFFQyxLQUFLO0lBQy9CLE9BQU9ELFNBQVNFLElBQUksQ0FBQyxTQUFVQyxPQUFPO1FBQ3BDLE9BQU8sT0FBT0EsWUFBWSxXQUN0QkEsWUFBWUYsUUFDWkUsUUFBUUMsSUFBSSxDQUFDSDtJQUNuQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXl0YXNrcy8uL25vZGVfbW9kdWxlcy9zbmFrZWNhc2Uta2V5cy9pbmRleC5qcz8wZWYxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBtYXAgPSByZXF1aXJlKCdtYXAtb2JqJylcbmNvbnN0IHsgc25ha2VDYXNlIH0gPSByZXF1aXJlKCdzbmFrZS1jYXNlJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHsgZGVlcDogdHJ1ZSwgZXhjbHVkZTogW10sIHBhcnNpbmdPcHRpb25zOiB7fSB9LCBvcHRpb25zKVxuXG4gIHJldHVybiBtYXAob2JqLCBmdW5jdGlvbiAoa2V5LCB2YWwpIHtcbiAgICByZXR1cm4gW1xuICAgICAgbWF0Y2hlcyhvcHRpb25zLmV4Y2x1ZGUsIGtleSkgPyBrZXkgOiBzbmFrZUNhc2Uoa2V5LCBvcHRpb25zLnBhcnNpbmdPcHRpb25zKSxcbiAgICAgIHZhbFxuICAgIF1cbiAgfSwgb3B0aW9ucylcbn1cblxuZnVuY3Rpb24gbWF0Y2hlcyAocGF0dGVybnMsIHZhbHVlKSB7XG4gIHJldHVybiBwYXR0ZXJucy5zb21lKGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJ1xuICAgICAgPyBwYXR0ZXJuID09PSB2YWx1ZVxuICAgICAgOiBwYXR0ZXJuLnRlc3QodmFsdWUpXG4gIH0pXG59XG4iXSwibmFtZXMiOlsibWFwIiwicmVxdWlyZSIsInNuYWtlQ2FzZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJvYmoiLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVlcCIsImV4Y2x1ZGUiLCJwYXJzaW5nT3B0aW9ucyIsImtleSIsInZhbCIsIm1hdGNoZXMiLCJwYXR0ZXJucyIsInZhbHVlIiwic29tZSIsInBhdHRlcm4iLCJ0ZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/snakecase-keys/index.js\n");

/***/ })

};
;