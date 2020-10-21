const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = "!";
var cron = require('node-cron');
//require('log-timestamp')('HIVATAL-BOT:', 'Europe/Budapest');
require('console-inject');
	
client.on('ready', () => {
  console.debug('BOT is RUN');

cron.schedule('05 14 * * 1,2,3,4,5', () => {
    client.channels.cache.get("689376897309999113").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Közlemények!');
	client.channels.cache.get("689394488476827665").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in ADÓ EADAT!');
	client.channels.cache.get("689394453877751835").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in PÉNÜGY EADAT!');
	client.channels.cache.get("760790573354844190").send("`DELETED` last 100 messages in `Közlemények`, `ADÓ EADAT!`, `PÉNÜGY EADAT!`");
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
    message.reply(`Pong! Az üzenet késleltetése: ${timeTaken}ms.`);
  }   
  else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);client.channels.cache.get("760790573354844190").send("`DELETED` last 100 messages in `Közlemények!`");
    message.reply(`az összege: ${sum}!`);
  }
  else if (command === "kocka") {
	   var response = [Math.floor(Math.random() * ((100 - 1) + 1) + 1)];
   message.channel.send("You got... " + response + "!").then().catch(console.error);
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


});


client.login(config.BOT_TOKEN);
