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


$ npx heroku config:set AWS_ACCESS_KEY_ID = AKIAIDPXXUKRF6ISK3QA AWS_SECRET_ACCES
S_KEY=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

npx heroku config:set AWS_ACCESS_KEY_ID=AKIAIDPXXUKRF6ISK3QA AWS_SECRET_ACCESS_KEY=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 -a walp
npx heroku config:set S3_BUCKET_NAME=walp-assets

https://walp.s3.east.amazonaws.com/dump.sql

npx aws s3 presign s3://walp.s3.us-east.amazonaws.com/dump.sql

https://s3.amazonaws.com/walp.s3.us-east-1.amazonaws.com/dump.sql?AWSAccessKeyId=AKIAWERZV52ZPG4TUZEC&Signature=cyk0E0morNquc%2F2NuYwd%2BKorUko%3D&Expires=1600201100

#database URL
postgres://zlqsgazaesmcqx:eedb6e9d12a18e4615d7ed6c3314ebe43c99b2329cfcd1dfb3379bb0ad0734ec@ec2-52-72-34-184.compute-1.amazonaws.com:5432/d17qagi02pp83v

npx heroku pg:backups:restore "https://s3.amazonaws.com/walp.s3.us-east.amazonaws.com/dump.sql" DATABASE_URL -a walp

#sample AWS bucket policy

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Stmt1405592139000",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": [
                "arn:aws:s3:::walpe/*",
                "arn:aws:s3:::walpe"
            ]
        }
    ]
}