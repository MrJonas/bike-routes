//This files isn't transpiled

//Register babel for tests
require('babel-register')();

//Disable features that mocha doesn't understand
require.extensions['.css'] = function() {};
