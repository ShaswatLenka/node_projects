/*
Create and export configuration variables
*/


//container for all the environments
var environments = {};

//staging object (default)
environments.staging = {
'httpPort' : 3000,
'httpsPort': 3001,
'envName' : 'staging',
'hashingSecret':'thisIsASecret'

};
//production object
environments.production = {
'httpPort' : 5000,
'httpsPort': 5001,
'envName': 'production',
'hashingSecret': 'thisIsAlsoASecret'

};

//determine which environment was passed as a command line argument
var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

//check that the entered environment equals to the currentEnvironment else default to staging
var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;

//export the module
module.exports = environmentToExport;
