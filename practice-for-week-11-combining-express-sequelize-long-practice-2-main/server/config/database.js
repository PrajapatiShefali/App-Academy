
module.exports = {
  development: {
    
    dialect: "sqlite",
    storage: process.env.DB_FILE,
    seederStorage: "sequelize",
    benchmark: true,
    logQueryParameters: true,
    typeValidation: true,
    // logging: false
  },
  test: {
    storage: process.env.DB_TEST_FILE,
    dialect: "sqlite",
    seederStorage: "sequelize",
    logging: false
  }
};
