const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const CLEAR_MESSAGES = '!clear';
const prefix = "!";

require('log-timestamp')('HIVATAL-BOT:');

client.on('ready', () => {
  console.log('BOT is RUN');
 // client.channels.cache.get("760790573354844190").send("Hivatal BOT is `RESTARTED`");
  
/*  setInterval(function(){
client.channels.cache.get("689394453877751835").bulkDelete(100).catch(console.error);
console.log('DELETED last 100 messages in PÉNÜGY EADAT!');
client.channels.cache.get("760790573354844190").send("`DELETED` last 100 messages in `PÉNÜGY EADAT!`");
  }, 1000*60*60 ); // Hour 1
  
  setInterval(function(){
client.channels.cache.get("689394488476827665").bulkDelete(100).catch(console.error);
console.log('DELETED last 100 messages in ADÓ EADAT!');
client.channels.cache.get("760790573354844190").send("`DELETED` last 100 messages in `ADÓ EADAT!`");
  }, 1000*60*60 ); // Hour 1
  
  setInterval(function(){
client.channels.cache.get("689376897309999113").bulkDelete(100).catch(console.error);
console.log('DELETED last 100 messages in Közlemények!');
client.channels.cache.get("760790573354844190").send("`DELETED` last 100 messages in `Közlemények!`");
  }, 1000*60*120 ); // 1000 ms * 60s * 120/60min 
  
  client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "HIVATAL-os robot. Fejlesztés alatt by Gál András",  //The message shown
            type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });*/
  
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
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`az összege: ${sum}!`);
  }
  
  else if (command === "delpadat") {
		client.channels.cache.get("689394453877751835").bulkDelete(100).catch(console.error);
		console.log('DELETED last 100 messages in PÉNÜGY EADAT!');
		client.channels.cache.get("760790573354844190").send("`DELETED` last 100 messages in `PÉNÜGY EADAT!`");
}else if (command === "adhelp") {
		message.reply("`használd a következő admin paancsokat: `\n`Közlemény törlés: !delkoz`\n`Pénzügy eAdat törlése: !delpadat`\n`Adó eAdat törlése: !delaadat`");
}
	else if (command === "delaadat") {
		client.channels.cache.get("689394488476827665").bulkDelete(100).catch(console.error);
		console.log('DELETED last 100 messages in ADÓ EADAT!');
		client.channels.cache.get("760790573354844190").send("`DELETED` last 100 messages in `ADÓ EADAT!`");
}
  
  else if (command === "delkoz") {
	 client.channels.cache.get("689376897309999113").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Közlemények!');
	client.channels.cache.get("760790573354844190").send("`DELETED` last 100 messages in `Közlemények!`");
	/* var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
            message.channel.bulkDelete(100)
            .catch(console.error);
			console.log('DEL! 100 message ACTIVATED again!');			// add error handling here
        }, 1000*60*60 ); */
 } 

	else if (command === "help") {
		message.reply("`használd a következő paancsokat: `\n`Válasz időt mutatja a bot és a géped között: !ping`\n`Számok gyors összeadására van: !szum`");
}

	

	

});


client.login(config.BOT_TOKEN);
