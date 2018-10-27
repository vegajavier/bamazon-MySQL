CREATE DATABASE bamazon_db
USE Bamazon_db;

CREATE TABLE Inventory(
ItemID INTEGER AUTO_INCREMENT PRIMARY KEY,
Product VARCHAR(40),
DeptCategory VARCHAR(40),
Price DOUBLE (10,2),
AvailableInventory INTEGER
);

INSERT INTO Inventory(Product, DeptCategory, Price, AvailableInventory)
VALUES ("Fitted Hat", "Accessories", 34.99, 18),
("49ers Jersey", "Apparel", 149.99, 20),
("Team Logo Hoodie", "Apparel", 49.99, 25),
("Team Flag", "Tailgate", 19.99,50),
("Jerry Rice Bobblehead", "Memorabilia", 25.99,10),
("Joe Montana Photo", "Memorabilia", 69.99,35),
("49ers Auto Decals", "Accessories" ,4.99,100),
("Patrick Willis Jersey", "Apparel", 249.99, 20),
("Navarro Bowman Plaque", "Memorabilia", 45.99,15),
("Steve Young Autograph Shirt", "Memorabilia",79.99,15);
