// Importing necessary modules
const { menuByLabel } = require("../../app/func/loadCommands.js");
const { react } = require("../../config.js");
const Message = require("../../app/func/Message.js");

module.exports = async (sock, m, args) => {
    // Initializing the reaction process
    await sock.sendMessage(m.key.remoteJid, {
        text: '⏳ Pinging... Please wait...',
    });

    // Start measuring the time
    const start = Date.now();

    try {
        // Send the ping and measure the round trip time
        const end = Date.now();
        const pingTime = end - start;

        // Send a successful ping result back
        await sock.sendMessage(m.key.remoteJid, {
            text: `🏓 *Pong!* 🕒 Latency: ${pingTime}ms\n\n✅ Bot is online and responsive.`,
        });

        // Add a reaction for success
        await sock.sendMessage(m.key.remoteJid, {
            react: { text: react.success, key: m.key }
        });

    } catch (err) {
        // Handle errors gracefully
        console.error(err);
        await sock.sendMessage(m.key.remoteJid, {
            text: `❌ Error occurred while pinging. Please try again later.`,
        });

        // Add a failure reaction
        await sock.sendMessage(m.key.remoteJid, {
            react: { text: react.failed, key: m.key }
        });
    }
};
