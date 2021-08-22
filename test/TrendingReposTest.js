const { expect } = require('chai')
const request = require('supertest')

const app = require('../src/app')

describe('GET /TrendingRepos',() =>
{

    it('Right Output', async () =>
    {
        console.log("res.statusCode")
        const res =  await request(app).get('/TrendingRepos')
        //if the status code 200 is returned then the api is working correctly 
        expect(res.statusCode).to.equal(200)
      
       
    })


})
