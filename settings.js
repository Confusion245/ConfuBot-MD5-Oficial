const fs = require('fs')
const chalk = require('chalk')

//Api Web\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'tu apikey',
}

global.xteam = 'RiyGanz'


global.autoTyping = false 
global.autoreadpmngc = false 
global.autoReadGc = false 
global.autoRecord = false
global.available = true 


global.vidmenu = fs.readFileSync("./Media/theme/bot.mp4") 


global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['56999448163'] 
global.ownername = "ConfuModsπ"
global.ytname = "YT: ConfuMods" 
global.socialm = "GitHub: Confusion245" 
global.location = "America, Santiago, Chile" 

//bot bomdy 
global.owner = ['56999448163']
global.ownertag = '56999448163' 
global.botname = 'ππΎπ½π΅πβ’ππΎπ-ππ³ π5' 
global.linkz = "https://youtube.com/c/ConfuMods" 
global.websitex = "https://youtube.com/c/ConfuMods" 
global.botscript = 'https://github.com/Confusion245/ConfuBot-MD5' 
global.reactmoji = "βοΈ" 
global.themeemoji = "π³οΈβπ" 
global.packname = "Β ββββ β’γ π€‘ γβ’ βββ\nβΏ β’ ConfuBot v5\n\nππππππππππ ππππ? ππ\nβ€·cutt.ly\/eZfytPj" 
global.author = "Β βπΉβ’Creado por:\nβ€· β§ConfuModsβ¨\n\nβ©οΈβ’ YouTube: \nβ€· cutt.ly\/7ZfyAst"


global.thum = fs.readFileSync("./Media/theme/bot.jpg") 
global.log0 = fs.readFileSync("./Media/theme/bot.jpg") 
global.err4r = fs.readFileSync("./Media/theme/bot.jpg") 
global.thumb = fs.readFileSync("./Media/theme/bot.jpg") 

global.lolkeys = ['2e0da1f78d1721134b21816d', '902c3bc9d8c08b0dcf8f5373', '808693688ecc695293359089', '85faf717d0545d14074659ad']
global.lolkeysapi = lolkeys[Math.floor(lolkeys.length * Math.random())]

global.premium = ['56999448163'] 
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','#','/']
global.sp = 'β­'
global.mess = {
    success: 'ListoβοΈ',
    admin: '*[βοΈ] Esta funciΓ³n es solo para administradores*',
    botAdmin: '*[βοΈ] El bot debe ser administrador primero*',
    owner: '*[βοΈ] Este comando es solo para el propietario*',
    group: '*[βοΈ] Esta FunciΓ³n es solo para grupos*',
    private: '*[βοΈ] FunciΓ³n es solo para chat privado*',
    bot: '*[βοΈ] Esta funciΓ³n es solo para el bot*',
    wait: '*[β³] Por favor espere Β± un minuto..*',
    linkm: '*[β] Donde esta el link?*',
    error: '*[βοΈ] Error*',
    endLimit: '*[βοΈ] Su lΓ­mite diario ha expirado, el lΓ­mite se restablecerΓ‘ cada 12 horas*',
    ban: '*[β] Has sido baneado por el dueΓ±o, si quieres ser desbaneado, chatea con mi dueΓ±o*',
    nsfw: '*[βοΈ] La funciΓ³n nsfw no se ha activado, comunΓ­quese con el administrador para activarla*',
    banChat: '*[β] El bot fue baneado en este grupo, comunΓ­quese con el propietario para desbanear*'
}
    global.limitawal = {
    premium: "Infinity",
    free: 500,
    monayawal: 200
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./Media/theme/bot.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Se actualizΓ³ ${__filename}`))
	delete require.cache[file]
	require(file)
})
