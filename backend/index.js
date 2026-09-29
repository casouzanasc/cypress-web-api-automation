require("./config/env");

const { PORT, NODE_ENV } = require("./config/env");
const app = require("./app");
const { sequelize } = require("./models");

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log(`Connection with ${NODE_ENV} database has been established.`);

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
