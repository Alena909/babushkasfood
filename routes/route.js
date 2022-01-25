const express = require("express");
const router = express.Router();
const path = require("path");
const dishes = require("../util/dishes");

router.get("/savory", (req, res, next) => {
  res.render("pages/savory", {
    pageTitle: "Babushka's Food",
    pageName: "Savory",
    path: "/",
  });
});
router.get("/vegetarian", (req, res, next) => {
  const items = dishes.savory.vegetarian;
  res.render("pages/vegetarian", {
    pageTitle: "Babushka's Food",
    pageName: "Vegetarian",
    items: items,
    path: "/",
  });
});
router.get("/meat", (req, res, next) => {
  const items = dishes.savory.meat;
  res.render("pages/meat", {
    pageTitle: "Babushka's Food",
    pageName: "Meat",
    items: items,
    path: "/",
  });
});
router.get("/fish", (req, res, next) => {
  const items = dishes.savory.fish;
  res.render("pages/fish", {
    pageTitle: "Babushka's Food",
    pageName: "Fish",
    items: items,
    path: "/",
  });
});

router.get("/sweet", (req, res, next) => {
  res.render("pages/sweet", {
    pageTitle: "Babushka's Food",
    pageName: "Sweet",
    path: "/",
  });
});
router.get("/cake", (req, res, next) => {
  const items = dishes.sweet.cake;
  res.render("pages/cake", {
    pageTitle: "Babushka's Food",
    pageName: "Cake",
    items: items,
    path: "/",
  });
});
router.get("/pastry", (req, res, next) => {
  const items = dishes.sweet.pastry;
  res.render("pages/pastry", {
    pageTitle: "Babushka's Food",
    pageName: "Pastry",
    items: items,
    path: "/",
  });
});
router.get("/fruit", (req, res, next) => {
  const items = dishes.sweet.fruit;
  res.render("pages/fruit", {
    pageTitle: "Babushka's Food",
    pageName: "Fruit",
    items: items,
    path: "/",
  });
});

router.get("/table", (req, res, next) => {
  res.render("pages/table", {
    pageTitle: "Babushka's Food",
    pageName: "My Table",

    path: "/",
  });
});

router.get("/", (req, res, next) => {
  res.render("pages/index", {
    pageTitle: "Babushka's Food",
    pageName: "Babushka's Food",
    path: "/",
  });
});

module.exports = router;
