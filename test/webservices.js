const {expect} = require('chai');
const axios = require('axios');

describe('Webservices GET method verification', function () {

    it('Should verify an http status code', async function () {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users');
        let responseStatus = response.status;
        expect(responseStatus).to.be.equal(200);
    });

    it('Should verify an http response header', async function () {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users');
        let responseHeader = response.headers['content-type'];
        expect(responseHeader).to.be.equal('application/json; charset=utf-8');
    });
    it('Should verify an http response body', async function () {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users');
        let usersArray = response.data;
        expect(usersArray).to.have.lengthOf(10);
    });
});