import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from './app.js';
import cors from "cors";

dotenv.config({ path: './env' });

app.use(cors());

// const whitelist = ['http://localhost:5173', 'http://localhost:5174'];
// const corsOptionsDelegate = function (req, callback) {
//   let corsOptions;
//   if (whitelist.indexOf(req.header('Origin')) !== -1) {
//     corsOptions = { origin: true }; // reflect the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: false }; // disable CORS for this request
//   }
//   callback(null, corsOptions); // callback expects two parameters: error and options
// };

// app.get('/products', cors(corsOptionsDelegate), function (req, res) {
//   res.json({ msg: 'This is CORS-enabled for a whitelisted domain.' });
// });

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("App not able to talk to server: ", error);
      throw error;
    });

    const port = process.env.PORT || 5001;
    app.listen(port, () => {
      console.log(`SERVER IS RUNNING AT PORT: ${port}`);
    });

    app.use('/hello', (req, res) => {
      res.send("TEST case");
    });

  })
  .catch((error) => {
    console.log("MONGODB CONNECTION ERROR", error);
  });

app.use('/test', (req, res) => {
  res.send("///text");
});
