const express = require("express");

const router = express.Router();

/*
  -- untuk mengambil semua data posts --
*/
router.get("/", (req, res, next) => {
    res.send("Router posts");
});

/* 
  -- untuk mengambil data posts berdasarkan id --
*/
router.get("/:id", (req, res, next) => {});

/*
  -- untuk menambah data posts --
*/
router.post("/", (req, res, next) => {});
