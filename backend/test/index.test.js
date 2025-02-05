/* eslint-disable no-undef */
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import nock from 'nock'
import app from '../src/index.js'

chai.use(chaiHttp)

describe('GET /files/data', () => {
  const API_URL = 'https://echo-serv.tbxnet.com'
  const API_AUTH_HEADER = { reqheaders: { Authorization: 'Bearer aSuperSecretKey' } }

  beforeEach(() => {
    nock(API_URL, API_AUTH_HEADER)
      .get('/v1/secret/files')
      .reply(200, { files: ['test1.csv'] })

    nock(API_URL, API_AUTH_HEADER)
      .get('/v1/secret/file/test1.csv')
      .reply(200, 'file,text,number,hex\nfile1,test1,123,abc123')
  })

  afterEach(() => {
    nock.cleanAll()
  })

  it('should return files data successfully proccessed', async () => {
    const res = await chai.request(app).get('/files/data')
    expect(res).to.have.status(200)
    expect(res.body).to.have.property('data').that.is.an('array')
  })
})
