require("dotenv").config();
const app = require("./src/app");
const connectdb = require("./src/db/db");

connectdb();
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
