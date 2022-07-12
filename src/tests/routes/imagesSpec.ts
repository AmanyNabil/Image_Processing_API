import supertest from 'supertest';
//import images from '../../routes/images';
import app from './../../index';

const request = supertest(app);

describe('Get /api/Images', () => {
  //   let originalTimeout: number;

  //   beforeEach(function () {
  //     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  //     jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  //   });

  //   afterEach(function () {
  //     jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  //   });

  it('should return with 404 status code from Images with all querystring', async () => {
    const response = await request.get('/api/images');

    expect(response.statusCode).toBe(404);
    //done();
  });

  // it('should return with 200 status code from Images with all querystring', async (done) => {
  //   const response = await request.get(
  //     `/api/images?filename=fjord&width=300&height=200`
  //   );
  //   // .query({ filename: 'fjord', width: 200, height: 300 })
  //   //  .expect(200);

  //   expect(response.statusCode).toBe(200);
  //   done();
  //   // expect(response.headers['Content-Type']).toEqual('image/jpg')
  //   // return '';
  // });

  it('Gets the api/images endpoint', async function () {
    const response = await request.get(
      '/api/images?filename=fjord&width=1100&height=500'
    );
    expect(response.status).toBe(200);
  });
});
// describe('Get /api', () => {
//   it('should return with 404 status code', async () => {
//     const response = await request.get('/images');
//     expect(response.statusCode).toBe(404);
//   });
// });
// describe('Get /api', () => {
//   it('should return with 200 status code', async () => {
//     const response = await request.get('/images');
//     expect(response.statusCode).toBe(404);
//   });
// });
