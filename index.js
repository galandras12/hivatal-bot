const Discord = require("discord.js");
const config = require("./config.json");
const mailauth = require("./authmail.json");
const notifier = require('mail-notifier');
const client = new Discord.Client();
const prefix = "!";
var cron = require('node-cron');
require('console-inject');
const clearchannelid = ['689394488476827665', '689394453877751835'];
const hivataluzenetall = ['689376897309999113', '766627222022127636', '766619701346304000', '760092279880548362', '758675127927439400', '763302417676238848', '758650559246630922', '758650594235121684'];
const helpcommandlist = ['!ping - Nézd meg az üzeneted/szerver válaszidejét.','!sum - Számok összeadása','!kocka - Véletlen szerű szám generátor.', '!delpadat - Pénzügyi eAdatok törlése (ami nem régebbi 15 napnál és/vagy nem több 100 üzenetnél)', '!delaadat - Adós eAdatok törlése (ami nem régebbi 15 napnál és/vagy nem több 100 üzenetnél)','!delkoz - Közlemények törlése (ami nem régebbi 15 napnál és/vagy nem több 100 üzenetnél)', '!delall - Minden üzenet törlése eAdat és közlemény csatornákból. (ami nem régebbi 15 napnál és/vagy nem több 100 üzenetnél)', '!eadat - Ki írja hogy "eAdat ékezett" a pénzügyi csatornában.', '!adoadat - Ki írja hogy "eAdat ékezett" az adós csatonában'];
const channelbotmain = '760790573354844190';
const channelbc ='689376897309999113';

client.on('ready', () => {

console.debug('BOT is RUN');

const imap = {
	user: mailauth.emailusername,
	password: mailauth.emailpassword,
	host: 'imap.gmail.com',
	port: 993,
	tls: true, //true
	tlsOptions: { rejectUnauthorized: false },
	box: mailauth.emailbox,
	markSeen: true,
			}

const n = notifier(imap);
n.on('end', () => n.start()) // session closed
	.on('mail', mail => client.channels.cache.get(channelbotmain).send(mail.subject))
	.start(); //Forever RUN (if lost connect get error) 

client.user.setStatus('online')
//online, idle, invisible, dnd
//PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM_STATUS, COMPETING

cron.schedule('35 17 * * 3', () => {
	client.user.setActivity("Órát! Mert lassan munka idő vége.", {
  type: "WATCHING",
  url: "https://mezobereny.hu"
}); });

cron.schedule('30 11 * * 1,2,3,4,5', () => {
	client.user.setActivity("Ebéd menüt.", {
  type: "WATCHING",
  url: "https://mezobereny.hu"
}); });

cron.schedule('00 12 * * 1,2,3,4,5', () => {
	client.user.setActivity("Ebédjét", {
  type: "WATCHING",
  url: "https://mezobereny.hu"
}); });

cron.schedule('30 12 * * 1,2,3,4,5', () => {
	client.user.setActivity("Desszertet.", {
  type: "WATCHING",
  url: "https://mezobereny.hu"
}); });

cron.schedule('00 13 * * 1,2,3,4,5', () => {
	client.user.setActivity("Dolgozik", {
  type: "WATCHING",
  url: "https://mezobereny.hu"
}); });

cron.schedule('00 14 * * 1,2,3,4,5', () => {
	client.user.setActivity("Munkában van",{
  type: "WATCHING",
  url: "https://mezobereny.hu"
}); });

cron.schedule('30 15 * * 1,2,4', () => {
	client.user.setActivity("Órát! Mert lassan munka idő vége.", {
  type: "WATCHING",
  url: "https://mezobereny.hu"
}); });

cron.schedule('35 13 * * 5', () => {
	client.user.setActivity("Órát! Mert lassan hétvége.", {
  type: "WATCHING"
}); });

cron.schedule('00 14 * * 5', () => {
    clearchannelid.forEach(element => { 
	client.channels.cache.get(element).bulkDelete(100).catch(console.error);
		}); 
	console.log('DELETED last 100 messages in ADÓ EADAT, PÉNÜGY EADAT, MUNKAÜGY EADAT');
	client.channels.cache.get(channelbotmain).send("14:00 - NAP VÉGE RUTIN: \n`DELETED` last 100 messages in `ADÓ EADAT!`, `PÉNÜGY EADAT!`, `MUNKAÜGY EADAT`");
});

cron.schedule('0 16 * * 1,2,4', () => {
   clearchannelid.forEach(element => { 
	client.channels.cache.get(element).bulkDelete(100).catch(console.error);
		}); 
	console.log('DELETED last 100 messages in ADÓ EADAT, PÉNÜGY EADAT, MUNKAÜGY EADAT');
	client.channels.cache.get(channelbotmain).send("16:00 - NAP VÉGE RUTIN: \n`DELETED` last 100 messages in `ADÓ EADAT!`, `PÉNÜGY EADAT!`, `MUNKAÜGY EADAT`");
});

/* cron.schedule('30 8 * * 1', () => {
	client.channels.cache.get(channelbc).bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Közlemények');
	client.channels.cache.get(channelbotmain).send("08:30 - Hét kezdése: \n`DELETED` last 100 messages in `Közlemények`");
}); */

cron.schedule('00 18 * * 3', () => {
    clearchannelid.forEach(element => { 
	client.channels.cache.get(element).bulkDelete(100).catch(console.error);
		}); 
	console.log('DELETED last 100 messages in ADÓ EADAT, PÉNÜGY EADAT, MUNKAÜGY EADAT');
	client.channels.cache.get(channelbotmain).send("18:00 - NAP VÉGE RUTIN: \n`DELETED` last 100 messages in `ADÓ EADAT!`, `PÉNÜGY EADAT!`, `MUNKAÜGY EADAT`");
});

cron.schedule('00 12 * * 5', () => {
    clearchannelid.forEach(element => { 
	client.channels.cache.get(element).bulkDelete(100).catch(console.error);
		}); 
	console.log('DELETED last 100 messages in ADÓ EADAT, PÉNÜGY EADAT, MUNKAÜGY EADAT');
	client.channels.cache.get(channelbotmain).send("12:00 - NAP VÉGE RUTIN: \n`DELETED` last 100 messages in `ADÓ EADAT!`, `PÉNÜGY EADAT!`, `MUNKAÜGY EADAT`");
});
});

client.on('guildMemberAdd', member => {
    member.guild.channels.get(channelbotmain).send("Üdvözöljük "+ member +"!"); 
});

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Az üzenet késleltetése: ${timeTaken}ms.`);
  }   

else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`az összege: ${sum}!`);
  }

else if (command === "kocka") {
	   var response = [Math.floor(Math.random() * ((100 - 1) + 1) + 1)];
   message.channel.send("Ez most... " + response + "!").then().catch(console.error);
  }

else if (command === "delpadat") {
		client.channels.cache.get("689394453877751835").bulkDelete(100).catch(console.error);
		console.log('DELETED last 100 messages in PÉNÜGY EADAT!');
		client.channels.cache.get(channelbotmain).send("`DELETED` last 100 messages in `PÉNÜGY EADAT!`");
}

else if (command === "adhelp") {
		message.reply("`használd a következő admin paancsokat: `\n`Közlemény törlés: !delkoz`\n`Pénzügy eAdat törlése: !delpadat`\n`Adó eAdat törlése: !delaadat`\n`Közlemények, Eadatok (mind) törlése: !delall`");
}

else if (command === "delaadat") {
		client.channels.cache.get("689394488476827665").bulkDelete(100).catch(console.error);
		console.log('DELETED last 100 messages in ADÓ EADAT!');
		client.channels.cache.get(channelbotmain).send("`DELETED` last 100 messages in `ADÓ EADAT!`");
}

else if (command === "delkoz") {
	 client.channels.cache.get("689376897309999113").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Közlemények!');
  }

else if (command === "delall") {
	clearchannelid.forEach(element => { 
	client.channels.cache.get(element).bulkDelete(100).catch(console.error);
		}); 
	console.log('DELETED last 100 messages in ADÓ EADAT, PÉNÜGY EADAT, MUNKAÜGY EADAT');
	client.channels.cache.get(channelbotmain).send("`DELETED` last 100 messages in `ADÓ EADAT!`, `PÉNÜGY EADAT!`, `MUNKAÜGY EADAT`");
}

else if (command === "help") {
	helpcommandlist.forEach(element => { 
	message.channel.send(element).catch(console.error);
		});
}

else if (command === "karacsonyu") {
	hivataluzenetall.forEach(element => { 
	client.channels.cache.get(element).send("Boldog karácsonyi ünnepeket!"); }); 
}

else if (command === "ujevu") {
	hivataluzenetall.forEach(element => { 
	client.channels.cache.get(element).send("Boldog új évet!"); }); 
}

else if (command === "husvetu") {
	hivataluzenetall.forEach(element => { 
	client.channels.cache.get(element).send("Kellemes húsvéti ünnepeket!"); }); 
}

else if (command === "ujpeadat")
{
	client.channels.cache.get('689394453877751835').send("Érkezett új eAdat!");
}

else if (command === "ujaeadat")
{
	client.channels.cache.get('689394488476827665').send("Érkezett új eAdat!");
}

else if (command === "e-utal") {
	client.channels.cache.get('689394453877751835').send("eAdat érkezett Napi utalás támában");
}

else if (command === "reggel") {
client.user.setActivity("Jó reggelt!", {
  type: "PLAYING",
  url: "https://mezobereny.hu"
}); }

else if (command === "bc")
{ 	if (!args.length) {
	return message.channel.send('Hiányzik az üzenet!');
	}
	client.channels.cache.get(channelbc).send(args.splice(0).join(" ")); }
	
else if (command === "peadat")
{ 	if (!args.length) {
	return client.channels.cache.get('689394453877751835').send("**Érkezett eAdat!**");
	}
	client.channels.cache.get('689394453877751835').send("**Érkezett eAdat!** Következő témakörben: "+ args.splice(0).join(" ")) }
	
else if (command === "aeadat")
{ 	if (!args.length) {
	return client.channels.cache.get('689394488476827665').send("**Érkezett eAdat!**");
	//message.channel.send('Hiányzik az üzenet!'); 
	}
	client.channels.cache.get('689394488476827665').send("**Érkezett eAdat!** Következő témakörben: "+ args.splice(0).join(" ")) }	

else if (command === "wstat") {
const randommessages = ['ASP-t iratok', 'uzsonás zacsit', 'kedves ügyfeleket', 'postázandókat', 'de nem látja', 'mennyi van hátra a munkából', 'papír halmok', 'mi a teendő még', 'mit kell aláiratni', 'mennyi az idő', 'mezobereny.hu', 'naptári ünnepnapokat', 'kitűzött szabadságot', 'iktatnivalót', 'milyen alszám lehet', 'mekkora a rendetlenség', 'érkezett email-eket', 'hogy csak egy robot aki nem tud ennyi mindent nézni', 'ASP oldalát', 'eAdatokat', 'a kedves ügyfelet', 'megint nem megy semmi normálisan', 'kifogyó festék üzenetet', 'ez se oldja meg magát', 'kint hideg van?']
const randomMessage = randommessages[Math.floor(Math.random() * randommessages.length)];
client.user.setActivity(randomMessage, {
  type: "WATCHING"
});
}

else if (command === "lstat") {
const randommessages = ['Dögös robit', 'Rádió 1-et', 'kedves ügyfeleket', 'kinti zajokat', 'üvöltüző kedves utcabelieket', 'az óra ketyegését', 'nyomtató hiba sípolását', 'telefoncsörgést amit nem veszek fel', 'igazi slágereket', 'esik az eső?', 'mekkora a csend', 'reklámokat interneten', 'nyomtató zúgását', 'igazi metál zenét', 'híreket', 'POP slágereket', 'csak az igazi rap zenéket', 'egy süket robot? hogyan?', 'bőszen kopogó billentyűt munka közben', 'valami sípól? áramszünet van?', 'a kedves ügyfelet', 'megint nem jó valami a szonszédba', 'jött egy értesítésem', 'valaki mérges', 'mulatósat!']
const randomMessage = randommessages[Math.floor(Math.random() * randommessages.length)];
client.user.setActivity(randomMessage, {
  type: "LISTENING"
});
}

else if (command === "sstat") {
const randommessages = ['mezobereny.hu', 'Youtube videó', 'Facebook']
const randomMessage = randommessages[Math.floor(Math.random() * randommessages.length)];
client.user.setActivity(randomMessage, {
  type: "STREAMING"
});
}

else if (command === "pstat") {
const randommessages = ['ASP-t iratok', 'uzsonázik', 'kedves ügyfelekkel', 'a fa* -ragott kis figurákkal']
const randomMessage = randommessages[Math.floor(Math.random() * randommessages.length)];
client.user.setActivity(randomMessage, {
  type: "PLAYING"
});
}
});

client.login(config.BOT_TOKEN);
