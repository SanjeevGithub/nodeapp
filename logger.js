
const EventListner = require('events')

class Logger extends EventListner {

    log(message){
        console.log(message);
        this.emit('Emittingthismessage',{id:1, fyd:2});
    }


}


module.exports=Logger;

// var val='Sanju baba'
// module.exports.mylog=log

// module.exports.sdval=val;