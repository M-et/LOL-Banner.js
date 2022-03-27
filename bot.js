const Discord = require('discord.js');

const client = new Discord.Client();
const embed = new Discord.MessageEmbed;

client.login('INSERT TOKEN HERE');

client.on('ready', readyDiscord);
function readyDiscord () {
    console.log('Ready');
   
    client.user.setActivity(`Protecting ${client.guilds.cache.size} servers`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/m_ett"
      })           
    ;

client.on('message', gotMessage);

const bot = new Discord.Client();


client.on('presenceUpdate', (oldMember, newMember) => {
    const guild = newMember.guild;
    member = newMember;
    if (newMember.user.bot) return;
    
    activityLength = newMember.member.presence.activities.length;

    //check to see if the user has an activities, and if so, how many
    if (activityLength >0 ){
        console.log("member has " + activityLength + " activities");

        for (let i = 0; i < activityLength; i++) {         
          
        //Debugging messages to the log
        console.log("Activity in position " + i + " is " + newMember.member.presence.activities[i].name.toLowerCase());
        //console.log("now in lower case " + newMember.member.presence.activities[0].name.toLowerCase());

        if (newMember.member.presence.activities[i].name.toLowerCase() == "league of legends") { // Started playing.
            console.log(`<a:banned:942166115373678602> ${newMember.user.tag} has been banned for playing LOL <a:banned:942166115373678602>`);
            try{

                guild.members.ban(`${newMember.user.id}`, {reason: 'Playing League Of Legends'}).catch((err) => {
                console.error(err);
                var x = err.message;});
                break;
            }
            catch(err){    
            }
        }
    }
    } else {
        console.log("member has no activities");
        console.log("");
    }
});
} 
)
client.login('INSERT TOKEN HERE');
