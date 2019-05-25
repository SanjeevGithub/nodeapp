

//const cfs=require('fs')

//const vfs=cfs.readdirSync('./')
//console.log(`dfsfdsfsdf ${vfs}`)

// cfs.readdir('./',function(berr,baba){
//     if (berr)
//         console.log(`arrrrr ${berr}`);
//     else
//         console.log(`baba files : ${baba}`);

// }
// );

//const EventE = require('events');

const Logger=require('./logger')
const lg=new Logger();

lg.on('Emittingthismessage',args=>{

    console.log('This event being listened',args)
})

lg.log('Message from appjs');





