const request = require('supertest');
const express = require('express');
const app = express();
const chatRoutes = require('../src/routes/chat');

app.use(express.json());
app.use('/log-chat', chatRoutes);

describe('POST /log-chat', () => {
    it('log chat successfully with valid data', async () => {
        const res = await request(app)
            .post('/log-chat')
            .send({
                user_id: 'user123',
                chat_history: [
                    'Hello, my name is Doğa nice to meet you',
                    'I have been feeling sick for days.',
                    'Do you know how to make a robot?',
                    'Does space have a limit?',
                    'Is there any restaurant near Kefken Kocaeli?',
                ],
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('status', 'success');
        expect(res.body).toHaveProperty('message', 'Chat logged successfully.');
    });

    it('return 400 if user_id is missing', async () => {
        const res = await request(app)
            .post('/log-chat')
            .send({
                chat_history: [
                    'I have a headache',
                    'What should I do?',
                ],
            });

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('status', 'error');
        expect(res.body).toHaveProperty('message', 'Invalid input. user_id and chat_history are required.');
    });

    it('return 400 if chat_history is not an array', async () => {
        const res = await request(app)
            .post('/log-chat')
            .send({
                user_id: 'user123',
                chat_history: 'This is not an array',
            });

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('status', 'error');
        expect(res.body).toHaveProperty('message', 'Invalid input. chat_history must be an array.');
    });
});
