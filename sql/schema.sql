CREATE TABLE brands (
    id serial PRIMARY KEY,
    brand_name text NOT NULL
);

CREATE TABLE users (
    id serial PRIMARY KEY,
    name text,
    username varchar
);

CREATE TABLE mallets (
    id serial PRIMARY KEY,
    brand_id integer REFERENCES brands(id),
    model_number varchar,
    name text NOT NULL,
    shaft text,
    msrp numeric,
    img varchar
);


CREATE TABLE reviews (
    id serial PRIMARY KEY,
    review_text text,
    user_id integer REFERENCES users(id),
    mallet_id integer REFERENCES mallets(id)
);
