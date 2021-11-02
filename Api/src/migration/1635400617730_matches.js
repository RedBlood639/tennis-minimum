module.exports = {
  up: `CREATE TABLE IF NOT EXISTS matches
      (
        id              INT PRIMARY KEY AUTO_INCREMENT,
        date            VARCHAR(50) NOT NULL,  
        opponent        VARCHAR(100) NOT NULL, 
        site            VARCHAR(100) NOT NULL,
        result          VARCHAR(100) NOT NULL,
        isDisable       BOOLEAN NOT NULL DEFAULT TRUE,
        created_on      DATETIME NOT NULL DEFAULT NOW(),
        updated_on      DATETIME NOT NULL DEFAULT NOW(),
        remove_on       DATETIME NOT NULL DEFAULT NOW()
        )`,
  down: 'DROP TABLE IF EXISTS matches',
}
