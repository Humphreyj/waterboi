CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <=5)
);

CREATE TABLE users (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    display_name TEXT NOT NULL,
    location TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    confirm_password TEXT NOT NULL
);

CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    users_id INT NOT NULL REFERENCES users(id),
    restaurant_id INT NOT NULL REFERENCES restaurants(id),
    content TEXT NOT NULL,
    rating INT NOT NULL check(rating >= 1 and rating <= 5)
);




INSERT INTO restaurants(id,restaurant_name,address,price_range) values(1,'Jack Allen','Austin, Tx',5);

INSERT INTO restaurants(id,name,location,price_range) values(0,'Hoovers','Austin, Tx',3);
#update a restaurants
UPDATE retaurants SET name = 'Bootys', location ='Booty',price_range = 1 WHERE id = 4;

#add a users
INSERT INTO users(id,name,location,email,password) values(0,'Joshua Humphrey','Austin, Tx','Josh@cool.com','Beans1');
#DELETE
DELETE FROM restaurants WHERE id = 4;


#DROP TABLE
DROP TABLE table_name

#get average rating
SELECT Avg(rating) FROM reviews WHERE id = id;

#get avergae rating and count of reviews for a group
SELECT restaurant_id, location, Avg(rating), count(rating) FROM reviews GROUP BY restaurant_id;

#Join users and review tables
SELECT restaurant_id,display_name,content,rating FROM reviews INNER JOIN users ON reviews.users_id = users.id;

#Join users and review tables, get all reviews for specific restaurant
SELECT restaurant_id,display_name,content,rating FROM reviews INNER JOIN users ON reviews.users_id = users.id WHERE restaurant_id = restaurant_id;

#JOIN RESTAURANTS AND reviews
SELECT * FROM restaurants INNER JOIN reviews ON restaurants.id = reviews.restaurant_id;

*GET ALL RESTAURANTS AND RATINGS
SELECT * FROM restaurants LEFT JOIN (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews GROUP BY restaurant_id) reviews on restaurants.id = reviews.restaurant_id;

*GET ONE RESTAURANT AND RATINGS
SELECT * FROM restaurants LEFT JOIN (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews GROUP BY restaurant_id) reviews on restaurants.id = reviews.restaurant_id WHERE restaurant_id = 12;