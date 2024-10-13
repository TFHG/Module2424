const request = require('supertest');
const app = require('../app'); // Assuming app.js exports the Express instance

describe('GET /', () => {
    it('should return Hello World', async () => {
        const res = await request(app).get('/');
        expect(res.text).toBe('Hello World');
        expect(res.statusCode).toBe(200);
    });
});
