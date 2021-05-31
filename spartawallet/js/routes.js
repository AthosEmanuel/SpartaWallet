"use strict";

const express = require("express");
const knex = require("./knexfile");
const routes = express.Router();
const path = require("path");
const pathCSS = path.join(__dirname, "../css");
const pathFONTS = path.join(__dirname, "../fonts");
const pathTemplateBase = path.join(__dirname, "../src/templateBase.html");
const pathTemplateLogin = path.join(__dirname, "../src/login.html");
const pathTemplateMercado = path.join(__dirname, "../src/mercado.html");
const pathTemplateCarteira = path.join(__dirname, "../src/carteira.html");
const pathTemplateCorretora = path.join(__dirname, "../src/corretoras.html");
const pathTemplateSuporte = path.join(__dirname, "../src/suporte.html");
const pathTemplateCadastro = path.join(__dirname, "../src/cadastro.html");
const pathCorretoraJS = path.join(__dirname, "./corretoras.js");
const pathLogin = path.join(__dirname, "./login.js");

routes.get("", function (req, res) {
  res.sendFile(pathTemplateBase);
});

routes.get("/login", function (req, res) {
  res.sendFile(pathTemplateLogin);
});

routes.get("/loginjs", function (req, res) {
  res.sendFile(pathLogin);
});

routes.get("/market", function (req, res) {
  res.sendFile(pathTemplateMercado);
});

routes.get("/wallet", function (req, res) {
  res.sendFile(pathTemplateCarteira);
});

routes.get("/broker", function (req, res) {
  res.sendFile(pathTemplateCorretora);
});

routes.get("/suport", function (req, res) {
  res.sendFile(pathTemplateSuporte);
});

routes.get("/corretoras", function (req, res) {
  res.sendFile(pathCorretoraJS);
});

routes.get("/cadastro", function (req, res) {
  res.sendFile(pathTemplateCadastro);
});

routes.use(express.static("spartawallet"));
routes.use("/css", express.static(pathCSS));
routes.use("/fonts", express.static(pathFONTS));

module.exports = routes;
