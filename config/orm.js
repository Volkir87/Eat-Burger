
// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.


const connection = require("./connection");
const util = require("util");

connection.query = util.promisify(connection.query);

class ORM {
    constructor(){

    }

    async selectAll(table, conditionField, conditionValue){
        //connection.connect();
        let result = await connection.query(`SELECT * FROM ${table} WHERE ${conditionField} = ${conditionValue};`);
        //connection.end();
        return result;
    }

    async insertOne(table, fields, values){
        console.log(`INSERT INTO ${table} (${fields}) values (${values});`);
        await connection.query(`INSERT INTO ${table} (${fields}) values (${values});`);
        return true;
    }

    async updateOne(table, field, value, conditionField, conditionValue){
        await connection.query(`UPDATE ${table} SET ${field} = ${value} WHERE ${conditionField} = ${conditionValue};`);
        return true;
    }

}

module.exports = ORM;