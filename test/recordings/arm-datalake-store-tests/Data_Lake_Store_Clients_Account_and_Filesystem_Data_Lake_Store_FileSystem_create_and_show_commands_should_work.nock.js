// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls4897.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01?op=MKDIRS&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9dd2b44c-da93-4764-a026-170541f18230',
  'set-cookie': [ 'UserPrincipalSession=9485e0bc-2f9e-40ff-96d3-6207c15dc87f; path=/; secure; HttpOnly' ],
  'server-perf': '[9dd2b44cda934764a026170541f18230][ AuthTime::1401.55398420696::PostAuthTime::31173.7768693552 ][HdfsMkdirs :: 00:00:093 ms]%0a[MKDIRS :: 00:00:093 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:11 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls4897.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01?op=MKDIRS&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9dd2b44c-da93-4764-a026-170541f18230',
  'set-cookie': [ 'UserPrincipalSession=9485e0bc-2f9e-40ff-96d3-6207c15dc87f; path=/; secure; HttpOnly' ],
  'server-perf': '[9dd2b44cda934764a026170541f18230][ AuthTime::1401.55398420696::PostAuthTime::31173.7768693552 ][HdfsMkdirs :: 00:00:093 ms]%0a[MKDIRS :: 00:00:093 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:11 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":268435456,\"accessTime\":1458164711969,\"modificationTime\":1458164711969,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4286a83f-175b-4081-a441-f30c710f7824',
  'set-cookie': [ 'UserPrincipalSession=4f0c5e3f-bb6f-4ccb-ade4-3acbcc2fef9f; path=/; secure; HttpOnly' ],
  'server-perf': '[4286a83f175b4081a441f30c710f7824][ AuthTime::1438.76461272041::PostAuthTime::30992.4610273994 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:106 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:106 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:12 GMT',
  connection: 'close',
  'content-length': '227' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":268435456,\"accessTime\":1458164711969,\"modificationTime\":1458164711969,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4286a83f-175b-4081-a441-f30c710f7824',
  'set-cookie': [ 'UserPrincipalSession=4f0c5e3f-bb6f-4ccb-ade4-3acbcc2fef9f; path=/; secure; HttpOnly' ],
  'server-perf': '[4286a83f175b4081a441f30c710f7824][ AuthTime::1438.76461272041::PostAuthTime::30992.4610273994 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:106 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:106 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:12 GMT',
  connection: 'close',
  'content-length': '227' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls4897.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls4897.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/emptyfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': '8fb31a99-ed91-4571-9134-551f94b2e407',
  'set-cookie': [ 'UserPrincipalSession=3264cd06-26f3-46bd-add9-d203179aef7b; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[8fb31a99ed9145719134551f94b2e407][ AuthTime::1549.1098178577::PostAuthTime::31166.96042157 ][FsOpenStream :: 00:00:188 ms]%0a[Open :: 00:00:189 ms]%0a[Write :: 00:00:001 ms]%0a[CREATE :: 00:00:192 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:13 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls4897.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls4897.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/emptyfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': '8fb31a99-ed91-4571-9134-551f94b2e407',
  'set-cookie': [ 'UserPrincipalSession=3264cd06-26f3-46bd-add9-d203179aef7b; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[8fb31a99ed9145719134551f94b2e407][ AuthTime::1549.1098178577::PostAuthTime::31166.96042157 ][FsOpenStream :: 00:00:188 ms]%0a[Open :: 00:00:189 ms]%0a[Write :: 00:00:001 ms]%0a[CREATE :: 00:00:192 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:13 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1458164713000,\"modificationTime\":1458164713000,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f1bbcdf9-8781-4c86-a35f-9a69bcc7635d',
  'server-perf': '[f1bbcdf987814c86a35f9a69bcc7635d][ AuthTime::666.775871352888::PostAuthTime::137.717659124843 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:043 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:043 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:13 GMT',
  connection: 'close',
  'content-length': '222' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1458164713000,\"modificationTime\":1458164713000,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f1bbcdf9-8781-4c86-a35f-9a69bcc7635d',
  'server-perf': '[f1bbcdf987814c86a35f9a69bcc7635d][ AuthTime::666.775871352888::PostAuthTime::137.717659124843 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:043 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:043 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:13 GMT',
  connection: 'close',
  'content-length': '222' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls4897.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls4897.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/contentfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': '4ed19143-6d1f-438c-b40d-99ff88a24bfd',
  'set-cookie': [ 'UserPrincipalSession=a2d55eb6-4bb3-4f42-ba92-62e7783a7dde; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[4ed191436d1f438cb40d99ff88a24bfd][ AuthTime::1500.78161253831::PostAuthTime::30927.4779042092 ][FsOpenStream :: 00:00:230 ms]%0a[Open :: 00:00:230 ms]%0a[FsAppendStream :: 00:00:177 ms]%0a[Write :: 00:00:179 ms]%0a[CREATE :: 00:00:411 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:14 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls4897.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls4897.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/contentfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': '4ed19143-6d1f-438c-b40d-99ff88a24bfd',
  'set-cookie': [ 'UserPrincipalSession=a2d55eb6-4bb3-4f42-ba92-62e7783a7dde; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[4ed191436d1f438cb40d99ff88a24bfd][ AuthTime::1500.78161253831::PostAuthTime::30927.4779042092 ][FsOpenStream :: 00:00:230 ms]%0a[Open :: 00:00:230 ms]%0a[FsAppendStream :: 00:00:177 ms]%0a[Write :: 00:00:179 ms]%0a[CREATE :: 00:00:411 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:14 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1458164713923,\"modificationTime\":1458164714160,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'df5fdb0e-43e9-43f7-9587-b54905bf8776',
  'set-cookie': [ 'UserPrincipalSession=7b341a70-d189-4cf5-aaa3-2199d5fa09f6; path=/; secure; HttpOnly' ],
  'server-perf': '[df5fdb0e43e943f79587b54905bf8776][ AuthTime::1461.00410672173::PostAuthTime::30860.7178936221 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:219 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:219 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:13 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1458164713923,\"modificationTime\":1458164714160,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'df5fdb0e-43e9-43f7-9587-b54905bf8776',
  'set-cookie': [ 'UserPrincipalSession=7b341a70-d189-4cf5-aaa3-2199d5fa09f6; path=/; secure; HttpOnly' ],
  'server-perf': '[df5fdb0e43e943f79587b54905bf8776][ AuthTime::1461.00410672173::PostAuthTime::30860.7178936221 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:219 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:219 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:13 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=LISTSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":22,\"pathSuffix\":\"contentfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1458164713923,\"modificationTime\":1458164714160,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"},{\"length\":0,\"pathSuffix\":\"emptyfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1458164713000,\"modificationTime\":1458164713000,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e8e28441-188b-4a8e-97d8-f4a97801aa4b',
  'set-cookie': [ 'UserPrincipalSession=603a87da-1ac4-4264-adc3-8ab99b307000; path=/; secure; HttpOnly' ],
  'server-perf': '[e8e28441188b4a8e97d8f4a97801aa4b][ AuthTime::1445.18064971969::PostAuthTime::30611.8259316475 ][FsEnumerateDirectory :: 00:00:224 ms]%0a[EnumerateDirectory :: 00:00:224 ms]%0a[ListDirectory :: 00:00:224 ms]%0a[LISTSTATUS :: 00:00:224 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:14 GMT',
  connection: 'close',
  'content-length': '478' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=LISTSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":22,\"pathSuffix\":\"contentfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1458164713923,\"modificationTime\":1458164714160,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"},{\"length\":0,\"pathSuffix\":\"emptyfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1458164713000,\"modificationTime\":1458164713000,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e8e28441-188b-4a8e-97d8-f4a97801aa4b',
  'set-cookie': [ 'UserPrincipalSession=603a87da-1ac4-4264-adc3-8ab99b307000; path=/; secure; HttpOnly' ],
  'server-perf': '[e8e28441188b4a8e97d8f4a97801aa4b][ AuthTime::1445.18064971969::PostAuthTime::30611.8259316475 ][FsEnumerateDirectory :: 00:00:224 ms]%0a[EnumerateDirectory :: 00:00:224 ms]%0a[ListDirectory :: 00:00:224 ms]%0a[LISTSTATUS :: 00:00:224 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:14 GMT',
  connection: 'close',
  'content-length': '478' });
 return result; }]];