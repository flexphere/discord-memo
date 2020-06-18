const config = require('./lib/config')
const save = require('./lib/db');
const scrape = require('./lib/scrape');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.author.bot) return;
  
  try {
    const links = msg.content.match(/((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g);  
    for (const url of links) {
      const data = scrape(url);
      if (!data) continue;
      data.push(msg.author.username);
      save(data);
    }
  } catch(e) {}
});

client.login(config.DISCORD_TOKEN);


