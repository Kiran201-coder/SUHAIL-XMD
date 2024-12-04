const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919735567620";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_17_12_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA0OSxcbiAgICAgICAgOCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDI0LFxuICAgICAgICA2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDk4LFxuICAgICAgICAzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc1LFxuICAgICAgICA1OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDg0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU1LFxuICAgICAgICA5NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgODQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDYxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDAsXG4gICAgICAgIDE3LFxuICAgICAgICA2MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDkzLFxuICAgICAgICA0NixcbiAgICAgICAgNjUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc4LFxuICAgICAgICA0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTczLFxuICAgICAgICA5NixcbiAgICAgICAgMjQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAyNixcbiAgICAgICAgODEsXG4gICAgICAgIDEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxODksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg4LFxuICAgICAgICAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVHZBSFZjaGRCOUl0VlJCMU4xM1FhQVhqbjNlczYwWlVrQ1hYeEVPZjZ1OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTk3MzU1Njc2MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFENzk0NjNCOTk1MDAxMDJBREZBNzJBNUJGM0Q0MDU1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzI4OTQ1M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCZWJ6MUtfaVRjbTNpWmFaV2JUbF93XCIsXG4gIFwicGhvbmVJZFwiOiBcIjE4Mzk2YzE5LTc3ODUtNDVjMy05NDJlLTllOTU4ZWIyYzE5MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDMsXG4gICAgICAxNDMsXG4gICAgICAyMSxcbiAgICAgIDM5LFxuICAgICAgNjcsXG4gICAgICAxOTcsXG4gICAgICAxOTcsXG4gICAgICAxNTgsXG4gICAgICA4NyxcbiAgICAgIDYwLFxuICAgICAgNDksXG4gICAgICAxMTgsXG4gICAgICAxODQsXG4gICAgICAyMjcsXG4gICAgICAxMDEsXG4gICAgICAyNCxcbiAgICAgIDE0NixcbiAgICAgIDk0LFxuICAgICAgNzEsXG4gICAgICA0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICAyMDAsXG4gICAgICA3MSxcbiAgICAgIDcxLFxuICAgICAgOTAsXG4gICAgICAyLFxuICAgICAgNzksXG4gICAgICAxMDgsXG4gICAgICAxMzgsXG4gICAgICA3LFxuICAgICAgMTQyLFxuICAgICAgODksXG4gICAgICAzNSxcbiAgICAgIDEzNSxcbiAgICAgIDIyMCxcbiAgICAgIDIxNixcbiAgICAgIDIyMixcbiAgICAgIDIyNSxcbiAgICAgIDM3LFxuICAgICAgNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFdSRlcyQ1JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTczNTU2NzYyMDo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIktcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5JXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuUlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbkFcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5OXCIsXG4gICAgXCJsaWRcIjogXCIyNTA0MzEwNzA1NzI2NDg6NDVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFBVcVM4UTVjdS91Z1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJEZjRDdWcyekQ0RXliRWdXUjFmKzFNZHprYS9VcVJKdzkrNG9ObVI0RUcwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZlMjUvQWNnblUrNXdQS0NreXhKcno4OVlRdmw1eW1vSGJFekNiOHlRMjByWGpNWFJ1Vitra01CcGd4TkxLWXByU0tJVjF5c2UweWFob20xQ01oTkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9mcHlZSi9kdDVQa3pvQWd1QUdTTjdEV2I5Y1JpR2RVWjZ5eVpIdUxOby9YeUZoNU1KQWdIcnhMdGhmSExjUUlBc2wvM3VueU4zZW8zSHZpNStzdmhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxOTczNTU2NzYyMDo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMyODk0NDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBb0NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFvQy5qc29uIjogIntcImtleURhdGFcIjpcInl4Y29jWXZGOENkWVdkMWRGTmZYV3NoZHgrQW5tdXFXVlF0eDk4SXYzckE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTkyNDg2OTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzI4OTQzNjY4OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
