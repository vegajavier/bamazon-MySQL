let mysql = require("mysql");
let figlet = require('figlet');
let boxen = require('boxen');
let prompt = require('prompt');

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",    
    password: "",
    database: "bamazon"
})
  connection.connect(function(err){
          if(err) throw err;
          console.log("connected");
          makeTable();
});

let makeTable = function(){
    connection.query("SELECT * FROM Inventory", function(err,res){
        for(var i = 0; i<res.length; i++){
            console.log(res[i].ItemId+ "|"+res[i].ProductName+ "|" +res[i].DepartmentName+ "|" +res[i].price+ "|" +res[i].AvailableInventory+ "\n");
        }
    promptUser(res);
    })
}
let promptUser = function(res){
    inquirer.prompt([{
        type: 'input',
        name: 'selection',
        message: " What would you like to order? "
    }]).then(function(answer){
        let correct=false;
        for (var i=0; i<res.length;i++){
            if (res[i].ProductName==answer.choice){
                correct=true;
                let procuct=answer.choice;
                let id=i

            }
        }
    })
}


figlet("Bamazon", function(err,data ){
    if (err){
        //console.log("not working")
        //Firefox, these function behave quite differently: log only prints out a toString representation, whereas dir prints out a navigable tree. STACKOVERFLOW..
        console.log(err);
    }
    console.log(data)
    console.log(boxen('WELCOME TO BAMAZON', {padding: 1}));
    console.log("\n")
    console.log (" | Product | Dept Category |  Price  |  Available Inventory  |   " );
    console.log ("_______________________________________________________________");

});

