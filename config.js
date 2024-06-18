//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "260971816956";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "VENOCYBER-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUhkSDBNbEFFNEZKU2ZVN3UydWxQMTcyMGRUb0NmVWUrWGJsd3ZFaWFIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUt1b0lZc1J1TnFBTDNha2RNeEp6THVKcUpwaVZsalV1WWJ4UUlGQm96bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4QmxRdEs2S1NuaTUwcXcrNTJmd2Q3WmhPWklDRzVQTzFFTWxORGMyckdrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJySmtEM0tBNDF6N0xidXh5YWVJUWxPbzJtdWoxMEx5M3RyaTJMbXQzN3hrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhFcEFTY3V4djhsWFl2L1cwR3c4K1ZiM09oVXN2WmZYQ0lkUFVIOWV4WDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktRWTRlRUlpRlNZSTJNWml5dlErd0xpRjBta2d3MFR4QjRHLzJtS3pua3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk1oYmRnQ2xpWDFuTkRNVkVBSGlIS2hFais2Y1RzSjE2OHJTZFJGeEgzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGFkTXhIRTRzWE9TQzdRbkJqS0o3cTVraHdGN3pZU2FMTVZBQ2FYT08xYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ild3ZVU4Rlgzb1dEbEtsQi9pbTRqRVlQWHpYYlcwcG5lTnRoZWM1OWs1VGQwMnluWUplVzR3ZVlLekdyWVQyK3BlbmM3VnlOT1ZEcG8yZjlWOGpsQkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiJYSEloeHVDaEZxN3JoQTJ1VFI3L2RsK0JtV2NUZWVwaHBES1V2NVlpakVJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQZWNLZ0lTUlF6LThyZExQb0lvaVR3IiwicGhvbmVJZCI6IjYwOTgwZGM4LWEyZWMtNGYxMi04YzA0LWI2NzVkYTg1MjQ0MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuS1l6aVArZW9LZDRYNGY3S3pvMWlVM2NPaVk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3YwUllYbnNCN0txMmwxOEFrUkNnRWQ4TkZNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdNN1BXM0FBIiwibWUiOnsiaWQiOiIyNjA5NzE4MTY5NTY6NjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiS2luZyBNYWtvIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJT3Bsc2tFRUl6MXhiTUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5d3RnQXloRXY3bEVkQUFKbDFBTmRPNks0M3lTTzN6UDNEZ0pjS1NPaW13PSIsImFjY291bnRTaWduYXR1cmUiOiJFb09Fd3FoY2htSm4waTArSHRJU2FNb3pEcVk1d2lOVmFPKzFpMnp6bmFJbUhSSk16c2JqbE0xZllETXhzYWk2Q3lzOE05bGhuZ1RQN0xxWTcyRVlEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoialBXaEJ1NlhEYjJxa1F5NGx6bGllS3locGFTR29OMkFyWnNuZGxBNXAwRDNJSXNZWUFOOUxKZFhVYnJzdnd4MW8xWXJTSWlWQ1dUSWpFUlhjMVhFQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjA5NzE4MTY5NTY6NjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmNMWUFNb1JMKzVSSFFBQ1pkUURYVHVpdU44a2p0OHo5dzRDWENram9wcyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxODcxMjk4NX0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝘨𝘳𝘦𝘢𝘵 𝘥𝘢𝘺 | 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "true",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-nzj66xdSVURMqSV8EBvpT3BlbkFJrw4a1XClnXyLUzoVftJV",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
