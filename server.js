const dotenv = require("dotenv");
const config = require("./webpack.config");
const Webpack = require("webpack");
const compiler = Webpack(config);
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("isomorphic-fetch");
const DevServer = require("webpack-dev-server");
const stripeInit = require("stripe");
const stripeUtils = require("./stripe-utils");
dotenv.config();
let stripe = null;

const stripeServerInit = () => {
  const key = process.env.KEY;
  console.log(`Using Stripe Test key: ${key}`);
  stripe = stripeInit(process.env.KEY);
};

const devServerOptions = Object.assign({}, config.devServer, {
  open: true,
  stats: {
    colors: true
  }
});

const webpackDevServer = new DevServer(compiler, devServerOptions);

dotenv.config();
const port = process.env.SERVER_PORT || 3001;
const devServerPort = process.env.PORT || 3000;
const app = express();

const enableCORS = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  next();
};

app.use(enableCORS);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/pay", async (req, res) => {
  const paymentInfo = req.body;
  const stripeJSON = await stripe.charges.create({
    amount: 5999,
    currency: "usd",
    source: process.env.TOKEN,
    description: paymentInfo.name || "Game"
  });

  res.json(stripeJSON);
});

(async () => {
  await app.listen(port, stripeServerInit);
  await webpackDevServer.listen(devServerPort);
  console.log(`Server listening on port: ${port}`);
  console.log(`Webpack Dev Server listening on port: ${port}`);
})();
