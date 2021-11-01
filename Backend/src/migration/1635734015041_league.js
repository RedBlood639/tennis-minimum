module.exports = {
  up: `CREATE TABLE IF NOT EXISTS league
          (
            id              INT PRIMARY KEY AUTO_INCREMENT,
            rosterid        INT NOT NULL,
            date            DATE NOT NULL,  
            position        VARCHAR(255) NOT NULL,
            time            TIME NOT NULL,
            isDisable       BOOLEAN NOT NULL DEFAULT TRUE,
            created_on      DATETIME NOT NULL DEFAULT NOW(),
            updated_on      DATETIME NOT NULL DEFAULT NOW(),
            remove_on       DATETIME NOT NULL DEFAULT NOW()
            )`,
  down: 'DROP TABLE IF EXISTS league',
}
