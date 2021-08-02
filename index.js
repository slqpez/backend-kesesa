require("dotenv").config();
require("./config/DB.config.js");

const express = require("express");
const fileupload = require("express-fileupload");
const passport = require("passport");
const path = require('path');
const cors = require("cors");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
//const morgan = require("morgan")

const indexRouter = require("./routes/index.routes.js");
const usersRouter = require("./routes/users.routes.js");
const documentsRouter = require("./routes/documents.routes.js");
const authRouter = require("./routes/auth.routes.js");

const app = express();

app.enable("trust proxy");

app.use(express.static('build'))


app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SECRET_KEY],
    maxAge: 24 * 60 * 60 * 100
  })
);

//app.use(morgan("dev"))
app.use(express.json());
app.use(cookieParser());

app.use(passport.initialize());

app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000", 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true 
  })
);

app.use(
  fileupload({
    useTempFiles: true,
  })
);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/documents", documentsRouter);
app.use("/auth", authRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
