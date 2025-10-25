const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/chalananima/CHALANAM/refs/heads/main/FTYI/WhatsApp%20Image%202025-09-06%20at%205.32.14%20AM.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋CHALANA-MD Is Alive Now😍*",
BOT_OWNER: '94776121326',  // Replace with the owner's phone number



};
