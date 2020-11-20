require(`dotenv`).config();
const express = require("express") 

const userRouter = require("./routers/userRouter") 
const cors = require("cors");

const PORT = 4000;

const app = express();
app.use(cors());
app.use(express.json());

app.listen({ port: PORT }, () =>
  console.log(`Server ready on port:${PORT}`)
);