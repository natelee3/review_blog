INSERT INTO brands 
    (name)
VALUES
    ('Innovative Percussion'),
    ('Freer Percussion'),
    ('Malletech'),
    ('Mike Balter'),
    ('Vic Firth');

INSERT INTO users
    (name, email, password)
VALUES
    ('Nate Lee', 'nlee@mail.com', ''),
    ('John Benton', 'JT_IV@mail.com', ''),
    ('Sean Reid', '#1animefan@mail.com', '');

INSERT INTO mallets
    (brand_id, model_number, name, shaft, msrp, img)
VALUES
    (1, 'IP3105B', 'Ludwig Albert-Medium', 'birch', 41.25, '../img/IP3105B.jpeg'),
    (3, 'KB14', 'Kevin Bobo-Hard', 'birch', 40.49, '../img/KB14.jpeg'),
    (2, 'K6', '1 1/8 Classic Poly', 'rattan', 45.00, '../img/K6.jpeg'),
    (4, '22R', 'Pro Vibe-Medium', 'rattan', 39.99, '../img/22R.jpeg');

INSERT INTO reviews 
    (review_text, user_id, mallet_id)
VALUES
    ('Awesome mallets! Love them', 1, 1),
    ('I found them unusable, but I am not a musician', 3, 2),
    ('I love the K6 mallets. I use them for all of my xylophone playing', 2, 3),
    ('The GOATs! If you only buy two pairs of vibraphone mallets... BUY TWO PAIRS OF THESE!!!', 2, 4);