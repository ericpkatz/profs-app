const app = require('supertest')(require('./app'));
const { expect } = require('chai');

describe('my app', ()=> {
  describe('GET /', ()=> {
    it('returns foo bar', ()=> {
      return app.get('/')
        .expect(200)
        .then( response => {
          expect(response.body.data).to.equal('foo bar');
        });
    });
  });
  describe('POST /', ()=> {
    it('return FOO BAR', ()=> {
      return app.post('/')
        .send({ text: 'foo bar' })
        .expect(201)
        .then( response => {
          expect(response.body.data).to.equal('FOO BAR');
        });
    });
  });
});
