CREATE DATABASE react_o_blog;

\c react_o_blog;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    admin BOOLEAN DEFAULT false
);

CREATE TABLE blog (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    blog_entry VARCHAR,
    post_date DATE,
    title VARCHAR
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    blog_id INT NOT NULL,
    FOREIGN KEY (blog_id) REFERENCES blog(id),
    post_date DATE
    comment VARCHAR,
    title VARCHAR
);