const request = require('supertest');
const app = require('../app'); // Import the Express app

describe('GET /', () => {
    it('should serve the Hello World HTML page', async () => {
        const res = await request(app).get('/'); // Simulate GET request to the root URL
        expect(res.statusCode).toBe(200); // Expect status code 200 (OK)
        expect(res.text).toContain('<h1>Hello World</h1>'); // Check if HTML contains 'Hello World'
    });
});
