const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkcwdHZGWXM4a0dQV1NNbXJmSEVNOGxHRDFzTHZ6V2c5ZCs1MktIWFVITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnRSbG03MTVQMU1CY1VLbjJXcXJvSzNabmJBb0lVeCtxZkNyaDNiS3Ntcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyT0F1R2JaRXN0U21QSW9QYUZHSGwwLzA3RlFib0ZhMWNITmVmbkgrSFVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSkJLTXY2R043RTNtUlFCMlJHQTVNY1BLNnk2VXAvaDU2a2RVMmhYOVFBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVNaWYrdTRKQkN1ZEU1MWJoS3l4UXJHQnZ5K3AraFZXcTBNczhuZW1qMVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1OODlLcVRacTl4TmkwVXhSRXdYZUFSUHRpenJhSzVnN1YydnRsS0ZOUjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU1TVStxRzNHYlU1VjFEa2FibThKS2VKa3dEV1crelJaUTIvd3pmTjVVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDFSMEJiY3U1WS9PT3ZPMmwyZjhjN1NiUy9QV3hyQmJ4U0ZKeUVXdlkyZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYa2xEN0s3UjlIVG5hTTNCKzBkLzBIVmYrQkpWSlp4eTNERk85R254cUpOaHdwTDN4NzdhbFNpcFhpc01lMkZwb04xWngrd0ljbmV3cXcyVk1TMWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjcsImFkdlNlY3JldEtleSI6IjBCeHNqazA4aS85NzJHTnJFYysyWGhncndGMnNHcEt5Rm8ydWt6aWk3dTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IktHNkZFNktaIiwibWUiOnsiaWQiOiIyMzQ5MTIwMTg1NzQ3OjE2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjM5NTM1MDkwODY0MTY0OjE2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3V3N0pzQ0VKUHQwc1FHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiT0NDaEUxeU0rMnB2OS9mODVvZnRuM2xuU1JmVUxydU5ITkN3WmR3elNRMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNGI2NlhFT0crVVpmMUZjM3dXWlM4bjFjdTlaeEZTK2d5YXZpcDZwREx0b20yMURWdlpZL0wvVFdXeGhERFpGenJNcDBicnpjdFN2Q2owM3ZuVkRTQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IlgzTmIzNnQ4RXhVSWM2Rld1eEhRWGlvb1N1MnNhNzZPQkNpeU5QMUNEazBpd2dXOTFWMjdxem5UQ2NaeUJlMHgza0MyZ2s4RU0zamdzdjhIWTRid2hRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTEyMDE4NTc0NzoxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUZ2dvUk5jalB0cWIvZjMvT2FIN1o5NVowa1gxQzY3alJ6UXNHWGNNMGtOIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ1NzY1MzUsImxhc3RQcm9wSGFzaCI6IjJQMVloZiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSHJCIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Silently seen your status 😈*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/j5kg11.png",
MENU_VIDEO_URL: process.env.MENU_VIDEO_URL || "",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "SILENT DROPPER V2",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "silent",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "2348054671458",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*DAMINĪ*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Damini 🍂*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/j5kg11.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> nonchalanceispure 🧘 ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "2348054671458",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
