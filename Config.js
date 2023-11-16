const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber =  "6287817207497"
global.ownername = "FlorexGT"
global.ytname = "YT: FlorexGT"
global.socialm = "GitHub: losedol"
global.location = "Indian,japan,Indonesia"

global.ownername = 'FlorexGT' //owner name
global.botname = 'フロレックス' //name of the bot

//sticker details
global.stickername = '💙𓆩‎✘florexstore✘𓆪_✰'
global.packname = 'Sticker By'
global.author = 'florexstore Bot'
//console view/theme
global.themeemoji = '🧩'
global.wm = "florexstore botz inc."

//theme link
global.link = 'https://instagram.com/florexgt'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.autoRecording = true //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = true //auto read messages
global.autobio = true //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
