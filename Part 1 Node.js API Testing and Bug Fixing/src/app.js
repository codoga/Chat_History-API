const express = require('express');
const app = express();
const chatRoutes = require('./routes/chat');

app.use(express.json());
app.use('/log-chat',chatRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});