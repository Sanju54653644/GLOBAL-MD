

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: smusicpurulia" //ur yt chanel name
global.socialm = "GitHub: sanju" //ur github or insta name
global.location = "Indian, Kolkata, Purulia" //ur location

//new
global.botname = '© 𝑹𝒂𝒎_𝑪𝒉𝒂𝒓𝒂𝒏_𝑴𝑫' //ur bot name
global.ownernumber = ['917047294717'] //ur owner number, dont add more than one
global.ownername = '© 𝑹𝒂𝒎 𝑪𝒉𝒂𝒓𝒂𝒏' //ur owner name
global.websitex = "https://youtu.be/smusicpurulia"
global.wagc = "https://chat.whatsapp.com/KaV88iiRCBK2EbMOWEBlc9"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/GlobalTechInfo/GLOBAL-MD' //script link
global.packname = "Sticker By"
global.author = "𝚂𝙼𝚞𝚜𝚒𝚌𝙿𝚞𝚛𝚞𝚕𝚒𝚊\n\n917047294917"
global.creator = "917047294917@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["917047294917"] // Premium User

//channel id
global.xchannel = {
	jid: '120363319098372999@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
