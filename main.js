const Discord = require('discord.js');

const client = new Discord.Client();
const prefix ='!!';


const yt ='https://bit.ly/329B1C2';
const insta ='https://instagram.com/papo.pipo';
const Dis='https://discord.gg/7H5xzF4';

client.once('ready',() => {
    console.log('Shinbot is online ');
    client.user.setActivity('Berozgaari Bhatta', {type: 'WATCHING'});
    
});
client.on('message',message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'shin'){
      
      message.reply("https://imgur.com/a/6dQB0vV");
      
    }
    else if(command === 'sup')
    message.reply('All Good.what about you mister!!');
    else if (command ==='dubey')
    message.reply('No stream problum if no chanul ez\n:Dubey 2020');
    else if (command ==='mafmaf')
    message.reply('https://www.youtube.com/channel/UCidmBfQXOBM795KjtWjAb3Q');
    else if(command === 'munne')
    message.reply('mad lad hab no channel');
    else if(command === 'setu')
    message.reply('Cannibals dont have channel,they get featured on NGC');
    else if(command === 'aditi')
    message.reply('Happy Birthday')
    else if(command ==='dubeyid')
    message.reply('https://steamcommunity.com/profiles/76561199085527840/');
    else if (command === 'sijid')
    message.reply ('https://imgur.com/HEIkLIP');
    
   
   
   else if(command =='shinboii')
   message.channel.send('https://thumbs.gfycat.com/EducatedPepperyInvisiblerail-size_restricted.gif');
  

});
client.on('message',message =>{
    let args = message.content.slice(prefix.length).split(' ');
    switch(args[0]){
        case 'gif':
            const embed = new Discord.MessageEmbed()
            .setImage('https://thumbs.gfycat.com/TatteredSecondaryBlackbear-size_restricted.gif')
             .setColor(0x285eee)
           
            
             message.channel.send(embed);
            break;
            case 'rules':
                const obj = new Discord.MessageEmbed()
               .setTitle('Server Rules')
            .addField('Rules','1)Harassment, abuse, hate speech, Profanity, No Porn, Nudity, 18+ NSFW ,racial, offensive slurs or any kind of discriminatory speech will not be tolerated. \n\n 2)No Offensive Nicknames allowed\n\n 3)No mass mentioning allowed \n\n 4)Tagging @Admin without any specific reason will result in a kick \n\n 5)Use Every Channel for Their Purpose they Made For. Dont Do Any Extra Activity')
            .setThumbnail('https://logos.flamingtext.com/Name-Logos/Rules-design-stripes-name.gif')
            .setColor(0x285eee)
            .setFooter('Rules can be updated at any period of time when required','https://cdn.discordapp.com/emojis/757188260748329001.gif?v=1')
            message.channel.send(obj);
                
            break;
            case 'av':
                const ob = new Discord.MessageEmbed()
                
                 .setColor(0x9BD149)
                 .setTitle('User Information')
                 .setThumbnail(message.author.displayAvatarURL())
                 .addField('Name',message.author.username)
                 .addField('Server Name',message.guild.name)


                message.channel.send(ob);

                break;
                case "annoucement":
                const ob1=new Discord.MessageEmbed()
                .setImage('https://i.pinimg.com/originals/e8/c8/1b/e8c81be301355d927d75fbb273a94267.gif')  
                .setColor(0x285eee)
                message.channel.send(ob1);
                break;
                case "help":
                    const ob2 = new Discord.MessageEmbed()
                    .setColor(0x285eee)
                    .addField("Bot Commands","Make sure to use **!!** before any command and avoid mentioning any user \n\n The Commands are:\n\n1)shin=`GIF`\n\n2)sup=`Greeting`\n\n3)dubey=`YT channel link`\n\n4)mafmaf=`YT Channel link`\n\n5)munne=`YT channel link`\n\n6)setu=`Random Message`\n\n7)dubeyid=`Steam ID`\n\n8)sijid=`Shin Sij ID`\n\n9)shinboii=**A GIF**\n\n10)av=`Avatar`")
                    .setThumbnail("https://i.kym-cdn.com/photos/images/original/001/115/767/74f.gif")       
                    .setFooter("Shinboii","https://media.tenor.com/images/9b8ccce68cac07626e71be1fbe01652a/tenor.gif")
                    message.reply(ob2);
                    break;
                    case "1":
                        const obb = new Discord.MessageEmbed()
                        .setImage('https://cdn.shopify.com/s/files/1/1198/0996/products/giphy.gif?v=1478770210')
                        message.channel.send(obb);
                        break;
                        case "status":
                        const ob4=new Discord.MessageEmbed()
                        .setColor(0x285eee)

                        .addField("BOT STATUS","**THE BOT IS NOW 24/7 online**")
                        .setThumbnail("https://i.pinimg.com/originals/aa/92/25/aa922544d0f9fa0f673a6e95c5738644.gif")

                        message.channel.send(ob4);    
                        break;

    }    
});
client.on("guildMemberUpdate", member =>{
    const channel = member.guild.channels.cache.find(channel => channel.name == "welcome");
    if(!channel)return;

    const wel = new Discord.MessageEmbed()
      
       .setColor(0x9BD149)
       .addField("WELCOME",`Welcome to the server ${member},Read the rules before proceeding,Enjoy your stay here!! :smile: `)
       
       
       .setImage("https://media.giphy.com/media/fU4elxKlRsulB4Jy7w/giphy.gif")


      message.channel.send(wel);
});



client.login(process.env.token);