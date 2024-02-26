const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['918293838182']
global.ownername = "💙𓆩‎✘LucI✘𓆪_✰"//owner name
global.ytname = "YT: IAM.LUCI"
global.socialm = "GitHub: LuciZR"
global.location = "Indian"

global.botname = '𝒁𝑹-𝑩𝑶𝑻 𖨆' //name of the bot

//sticker details
global.stickername = '💙𓆩‎✘𝒁𝑹-𝑩𝑶𝑻 𖨆✘𓆪_✰'
global.packname = 'Sticker By'
global.author = 'LuciZR'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Luci Pvt Ltd."

//theme link
global.link = 'https://chat.whatsapp.com/HuQXSSgC80hERPfi4D4D2i'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = true //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*🎀💙𓆩‎✘𝒁𝑹-𝑩𝑶𝑻 𖨆✘𓆪_✰🎀*\n\n*🧩 Bot link:* \nhttps://lucisite.blogspot.com\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
