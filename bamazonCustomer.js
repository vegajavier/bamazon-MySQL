var figlet = require('figlet');
const boxen = require("boxen");

figlet("Bamazon", function(err,data ){
    if (err){
        //console.log("not working")
        //Firefox, these function behave quite differently: log only prints out a toString representation, whereas dir prints out a navigable tree. STACKOVERFLOW..
        console.dir(err);
        return;
    }
    console.log(data)
    console.log(boxen('WELCOME TO BAMAZON', {padding: 1}));
});