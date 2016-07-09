var request = require('supertest');
var app = require('../../');

describe('Test server functionality', function() {

  it('Should return timestamp with natural timestamp path', function(done) {
    request('http://127.0.0.1:8080')
    .get('/December%2015,%202015')
    .expect(200)
    .expect('content-type', 'application/json; charset=utf-8')
    .expect('{"unix":1450155600,"natural":"December 15, 2015"}', done);
  });

  it('Should return timestamp with unix timestamp path', function(done) {
    request('http://127.0.0.1:8080')
    .get('/1450155600')
    .expect(200)
    .expect('content-type', 'application/json; charset=utf-8')
    .expect('{"unix":1450155600,"natural":"December 15, 2015"}', done);
  });

  it('Should return null with invalid date', function(done) {
    request('http://127.0.0.1:8080')
    .get('/December%2044,%202015')
    .expect(200)
    .expect('content-type', 'application/json; charset=utf-8')
    .expect('{"unix":null,"natural":null}', done);
  });
});
