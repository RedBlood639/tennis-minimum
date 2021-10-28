module.exports = {
  up: `CREATE TABLE IF NOT EXISTS users
  (
    id              INT PRIMARY KEY AUTO_INCREMENT,
    firstname       VARCHAR(25) NOT NULL,  
    lastname        VARCHAR(25) NOT NULL, 
    email           VARCHAR(100) UNIQUE NOT NULL, 
    password        CHAR(60) NOT NULL, 
    role            ENUM('admin', 'common') DEFAULT 'common',
    skill           VARCHAR(10) NOT NULL DEFAULT '0.0',
    club            VARCHAR(255),
    gender          VARCHAR(10) NOT NULL DEFAULT 'Male',
    zipcode         VARCHAR(20),
    phone           VARCHAR(15),
    birth           VARCHAR(30),
    CODE            INT(10) NOT NULL DEFAULT 22222,
    RESET           INT(10) NOT NULL DEFAULT 11111,
    isDisable       BOOLEAN NOT NULL DEFAULT TRUE,
    created_on      DATETIME NOT NULL DEFAULT NOW(),
    updated_on      DATETIME NOT NULL DEFAULT NOW(),
    remove_on       DATETIME NOT NULL DEFAULT NOW()
    )`,
  down: 'DROP TABLE IF EXISTS users',
}
