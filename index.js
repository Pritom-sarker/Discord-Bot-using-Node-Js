const Discord = require("discord.js");
const client  = new Discord.Client();

// we clint is connected
client.on('ready',()=>{
    console.log('User connected'+client.user.tag);
    // this is how to set activity
    client.user.setActivity('Game Of thrones',{type:'Watching' })

    // get all chanell info
    client.guilds.forEach((guild)=>{
        // it will print all the chanell that the bot connected to
        console.log(guild.name);
        guild.channels.forEach((chanel)=>{
            console.log(`- ${chanel.name} ${chanel.type} ${chanel.id}`)
        })
    })
    // we need to add chanel id 1st..  general text 611269431863279623
    let generalChanel= client.channels.get('611269431863279623');

    // this is how to send image.. we can send local link here
    const atachment = new Discord.Attachment("https://cdn.programiz.com/sites/tutorial2program/files/hello-world.jpg");

    generalChanel.send(atachment);
    // send massage
    // generalChanel.send('Hello world');
})


// Start chat
client.on('message',(rec_masg)=>{
    if (rec_masg.author == client.user){
        // if massage was sent by the bot then...
        return 
    }
    // If the massage was  sent by user then
    else{
        // replay massage
        rec_masg.channel.send('massage received'+rec_masg.author.toString()+" : "+rec_masg.content);
        // react massage
        rec_masg.react("😡")
    }
    
})




// add token and login then
const token = "NjExMjY5NjMyMTU3ODEwNzcy.XV5DjA.rerBkjmiGEmULyuWSORj5ESgaHA"; //-- your discord channel token
client.login(token);
