const express = require('express');
const router = express.Router();

let chatLogs = [];

router.post('/', (req, res) => {
    const { user_id, chat_history} = req.body;
    if (!user_id || !chat_history){
        return res.status(400).json({
            status: 'error',
            message: 'Invalid input. user_id and chat_history are required.'
        });
    }

    if (!Array.isArray(chat_history)){
        return res.status(400).json({
            status: 'error',
            message: 'Invalid input. chat_history must be an array.'
        })
    }

    const logEntry = {
        user_id: user_id.trim(),
        chat_history: chat_history.map((message) => message.trim()),
        timestamp: new Date().toISOString(),
    };

    chatLogs.push(logEntry);

    res.status(200).json({
        status: 'success',
        message: 'Chat logged successfully.'
    });





});

module.exports = router;