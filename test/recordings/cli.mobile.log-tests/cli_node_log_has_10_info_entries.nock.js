// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5e7d1bb6-4953-44fe-8a54-43fbdb53b989',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Mobilytics Test1',
    registeredProviders: ['website', 'mobileservice'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode6431/logs?%24top=10&%24filter=Type%20eq%20%27information%27')
  .reply(200, "{\"results\":[{\"timeCreated\":\"2015-04-08T01:20:21.514Z\",\"type\":\"information\",\"source\":\"\\/table\\/table1.insert.js\",\"message\":\"Invoking insert script\"},{\"timeCreated\":\"2015-04-08T01:20:21.514Z\",\"type\":\"information\",\"source\":\"\\/table\\/table1.insert.js\",\"message\":\"Invoking insert script\"},{\"timeCreated\":\"2015-04-08T01:20:21.513Z\",\"type\":\"information\",\"source\":\"\\/table\\/table1.insert.js\",\"message\":\"Sample information\"},{\"timeCreated\":\"2015-04-08T01:20:21.513Z\",\"type\":\"information\",\"source\":\"\\/table\\/table1.insert.js\",\"message\":\"Sample information\"},{\"timeCreated\":\"2015-04-08T01:20:21.498Z\",\"type\":\"information\",\"source\":\"\\/table\\/table1.insert.js\",\"message\":\"Invoking insert script\"},{\"timeCreated\":\"2015-04-08T01:20:21.498Z\",\"type\":\"information\",\"source\":\"\\/table\\/table1.insert.js\",\"message\":\"Invoking insert script\"},{\"timeCreated\":\"2015-04-08T01:20:21.497Z\",\"type\":\"information\",\"source\":\"\\/table\\/table1.insert.js\",\"message\":\"Sample information\"},{\"timeCreated\":\"2015-04-08T01:20:21.497Z\",\"type\":\"information\",\"source\":\"\\/table\\/table1.insert.js\",\"message\":\"Sample information\"},{\"timeCreated\":\"2015-04-08T01:20:21.483Z\",\"type\":\"information\",\"source\":\"\\/table\\/table1.insert.js\",\"message\":\"Invoking insert script\"},{\"timeCreated\":\"2015-04-08T01:20:21.482Z\",\"type\":\"information\",\"source\":\"\\/table\\/table1.insert.js\",\"message\":\"Sample information\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1353',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '651560c3ee1b8d26a4f18b3caf0b473e',
  date: 'Wed, 08 Apr 2015 01:20:29 GMT' });
 return result; }]];