import express from "express";
import {getHomePage} from "../controllers/homeController";

let router = express.Router();

let initRoutes = (app) => {
    router.get("/", getHomePage);

    return app.use("/", router);
};
module.exports = initRoutes;
