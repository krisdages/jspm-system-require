'use strict';
module.exports = function(options) { 
  if (options && options.withBabel)
      require("babel-core/register");
  return global.System = require('jspm').Loader();
}
