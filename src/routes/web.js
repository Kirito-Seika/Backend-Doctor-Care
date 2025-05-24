import express from "express";
import {handleWebHelloWorld} from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", handleWebHelloWorld);

    return app.use("/", router);
};
module.exports = initWebRoutes;
