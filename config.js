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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_46_12_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjEwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDU0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxODQsXG4gICAgICAgIDMyLFxuICAgICAgICAwLFxuICAgICAgICA2MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA5OCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg3LFxuICAgICAgICA0LFxuICAgICAgICA4NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDkwLFxuICAgICAgICA5MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc4LFxuICAgICAgICA4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MixcbiAgICAgICAgODEsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDY1LFxuICAgICAgICA0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDU2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib2tyeUQ2ZlArcHJMaEJ5T2w4bFJCYVBVbGNjYUllWHNGZldXNzJWSnFmZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTk3MzU1Njc2MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM1QTBEN0U0Rjc0QTU4QTJCRjQ0MEFGRDZGQzMyRTVGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzIzMDAwN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4M3RhNlktZVRsdUVjbVZGdU43dWNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjEwY2U3ZWVkLTFjNTQtNDdjNS1iMTI2LWFjYzQyM2VmMjhmZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICAxMTksXG4gICAgICAxMTksXG4gICAgICAyMjgsXG4gICAgICAxMSxcbiAgICAgIDQwLFxuICAgICAgMjMsXG4gICAgICA2OSxcbiAgICAgIDIyMSxcbiAgICAgIDIzMCxcbiAgICAgIDg5LFxuICAgICAgOTQsXG4gICAgICAyMjYsXG4gICAgICAxMjIsXG4gICAgICAxNzMsXG4gICAgICAyMDgsXG4gICAgICAyMjUsXG4gICAgICAyMDYsXG4gICAgICAxMDcsXG4gICAgICAxMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc1LFxuICAgICAgMTY3LFxuICAgICAgMTQ1LFxuICAgICAgMTQzLFxuICAgICAgNjksXG4gICAgICAyMTksXG4gICAgICA1MSxcbiAgICAgIDE4OCxcbiAgICAgIDEyLFxuICAgICAgMCxcbiAgICAgIDIxNyxcbiAgICAgIDE1OCxcbiAgICAgIDYwLFxuICAgICAgMTk0LFxuICAgICAgMTc2LFxuICAgICAgMjI2LFxuICAgICAgMTY0LFxuICAgICAgMTQ0LFxuICAgICAgMTU1LFxuICAgICAgMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVFo2VlBQUU1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTczNTU2NzYyMDo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIktcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5JXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuUlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbkFcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5OXCIsXG4gICAgXCJsaWRcIjogXCIyNTA0MzEwNzA1NzI2NDg6NDNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEhVcVM4UXIvdTd1Z1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJEZjRDdWcyekQ0RXliRWdXUjFmKzFNZHprYS9VcVJKdzkrNG9ObVI0RUcwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBaZSt6Y2NQVkhpa1NqOExFSEFtN1RLbjN1czRQTXpIWWpNYVo3QzA0NkNaUGVzWVQ4Tm40dThyd2dpRm1Fb0VYVlpBTiswMU9IeVJKZmJRSzdsNEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlh0ajdMTzFKdU9LRExjZW5nQkY1K3NkTndSck5jbkVFNGxFV3VTTC9XMCtHRFFUUU5zL0t0aC9ueTZQR1RaQTgxaWZsYSsxaTloZXhTT05KbUJac2l3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxOTczNTU2NzYyMDo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMyMzAwMDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDa3BcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNrcC5qc29uIjogIntcImtleURhdGFcIjpcIkVyMDlnaENxTjFuTEk1a2l3MDFIN1pSNXZjTkE3anY0OUtoeGFvKzJ2R0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTkyNDg2ODgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
