DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  ID int AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN NOT NULL,
  img int NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID)
);

SELECT * FROM burgers;