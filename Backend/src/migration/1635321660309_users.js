module.exports = {
  up: `CREATE TABLE IF NOT EXISTS users
  (
    id              INT PRIMARY KEY AUTO_INCREMENT,
    firstname       VARCHAR(255) NOT NULL,  
    lastname        VARCHAR(255) NOT NULL, 
    email           VARCHAR(255) UNIQUE NOT NULL, 
    password        VARCHAR(255) NOT NULL, 
    role            ENUM('admin', 'common') DEFAULT 'common',
    skill           VARCHAR(255) NOT NULL DEFAULT '0.0',
    club            VARCHAR(255),
    gender          VARCHAR(10) NOT NULL DEFAULT 'Male',
    zipcode         VARCHAR(20),
    phone           VARCHAR(15),
    birth           VARCHAR(30),
    code            INT(10) NOT NULL DEFAULT 22222,
    isDisable       BOOLEAN NOT NULL DEFAULT TRUE,
    created_on      DATETIME NOT NULL DEFAULT NOW(),
    updated_on      DATETIME NOT NULL DEFAULT NOW(),
    remove_on       DATETIME NOT NULL DEFAULT NOW()
    )`,
  down: 'DROP TABLE IF EXISTS users',
}
