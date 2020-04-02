\c react_o_blog

INSERT INTO users (username, email, password, admin)
VALUES ('Zach', 'zachbarbre@gmail.com', 'thisisapassword', true);

INSERT INTO blog (user_id, blog_entry, post_date)
VALUES (1, 'This my first blog', '2020-4-2'),
        (1, 'This is another blog from the Pandemic', '2020-4-2');

INSERT INTO comments (user_id, blog_id, post_date, comment)
VALUES (1, 1, '2020-4-2', 'First'),
        (1, 1, '2020-4-2', 'That was a really dumb first commment. What is this 2010?');