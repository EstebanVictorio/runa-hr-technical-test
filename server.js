const dotenv = require("dotenv");
const express = require("express");
const Webpack = require("webpack");
const DevServer = require("webpack-dev-server");
const config = require("./webpack.config");
const compiler = Webpack(config);
const fetch = require("isomorphic-fetch");

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
const key = process.env.KEY;
const options = {
  headers: {
    "Ocp-Apim-Subscription-Key": key,
    "Accept-Language": "en",
    Host: "www.haloapi.com"
  }
};

const lotrOptions = {
  headers: {
    Authorization: `Bearer ${key}`
  }
};

const enableCORS = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  next();
};

app.use(enableCORS);

app.get("/characters", async (req, res) => {
  const response = await fetch(
    " https://the-one-api.herokuapp.com/v1/character",
    lotrOptions
  );
  const data = await response.json();
  res.json({
    data
  });
});

app.get("/weapons", async (req, res) => {
  const response = await fetch(
    "https://www.haloapi.com/metadata/h5/metadata/weapons",
    options
  );
  const data = await response.json();
  res.json({
    data
  });
});

app.get("/enemies", async (req, res) => {
  const response = await fetch(
    "https://www.haloapi.com/metadata/h5/metadata/enemies",
    options
  );
  const data = await response.json();
  res.json({
    data
  });
});

(async () => {
  await app.listen(port);
  await webpackDevServer.listen(devServerPort);
  console.log(`Server listening on port: ${port}`);
  console.log(`Webpack Dev Server listening on port: ${port}`);
})();
