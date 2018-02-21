global.expect = require('chai').expect;
global.should = require('chai').should();
global.request = require('supertest');
global.mochaShared = require('mocha-shared');
//global.addContext = require('mochawesome/addContext');
global.configEnv = require('./../config/environment');
global.customersData = require('./../data/customers');
global.builder = {
    customer: require('./../lib/builders/customer_builder.js')
};
global.client = {
    service: require('./../lib/clients/service_client'),
    request: require('./../lib/clients/request_client')
};

global.log4js = require('log4js');
log4js.configure({
    appenders: { apiTestAutomation: { type: 'file', filename: 'logs/api_testing_'+ configEnv.testEnv + '.log', compress: true, encoding: 'utf-8', flags: 'w+' } },
    categories: { default: { appenders: ['apiTestAutomation'], level: 'debug' } }
});
global.logger = log4js.getLogger('apiTestAutomation');
logger.level = 'debug'; //Logging Levels: debug, info, warn, error, fatal
