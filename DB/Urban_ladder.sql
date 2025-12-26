-- ===============================
-- DATABASE
-- ===============================
CREATE DATABASE IF NOT EXISTS urban_ladder;
USE urban_ladder;

-- ===============================
-- USER DETAILS TABLE
-- ===============================
CREATE TABLE user_details (
    id INT NOT NULL AUTO_INCREMENT,
    fname VARCHAR(50),
    lname VARCHAR(50),
    email VARCHAR(100),
    phonenumber BIGINT,
    username VARCHAR(50),
    password VARCHAR(50),
    usertype VARCHAR(50),
    PRIMARY KEY (id)
);

INSERT INTO user_details (id, fname, lname, email, phonenumber, username, password, usertype) VALUES
(1, 'Ronanki', 'Giresh', 'giresh@gmail.com', 7036144204, 'Rgiresh', 'giresh@123', 'admin'),
(2, 'Patro', 'Prasanth', 'prasanth@gmail.com', 7036120184, 'prasanth', 'prasanth@123', 'user'),
(3, 'anvesh', '', 'anvesh@gmail.com', 9642482096, 'anvesh', 'anvesh@123', 'user'),
(4, 'raja', 'p', 'raja@gmail.com', 7896352410, 'raja', 'raja@123', 'user'),
(5, 'first', 'RG', 'RG@gmail.com', 7036144204, 'name', 'RG', 'user'),
(6, 'first', 'RG', 'RG@gmail.com', 7036144204, 'name', 'RG', 'admin');

-- ===============================
-- PRODUCT CATEGORY TABLE
-- ===============================
CREATE TABLE product_category (
    pc_id INT NOT NULL,
    pc_name VARCHAR(50),
    PRIMARY KEY (pc_id)
);

INSERT INTO product_category (pc_id, pc_name) VALUES
(11, 'Home Appliances'),
(12, 'Dinning set');

-- ===============================
-- PRODUCT DETAILS TABLE
-- ===============================
CREATE TABLE product_details (
    p_id INT NOT NULL AUTO_INCREMENT,
    p_name VARCHAR(50),
    description VARCHAR(200),
    price DECIMAL(8,2),
    units_in_stock INT,
    image_url VARCHAR(200),
    pc_id INT,
    PRIMARY KEY (p_id),
    KEY pc_id (pc_id),
    CONSTRAINT fk_product_category
        FOREIGN KEY (pc_id) REFERENCES product_category(pc_id)
);

INSERT INTO product_details (p_id, p_name, description, price, units_in_stock, image_url, pc_id) VALUES
(17, 'computer table', 'No one wants their homes to be unattractive...', 8000.00, 25, '/assets/images/comp-1.jpg', 12),
(18, 'recliner', 'No one wants their homes to be unattractive...', 50000.00, 35, '/assets/images/char.jpg', 11),
(19, 'Dinning Set', 'No one wants their homes to be unattractive...', 40000.00, 35, '/assets/images/d-4.jpg', 12),
(20, 'Sofa Set', 'No one wants their homes to be unattractive...', 50000.00, 35, '/assets/images/sofa-1.jpg', 12),
(22, 'Recliner', 'No one wants their homes to be unattractive...', 50000.00, 35, '/assets/images/chair-2.jpg', 12),
(24, 'computer table', 'No one wants their homes to be unattractive...', 10000.00, 35, '/assets/images/comp-2.jpg', 12),
(25, 'Sofa Set', 'No one wants their homes to be unattractive...', 100000.00, 35, '/assets/images/sofa-3.jpg', 11),
(27, 'Dinning Set', 'No one wants their homes to be unattractive...', 18000.00, 35, '/assets/images/dinning-1.jpg', 11),
(37, 'dinning', 'No one wants their homes to be unattractive...', 30000.00, 35, '/assets/images/DinerSet-3.jpg', 11);

-- ===============================
-- CART TABLE
-- ===============================
CREATE TABLE cart (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    description VARCHAR(200),
    price DECIMAL(8,2),
    image_url VARCHAR(200),
    user_id INT,
    PRIMARY KEY (id),
    KEY user_id (user_id),
    CONSTRAINT fk_cart_user
        FOREIGN KEY (user_id) REFERENCES user_details(id)
);

-- ===============================
-- END
-- ===============================
