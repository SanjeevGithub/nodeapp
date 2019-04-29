

const cfs=require('fs')

//const vfs=cfs.readdirSync('./')
//console.log(`dfsfdsfsdf ${vfs}`)

cfs.readdir('./',function(berr,baba){
    if (berr)
        console.log(`arrrrr ${berr}`);
    else
        console.log(`baba files : ${baba}`);

}
);


