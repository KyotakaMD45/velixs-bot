module.exports = {
    sessionName: 'velixsmd',
    prefix: '.',  // Single, clear prefix
    owner: ['6285174902345'],  // Owner's number
    
    apis: {
        velixs: {
            endpoint: "https://api.velixs.com",
            apikey: "YOUR_API_KEY"
        }
    },
    
    storage: "./storage",  // Storage path simplified
    
    msg: {
        isAdmin: "🚫 This feature is for group admins only.",
        isGroup: "🚫 This feature works in groups only.",
        isOwner: "🚫 This feature is for the bot owner only.",
        isBotAdmin: "🚫 The bot must be an admin."
    },

    react: {
        process: '⏳',
        success: '✅',
        failed: '❌'
    },

    advanced: {
        antiSpam: true,  // Enable anti-spam
        autoReply: true,  // Enable auto-reply
        scheduleMessages: true,  // Enable scheduled messages
        aiIntegration: false  // AI chat integration (can be enabled later)
    }
}
