CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <=5)
);

CREATE TABLE users (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

INSERT INTO restaurants(id,name,location,price_range) values(1,'Dai Due','Austin, Tx',5);

INSERT INTO restaurants(id,name,location,price_range) values(0,'Hoovers','Austin, Tx',3);
#update a restaurants
UPDATE retaurants SET name = 'Bootys', location ='Booty',price_range = 1 WHERE id = 4;

#add a users
INSERT INTO users(id,name,location,email,password) values(0,'Joshua Humphrey','Austin, Tx','Josh@cool.com','Beans1');
#DELETE
DELETE FROM restaurants WHERE id = 4;


#DROP TABLE
DROP TABLE table_name