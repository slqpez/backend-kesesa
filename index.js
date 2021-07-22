require("dotenv").config();
require("./config/DB.config.js");

const express = require("express");
const morgan = require("morgan");
const chalk = require("chalk");
const fileupload = require("express-fileupload");
const passport = require("passport");
const cors = require("cors");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser")


const indexRouter = require("./routes/index.routes.js");
const usersRouter = require("./routes/users.routes.js");
const documentsRouter = require("./routes/documents.routes.js");
const authRouter = require("./routes/auth.routes.js");


const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,  //TODO cambiar cuando se despliegue el front.
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true 
  })
);

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SECRET_KEY],
    maxAge: 24 * 60 * 60 * 100
  })
);

app.use(cookieParser())
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.use(
  morgan(
    chalk`:method :url {green :status} :response-time ms - :res[content-length]`
  )
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});