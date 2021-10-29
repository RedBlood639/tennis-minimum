module.exports = {
  up: `CREATE TABLE IF NOT EXISTS league
        (
          id              INT PRIMARY KEY AUTO_INCREMENT,
          title           VARCHAR(255) NOT NULL,  
          position        VARCHAR(255) NOT NULL,
          time            VARCHAR(255) NOT NULL,
          detail          TEXT,
          isDisable       BOOLEAN NOT NULL DEFAULT TRUE,
          created_on      DATETIME NOT NULL DEFAULT NOW(),
          updated_on      DATETIME NOT NULL DEFAULT NOW(),
          remove_on       DATETIME NOT NULL DEFAULT NOW()
          )`,
  down: 'DROP TABLE IF EXISTS league',
}
