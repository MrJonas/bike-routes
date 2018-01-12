require('babel-register');
require("babel-core").transform("code", {
    plugins: ["transform-object-assign"]
});
require('./build_scripts/devServer');
