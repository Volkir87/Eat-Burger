// your model should do CRUD operations

const ORM = require("../config/orm");

class Burger {
    constructor(){
        this.orm = new ORM();
    }

    async getAllBurgers(){
        let allBurgers = await this.orm.selectAll('burgers');
        //console.log(allBurgers);
        return allBurgers;
    }

    addBurger(name){
        this.orm.insertOne('burgers',`burger_name, devoured`,`'${name}', 0`);
    }

    devourBurger(){

    }

    deleteBurger(){
        //won't be used
    }
}

module.exports = Burger;