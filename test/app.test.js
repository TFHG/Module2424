const request = require('supertest');
const app = require('../app'); // Import the Express app instance

describe('GET /', () => {
    it('should return Hello World', async () => {
        const res = await request(app).get('/');  // Supertest will run the app without needing app.listen()
        expect(res.text).toBe('Hi World');  // Expecting the correct response
        expect(res.statusCode).toBe(200);  // Ensure that the response is 200 OK
    });
});
