const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");

mongoose.connect(
  "mongodb://${IP_SERVER}:${PORT_DB}/alejandrososa",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("La conexion es correcta");
      app.listen(port, () => {
        console.log("-----------------------");
        console.log("--------API REST-------");
        console.log("-----------------------");
        console.log("http://${IP_SERVER}:${PORT_DB}/api/${API_VERSION}/");
      });
    }
  }
);
