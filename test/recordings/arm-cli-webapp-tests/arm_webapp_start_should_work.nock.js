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
  .post('/subscriptions/e1b1b954-c500-427b-8cb1-ff8d47c39c17/resourceGroups/Default-Web-WestUS/providers/Microsoft.Web/sites/webapp-tst8148/start?api-version=2014-06-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '2947a651-92d5-4507-b666-7d160c67fd98',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'ed6a3685-7e18-4406-9134-5755941e8ca8',
  'x-ms-routing-request-id': 'WESTUS:20150618T014811Z:ed6a3685-7e18-4406-9134-5755941e8ca8',
  date: 'Thu, 18 Jun 2015 01:48:10 GMT' });
 return result; }]];