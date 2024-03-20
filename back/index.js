require("dotenv").config();
const app = require("./src/server");
const dbCon = require("./src/config/dbCon");
const PORT = process.env.PORT;

dbCon()
  .then((res) => {
    app.listen(PORT, () => {
      console.log("El servidor esta escuchando en el puerto 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
