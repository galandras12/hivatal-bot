const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = "!";
var cron = require('node-cron');
//require('log-timestamp')('HIVATAL-BOT:', 'Europe/Budapest');
require('console-inject');
	
client.on('ready', () => {
  console.debug('BOT is RUN');



client.user.setStatus('dnd')

cron.schedule('35 16 * * 3', () => {
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
	client.user.setActivity("Hol tartott eddig", {
  type: "WATCHING",
  url: "https://mezobereny.hu"
});
});

cron.schedule('0 15 * * 1,2,4', () => {
	client.user.setActivity("Órát! Mert lassan munka idő vége.", {
  type: "WATCHING",
  url: "https://mezobereny.hu"
});
});

cron.schedule('35 13 * * 5', () => {
	client.user.setActivity("Órát! Mert lassan hétvége.", {
  type: "WATCHING",
  url: "https://mezobereny.hu"
});
});

/*var facts = ['ASP-t iratok', 'uzsonás zacsit', 'kedves ügyfeleket', 'postázandókat', 'de nem látja', 'mennyi van hátra a munkából', 'papír halmok', 'mi a teendő még', 'mit kell aláiratni', 'mennyi az idő', 'mezobereny.hu', 'naptári ünnepnapokat', 'kitűzött szabadságot', 'iktatnivalót', 'milyen alszám lehet', 'mekkora a rendetlenség', 'érkezett email-eket', 'hogy csak egy robot aki nem tud ennyi mindent nézni']
setInterval(function() {
  var fact = Math.floor(Math.random() * facts.length)
  client.user.setActivity(facts[fact], {
  type: "WATCHING",
  url: "https://mezobereny.hu"
}); // Every second, this will return a _new random_ fact
}, 30*60*1000)*/

cron.schedule('0 14 * * 5', () => {
    client.channels.cache.get("689376897309999113").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Közlemények!');
	client.channels.cache.get("689394488476827665").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in ADÓ EADAT!');
	client.channels.cache.get("689394453877751835").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in PÉNÜGY EADAT!');
	client.channels.cache.get("760790573354844190").send("NAP VÉGE RUTIN: \n`DELETED` last 100 messages in `Közlemények`, `ADÓ EADAT!`, `PÉNÜGY EADAT!`");
});

cron.schedule('0 16 * * 1,2,4', () => {
    client.channels.cache.get("689376897309999113").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Közlemények!');
	client.channels.cache.get("689394488476827665").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in ADÓ EADAT!');
	client.channels.cache.get("689394453877751835").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in PÉNÜGY EADAT!');
	client.channels.cache.get("760790573354844190").send("NAP VÉGE RUTIN: \n`DELETED` last 100 messages in `Közlemények`, `ADÓ EADAT!`, `PÉNÜGY EADAT!`");
});

cron.schedule('00 18 * * 3', () => {
    client.channels.cache.get("689376897309999113").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Közlemények!');
	client.channels.cache.get("689394488476827665").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in ADÓ EADAT!');
	client.channels.cache.get("689394453877751835").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in PÉNÜGY EADAT!');
	client.channels.cache.get("760790573354844190").send("NAP VÉGE RUTIN: \n`DELETED` last 100 messages in `Közlemények`, `ADÓ EADAT!`, `PÉNÜGY EADAT!`");
});

cron.schedule('00 12 * * 1,2,3,4,5', () => {
    client.channels.cache.get("689376897309999113").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Közlemények!');
	client.channels.cache.get("689394488476827665").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in ADÓ EADAT!');
	client.channels.cache.get("689394453877751835").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in PÉNÜGY EADAT!');
	client.channels.cache.get("760790573354844190").send("12:00 - DÉLI TISZTÍTÁS RUTIN: \n`DELETED` last 100 messages in `Közlemények`, `ADÓ EADAT!`, `PÉNÜGY EADAT!`");
});
 // client.channels.cache.get("760790573354844190").send("Hivatal BOT is `RESTARTED`");
 
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
	client.channels.cache.get("689376897309999113").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Közlemények!');
	client.channels.cache.get("689394488476827665").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in ADÓ EADAT!');
	client.channels.cache.get("689394453877751835").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in PÉNÜGY EADAT!');
	client.channels.cache.get("760790573354844190").send("`DELETED` last 100 messages in `Közlemények`, `ADÓ EADAT!`, `PÉNÜGY EADAT!`");
}
	else if (command === "help") {
		message.reply("`használd a következő paancsokat: `\n`Válasz időt mutatja a bot és a géped között: !ping`\n`Számok gyors összeadására van: !szum`");
}

else if (command === "reggel") {
client.user.setActivity("Jó reggelt!", {
  type: "PLAYING",
  url: "https://mezobereny.hu"
}); }

else if (command === "rstat") {
const randommessages = ['ASP-t iratok', 'uzsonás zacsit', 'kedves ügyfeleket', 'postázandókat', 'de nem látja', 'mennyi van hátra a munkából', 'papír halmok', 'mi a teendő még', 'mit kell aláiratni', 'mennyi az idő', 'mezobereny.hu', 'naptári ünnepnapokat', 'kitűzött szabadságot', 'iktatnivalót', 'milyen alszám lehet', 'mekkora a rendetlenség', 'érkezett email-eket', 'hogy csak egy robot aki nem tud ennyi mindent nézni']
const randomMessage = randommessages[Math.floor(Math.random() * randommessages.length)];
client.user.setActivity(randomMessage, {
  type: "WATCHING",
  url: "https://mezobereny.hu"
});
}

});


client.login(config.BOT_TOKEN);
