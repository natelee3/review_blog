'use strict';

const db = require('./conn');
const bcrypt = require('bcryptjs');

class UsersModel {
    constructor(id, name, email, password) {
        this.id = id;
        this.name= name;
        this.email = email;
        this.password = password;
    }

    checkPassword(hashedPassword) {
        return bcrypt.compareSync(this.password, hashedPassword)
    }

    static async addUser(name, email, password) {
        try {
            //prepared statement to sanitize the data
            const query = `
            INSERT INTO users
                (name, email, password)
            VALUES
                ('${name}','${email}','${password}') RETURNING id;`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }

    async login() {
        try {
            const query = `SELECT * FROM users
            WHERE email = '${this.email}';`
            const response = await db.one(query);
            const isValid = this.checkPassword(response.password)
            if (!!isValid) {
                const {id, name, email} = response;
                return { isValid, user_id: id, name, email}
            } else {
                return {isValid}
            }
            // return response;
        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }

}

module.exports = UsersModel;