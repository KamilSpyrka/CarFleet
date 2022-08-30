const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize } = require("./models");
const config = require("./config/config");
const cookieParser = require("cookie-parser");
const dayjs = require("dayjs");
var customParseFormat = require("dayjs/plugin/customParseFormat");

//App
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//Dates
dayjs().format();

//Routes
require("./routes")(app);

//Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));
}

//DB
sequelize.sync().then(() => {
  app.listen(config.port);
  console.log(`server started on port: ${config.port}`);
});
