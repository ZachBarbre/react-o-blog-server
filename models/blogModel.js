const db = require('./conn.js');

class Blog {
    constructor(username, email, password, admin){
        this.username = username;
        this.email = email;
        this.password = password;
        this.admin = admin;
    }

    static async getBlogEntries() {
        try {
            const response = await db.any(`SELECT * FROM blog;`)
            return response;
        } catch (error) {
           console.log(error);
           return error;
        }
    }
}

module.exports = Blog;