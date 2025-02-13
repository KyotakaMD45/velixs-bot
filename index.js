const log = require('./app/func/log.js');
const express = require('express');
const app = express();
const port = 3000;

let config;
try {
    config = require('./config.js');
} catch {
    log.error('config.js not found!') 
    process.exit(1)
}

app.get('/', (req, res) => {
    res.send('Whatsapp BOT');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Import the bot logic
const startBot = require('./app/baileys/velixs.js');

// Start the bot and send a notification to the owner
startBot().then(async (sock) => {
    const ownerNumber = config.owner[0] + '@s.whatsapp.net';
    try {
        await sock.sendMessage(ownerNumber, { text: '🚀 *Bot is now online and running!*' });
        console.log('✅ Owner notified that the bot is running.');
    } catch (err) {
        console.error('❌ Failed to send startup message to the owner:', err);
    }
});
