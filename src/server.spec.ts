import * as request from 'request';
import port from './port';
import * as server from './server';

const endpoint = `http://localhost:${port}/`;

describe('Hello world server', function() {
  beforeEach(() => {
    server;
  });

  describe('GET', () => {
    it('returns status code 200', done => {
      request.get(endpoint, (error, response) => {
        console.log('runing',response.statusCode);
        expect(response.statusCode).toBe(210);
        done();
      });
    },250);
  });
});
