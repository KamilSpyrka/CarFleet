module.exports = {
    port: process.env.PORT || 5000,
    db: {
      database: process.env.DB_NAME || "CarFleet",
      user: process.env.DB_USER || "CarFleet",
      password: process.env.DB_PASS || "CarFleet",
      options: {
        dialect: process.env.DIALECT || "sqlite",
        host: process.env.HOST || "localhost",
        storage: "./CarFleet.sqlite",
      },
    },
    authentication: {
      jwtSecret: process.env.JWT_SECRET || "secret",
    },
  };
  