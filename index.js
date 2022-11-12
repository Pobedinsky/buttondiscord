var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Join Russian Empire",
assets : {
large_image : "lesser_coat_of_arms_of_russian_empire_svg",
large_text : "JOIN NOW OR GAY"
},
buttons : [{label : "JOIN" , url : "https://discord.gg/XhyrmqnqDS"},{label : "Anthem" , url : "https://www.youtube.com/watch?v=dJVgeRvHaDw&ab_channel=NorwegianBaron"}]
}
})
})
client.login({ clientId : "1040942982347632720" }).catch(console.error);


