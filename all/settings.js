require("./module")

global.owner = "6283137195267" //PAKE NO LU BIAR BISA ADD AKSES
global.namabot = "ZYLEN MOODS" //NAMA BOT GANTI
global.namaCreator = "ありゃがに" //NAMA CREATOR GANTI AJA
global.autoJoin = false //NOT CHANGE / JANGAN GANTI
global.antilink = false //NOT CHANGE / JANGAN GANTI
global.versisc = '3.0.0' //NOT CHANGE / JANGAN GANTI
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.domain = 'https://zallpanel.adminpanel.biz.id' //ISI DOMAIN PANEL MU
global.apikey = 'ptla_0ItUaoPHy8aOFJlz5Obqzal8Mqh8OzH1rgJ37bKjAX8' //ISI APIKEY PLTA MU KALO G TAU CHAT GW 083872605023
global.capikey = 'ptlc_mXFPI5utrOPpdUs7OpcgYtHaBceXsZw986tCEDSpSxj' //ISI APIKEY PLTC MU KALO G TAU CHAT GW 083872605023
global.eggsnya = '15' //PAKE ID EGGS MU KALO GA TAU DEFAULT AJA
global.location = '1' //JANGAN DIGANTI KALO G MAU EROR
global.imageurl = 'https://telegra.ph/file/1929bea753a9a6047f696.jpg' //GANTI PP MU MENGGUNAKAN LINK TELEGRA PH
global.isLink = 'https://chat.whatsapp.com/D4w3pbLrVTH3tl6lhlfHpe' ///GANTI MENGGUNAKAN LINK GRUBMU YA
global.thumb = fs.readFileSync("./thumb.png") ///NOT CHANGE / JANGAN GANTI
global.audionya = fs.readFileSync("./all/sound.mp3") //NOT CHANGE / JANGAN GANTI
global.tekspushkon = "" //NOT CHANGE / JANGAN GANTI
global.tekspushkonv2 = "" //NOT CHANGE / JANGAN GANTI
global.packname = "" //GANTI AJ
global.author = "ありゃがに" //GANTI SERAH MU
global.jumlah = "5" ////NOT CHANGE / JANGAN GANTI

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})