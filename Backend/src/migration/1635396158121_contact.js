module.exports = {
  up: `CREATE TABLE IF NOT EXISTS contact
    (
      id              INT PRIMARY KEY AUTO_INCREMENT,
      name            VARCHAR(25) NOT NULL,  
      clientemail     VARCHAR(100) NOT NULL, 
      adminemail      VARCHAR(100) NOT NULL,
      desription      VARCHAR(255) NOT NULL,
      created_on      DATETIME NOT NULL DEFAULT NOW(),
      updated_on      DATETIME NOT NULL DEFAULT NOW(),
      remove_on       DATETIME NOT NULL DEFAULT NOW()
      )`,
  down: 'DROP TABLE IF EXISTS contact',
}
