const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors= require('cors');
const hostname = "127.0.0.1";
const port = 5000;
const path = require("path");
const sequelizee = require("./config");
const adminroute = require('./routes/admin.routes');
const userroute = require('./routes/user.routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use('/admin', adminroute)
app.use('/user', userroute)


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get("*", function (req, res) {
  res.status(404).send("404 error: page not found");
});

sequelizee.sync().then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  });





