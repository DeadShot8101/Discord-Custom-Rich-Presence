var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "ABOUT YOU",
state : "DESIGNATION",
assets : {
large_image : "BIG IMAGE NAME",
small_image : "SMALL IMAGE NAME",
large_text : "THAT YOU WANT TO SHOW ON THE BIG IMAGE", // THIS WILL SHOW AS "Playing <Status>" from the outisde
small_text : "THAT YOU WANT TO SHOW ON THE SMALL IMAGE"
},
buttons : [{label : "BUTON1" , url : "LINK"},{label : "BUTTON2",url : "LINK2"}]1
}
})
})
client.login({ clientId : "BOT ID HERE" }).catch(console.error);