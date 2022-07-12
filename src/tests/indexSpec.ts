import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Get /api', () => {
  it('should return with 200 status code from root', async () => {
    const response = await request.get('/api');
    expect(response.statusCode).toBe(200);
  });
});

describe('Get /images', () => {
  it('should return with 404 status code from root', async () => {
    const response = await request.get('/images');
    expect(response.statusCode).toBe(404);
  });
});
describe('Get /', () => {
  it('should return with 404 status code from root', async () => {
    const response = await request.get('/');
    expect(response.statusCode).toBe(404);
  });
});
