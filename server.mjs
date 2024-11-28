import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";
import healthcheck from "./routes/healthcheck.mjs";

const PORT = 5050;
const app = express();


//app.use(cors());
var corsOptions = {origin: ["http://192.168.35.21:3000"],optionsSuccessStatus: 200 }

app.use(cors(corsOptions));


app.use(express.json());

app.use("/record", records);
app.use("/healthcheck", healthcheck);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
