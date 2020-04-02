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
            const response = await db.any(`SELECT blog.id, users.id, blog.blog_entry, 
                                            blog.post_date, blog.title, users.username 
                                            FROM blog INNER JOIN users ON blog.user_id = users.id;`)
            return response;
        } catch (error) {
           console.log(error);
           return error;
        }
    }

    static async getOneBlog(blogId) {
        try {
            const response = await db.one(`SELECT * FROM blog WHERE id = ${blogId};`)
            return response;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}

module.exports = Blog;