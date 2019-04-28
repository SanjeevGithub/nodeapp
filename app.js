


// function sayHello(name){
//     console.log('Hi there...'+name)
// }


// sayHello('Pandurang')

//var loggerApp= require('./logger.js');
//console.log(loggerApp)
//console.log(loggerApp.sdval)
//console.log(loggerApp)

//loggerApp.mylog('theek aahe. Coming from the function in logger module ')
//console.log(module)

const cpath = require('path');
const cos=require('os');
var vcos_freemem=cos.freemem();

var vpath=cpath.parse(__filename);
console.log(vpath);
console.log('Only directory'+vpath.dir)
//console.log('Free memory..'+vcos_freemem);
//console.log('uptime..'+cos.uptime()/(60*60));

console.log(`Freem momeory:${vcos_freemem}`);
console.log(`Uptime using backtick:${cos.uptime()}`);
