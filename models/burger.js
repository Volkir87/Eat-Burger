// your model should do CRUD operations

const ORM = require("../config/orm");

class Burger {
    constructor(){
        this.orm = new ORM();
    }

    getAllBurgers(){
        this.orm.selectAll('burgers');
    }

    addBurger(){

    }

    devourBurger(){

    }

    deleteBurger(){
        //won't be used
    }
}

module.exports = Burger;