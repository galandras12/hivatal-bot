const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = "!";
var cron = require('node-cron');
const notifier = require('mail-notifier');
//require('log-timestamp')('HIVATAL-BOT:', 'Europe/Budapest');
require('console-inject');
const clearchannelid = ['689376897309999113', '689394488476827665', '689394453877751835', '790477118521081866'];
const hivataluzenetall = ['689376897309999113', '766627222022127636', '766619701346304000', '760092279880548362', '758675127927439400', '763302417676238848', '758650559246630922', '758650594235121684'];
	
client.on('ready', () => {
	
  console.debug('BOT is RUN');

  /*cron.schedule('0,5,10,15,20,25,30,35,40,45,50,55 * * * 1,2,3,4,5', () => {
  require('dns').resolve('www.google.com', function(err) {
  if (err) { console.log("No connection email service to Google!"); } 
	else { */
  const imap = {
  user: 'galandras.mezobereny@gmail.com',
  password: 'tnwaaevhsrmboocs',
  host: 'imap.gmail.com',
  port: 993,
  tls: true,
  tlsOptions: { rejectUnauthorized: false },
  box: 'eAdat',
  markSeen: true,
};

// notifier(imap).on('mail', mail => client.channels.cache.get("760790573354844190").send(mail.subject)).start();

const n = notifier(imap);
n.on('end', () => n.start()) // session closed
  .on('mail', mail => client.channels.cache.get("760790573354844190").send(mail.subject))
  .start(); //Forever RUN
  
  			
//	}});});

client.user.setStatus('online')
//online, idle, invisible, dnd
//PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM_STATUS, COMPETING

cron.schedule('35 17 * * 3', () => {
	client.user.setActivity("Órát! Mert lassan munka idő vége.", {
  type: "WATCHING",
  url: "https://mezobereny.hu"
});
});

cron.schedule('30 11 * * 1,2,3,4,5', () => {
	client.user.setActivity("Ebéd menüt.", {
  type: "WATCHING",
  url: "https://mezobereny.hu"
});
});

cron.schedule('00 12 * * 1,2,3,4,5', () => {
	client.user.setActivity("Ebédjét", {
  type: "WATCHING",
  url: "https://mezobereny.hu"
});
});

cron.schedule('30 12 * * 1,2,3,4,5', () => {
	client.user.setActivity("Desszertet.", {
  type: "WATCHING",
  url: "https://mezobereny.hu"
});
});

cron.schedule('00 13 * * 1,2,3,4,5', () => {
	client.user.setActivity("Dolgozik", {
  type: "WATCHING",
  url: "https://mezobereny.hu"
});
});

cron.schedule('00 14 * * 1,2,3,4,5', () => {
	client.user.setActivity("Munkában van", {
  type: "WATCHING",
  url: "https://mezobereny.hu"
});
});


cron.schedule('30 15 * * 1,2,4', () => {
	client.user.setActivity("Órát! Mert lassan munka idő vége.", {
  type: "WATCHING",
  url: "https://mezobereny.hu"
});
});

cron.schedule('35 11 * * 5', () => {
	client.user.setActivity("Órát! Mert lassan hétvége.", {
  type: "WATCHING",
  url: "https://mezobereny.hu"
});
});

cron.schedule('01 14 * * 5', () => {
    clearchannelid.forEach(element => { 
	client.channels.cache.get(element).bulkDelete(100).catch(console.error);
		}); 
	console.log('DELETED last 100 messages in Közlemények, ADÓ EADAT, PÉNÜGY EADAT, MUNKAÜGY EADAT');
	client.channels.cache.get("760790573354844190").send("14:00 - NAP VÉGE RUTIN: \n`DELETED` last 100 messages in `Közlemények`, `ADÓ EADAT!`, `PÉNÜGY EADAT!`, `MUNKAÜGY EADAT`");
});

cron.schedule('0 16 * * 1,2,3,4', () => {
   clearchannelid.forEach(element => { 
	client.channels.cache.get(element).bulkDelete(100).catch(console.error);
		}); 
	console.log('DELETED last 100 messages in Közlemények, ADÓ EADAT, PÉNÜGY EADAT, MUNKAÜGY EADAT');
	client.channels.cache.get("760790573354844190").send("16:00 - NAP VÉGE RUTIN: \n`DELETED` last 100 messages in `Közlemények`, `ADÓ EADAT!`, `PÉNÜGY EADAT!`, `MUNKAÜGY EADAT`");
});

cron.schedule('00 18 * * 3', () => {
    clearchannelid.forEach(element => { 
	client.channels.cache.get(element).bulkDelete(100).catch(console.error);
		}); 
	console.log('DELETED last 100 messages in Közlemények, ADÓ EADAT, PÉNÜGY EADAT, MUNKAÜGY EADAT');
	client.channels.cache.get("760790573354844190").send("18:00 - NAP VÉGE RUTIN: \n`DELETED` last 100 messages in `Közlemények`, `ADÓ EADAT!`, `PÉNÜGY EADAT!`, `MUNKAÜGY EADAT`");
});

cron.schedule('01 12 * * 5', () => {
    clearchannelid.forEach(element => { 
	client.channels.cache.get(element).bulkDelete(100).catch(console.error);
		}); 
	console.log('DELETED last 100 messages in Közlemények, ADÓ EADAT, PÉNÜGY EADAT, MUNKAÜGY EADAT');
	client.channels.cache.get("760790573354844190").send("12:00 - NAP VÉGE RUTIN: \n`DELETED` last 100 messages in `Közlemények`, `ADÓ EADAT!`, `PÉNÜGY EADAT!`, `MUNKAÜGY EADAT`");
}); 
 
});

client.on('guildMemberAdd', member => {
    member.guild.channels.get('760790573354844190').send("Üdvözöljük "+ member +"!"); 
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
		client.channels.cache.get("760790573354844190").send("`DELETED` last 100 messages in `PÉNÜGY EADAT!`");
}else if (command === "adhelp") {
		message.reply("`használd a következő admin paancsokat: `\n`Közlemény törlés: !delkoz`\n`Pénzügy eAdat törlése: !delpadat`\n`Adó eAdat törlése: !delaadat`\n`Közlemények, Eadatok (mind) törlése: !delall`");
}
	else if (command === "delaadat") {
		client.channels.cache.get("689394488476827665").bulkDelete(100).catch(console.error);
		console.log('DELETED last 100 messages in ADÓ EADAT!');
		client.channels.cache.get("760790573354844190").send("`DELETED` last 100 messages in `ADÓ EADAT!`");
}
  
  else if (command === "delkoz") {
	 client.channels.cache.get("689376897309999113").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Közlemények!');
	client.user.setActivity("Munka idő végét!", {
  type: "WATCHING",
  url: "https://mezobereny.hu"
});
  }

else if (command === "delall") {
	
	clearchannelid.forEach(element => { 
	client.channels.cache.get(element).bulkDelete(100).catch(console.error);
		}); 
	console.log('DELETED last 100 messages in Közlemények, ADÓ EADAT, PÉNÜGY EADAT, MUNKAÜGY EADAT');
	client.channels.cache.get("760790573354844190").send("`DELETED` last 100 messages in `Közlemények`, `ADÓ EADAT!`, `PÉNÜGY EADAT!`, `MUNKAÜGY EADAT`");
}
	else if (command === "help") {
		message.reply("`használd a következő parancsokat: `\n`Válasz időt mutatja a bot és a géped között: !ping`\n`Számok gyors összeadására van: !szum`");
}

else if (command === "xmashivataluzenet") {
	hivataluzenetall.forEach(element => { 
	client.channels.cache.get(element).send("Boldog karácsonyi ünnepeket!"); }); 
}

else if (command === "ujevhivataluzenet") {
	hivataluzenetall.forEach(element => { 
	client.channels.cache.get(element).send("Boldog új évet!"); }); 
}

else if (command === "reggel") {
client.user.setActivity("Jó reggelt!", {
  type: "PLAYING",
  url: "https://mezobereny.hu"
}); }

else if (command === "wstat") {
const randommessages = ['ASP-t iratok', 'uzsonás zacsit', 'kedves ügyfeleket', 'postázandókat', 'de nem látja', 'mennyi van hátra a munkából', 'papír halmok', 'mi a teendő még', 'mit kell aláiratni', 'mennyi az idő', 'mezobereny.hu', 'naptári ünnepnapokat', 'kitűzött szabadságot', 'iktatnivalót', 'milyen alszám lehet', 'mekkora a rendetlenség', 'érkezett email-eket', 'hogy csak egy robot aki nem tud ennyi mindent nézni', 'ASP oldalát', 'eAdatokat', 'a kedves ügyfelet', 'megint nem megy semmi normálisan', 'kifogyó festék üzenetet', 'ez se oldja meg magát', 'kint hideg van?']
const randomMessage = randommessages[Math.floor(Math.random() * randommessages.length)];
client.user.setActivity(randomMessage, {
  type: "WATCHING",
  url: "https://mezobereny.hu"
});
}

else if (command === "lstat") {
const randommessages = ['Dögös robit', 'Rádió 1-et', 'kedves ügyfeleket', 'kinti zajokat', 'üvöltüző kedves utcabelieket', 'az óra ketyegését', 'nyomtató hiba sípolását', 'telefoncsörgést amit nem veszek fel', 'igazi slágereket', 'esik az eső?', 'mekkora a csend', 'reklámokat interneten', 'nyomtató zúgását', 'igazi metál zenét', 'híreket', 'POP slágereket', 'csak az igazi rap zenéket', 'egy süket robot? hogyan?', 'bőszen kopogó billentyűt munka közben', 'valami sípól? áramszünet van?', 'a kedves ügyfelet', 'megint nem jó valami a szonszédba', 'jött egy értesítésem', 'valaki mérges', 'mulatósat!']
const randomMessage = randommessages[Math.floor(Math.random() * randommessages.length)];
client.user.setActivity(randomMessage, {
  type: "LISTENING",
  url: "https://mezobereny.hu"
});
}

else if (command === "sstat") {
const randommessages = ['mezobereny.hu', 'Youtube videó', 'Facebook']
const randomMessage = randommessages[Math.floor(Math.random() * randommessages.length)];
client.user.setActivity(randomMessage, {
  type: "STREAMING",
  url: "https://mezobereny.hu"
});
}

else if (command === "pstat") {
const randommessages = ['ASP-t iratok', 'uzsonázik', 'kedves ügyfelekkel', 'a fa* -ragott kis figurákkal']
const randomMessage = randommessages[Math.floor(Math.random() * randommessages.length)];
client.user.setActivity(randomMessage, {
  type: "PLAYING",
  url: "https://mezobereny.hu"
});
}

});

client.login(config.BOT_TOKEN);
