//configures the database

module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Foxes2002$",
    DB: "schedule_armory",
    dialect: "postgres",
    pool: {
      max: 5, //max number of connections
      min: 0, //min number
      acquire: 30000, //max time it tries to connect to database
      idle: 10000// max time it will idle trying to connect
    }
  };