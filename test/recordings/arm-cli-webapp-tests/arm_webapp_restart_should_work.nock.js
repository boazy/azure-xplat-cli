// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e1b1b954-c500-427b-8cb1-ff8d47c39c17',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '82dc2e83-ff62-4cea-bc70-15c9386f0d72',
    registeredProviders: ['website'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e1b1b954-c500-427b-8cb1-ff8d47c39c17/resourceGroups/Default-Web-WestUS/providers/Microsoft.Web/sites/webapp-tst8148/restart?api-version=2014-06-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd096348e-0287-4cbc-b26e-021e7b965a8b',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '88b24008-0a26-4ae0-b7d8-c510310e0aad',
  'x-ms-routing-request-id': 'WESTUS:20150618T014812Z:88b24008-0a26-4ae0-b7d8-c510310e0aad',
  date: 'Thu, 18 Jun 2015 01:48:12 GMT' });
 return result; }]];