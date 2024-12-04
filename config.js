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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_13_12_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjExLFxuICAgICAgICA0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDY3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDUwLFxuICAgICAgICA1MixcbiAgICAgICAgMjEwLFxuICAgICAgICA2NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICA5NixcbiAgICAgICAgMjksXG4gICAgICAgIDMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzLFxuICAgICAgICA0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDgwLFxuICAgICAgICA0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDU1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDY4LFxuICAgICAgICA2OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTczLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3LFxuICAgICAgICA4MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDYwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxODksXG4gICAgICAgIDg0LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDAsXG4gICAgICAgIDgyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjd3hlUHJYbkRtMjZIR0V0RGE0QnI4bUhvKzdZZ1J3eFV2UXVnVGlGZmZFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTczNTU2NzYyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOEVGQThDMUY1RjdCRUMyNDU0MkM0NDAyMzAwMzkxNzNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzMjg1NTk5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5NzM1NTY3NjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEMkMyRERFRkI1RURGQTYxQUYyNDA0RUNDNTg0RUE5OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzMyODU2MDFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSWtCc2VJVTRUR0c2M1R4SGYtRWZSd1wiLFxuICBcInBob25lSWRcIjogXCI0OWQ5NWY5YS05ZWE3LTQwZmUtYWJjYy04Y2M4MzM3OTE4MjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTgsXG4gICAgICAyNDMsXG4gICAgICAyMjAsXG4gICAgICAxMDYsXG4gICAgICA1LFxuICAgICAgMTQzLFxuICAgICAgNDIsXG4gICAgICA1NSxcbiAgICAgIDIzMixcbiAgICAgIDY3LFxuICAgICAgMzUsXG4gICAgICAyOCxcbiAgICAgIDEzMixcbiAgICAgIDIxOSxcbiAgICAgIDE4NixcbiAgICAgIDI0NCxcbiAgICAgIDkyLFxuICAgICAgMTU1LFxuICAgICAgMTk4LFxuICAgICAgMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgODksXG4gICAgICAxNTcsXG4gICAgICAxODMsXG4gICAgICAxOTEsXG4gICAgICAxMjUsXG4gICAgICAxMDksXG4gICAgICAxNzAsXG4gICAgICAxMjgsXG4gICAgICAxNDAsXG4gICAgICAyMTksXG4gICAgICAxNjQsXG4gICAgICAyMDEsXG4gICAgICA3MSxcbiAgICAgIDUsXG4gICAgICAyMixcbiAgICAgIDE1MSxcbiAgICAgIDEyNCxcbiAgICAgIDI2LFxuICAgICAgMjM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxUWjI2MkdBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTk3MzU1Njc2MjA6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuSVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5BXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuTlwiLFxuICAgIFwibGlkXCI6IFwiMjUwNDMxMDcwNTcyNjQ4OjQ0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xMVXFTOFExcTIvdWdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRGY0Q3VnMnpENEV5YkVnV1IxZisxTWR6a2EvVXFSSnc5KzRvTm1SNEVHMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4OFBwb2JhUU1QYmRId3hDOUhGditLQ01OT2I0WkdRV1JDcWVNT2QyVzNFKzhPMi9scXdFOERUamwzMFNJc2pIb3NpZmJDVnFER1R0OElrTGFmL3VEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjV1c2ZHZkeTdnTzVUYWovcDdlN2FvT1BsRStCMnhoSEdiQXBhc0JJWDNOcFlkK3RSSVlJL0V0V0w1NGxEMWl2Si9JS25yN2MwV1NEQTA5RXFyam1odz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTk3MzU1Njc2MjA6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzMjg1NTk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQW9CXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBb0IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrVSsvVWduUDZGQXhBODZrZEhsYnN3N0s3ZTYwZEg3aHZHQmhvQ0hTcjA0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk5MjQ4NjkwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzMyODU1OTgxMThcIn0iCn0="  // PUT your SESSION_ID 


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
