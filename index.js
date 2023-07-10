const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { 
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1127793885041660005')
    .setType('STREAMING')
    .setURL('https://twitch.tv/zlyoul') //Must be a youtube video link 
    
    .setName('Light')
    .setDetails(`Light`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1008872005736607899/1127790896268709908/main-qimg-467b63c089678211cb7f181e5b865a0f.gif') //You can put links in tenor or discord and etc.
     //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1008872005736607899/1127792495359692900/8018_blackverify.gif') //You can put links in tenor or discord and etc.
   //Text when you hover the Small image
    .addButton('✴', 'https://zlyoul.com')
    .addButton('✴', 'https://zlyoul.com');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Light`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
