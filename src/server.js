require('dotenv').config();
import express from "express";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';

let app = express();

app.use(cookieParser('secret'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

configViewEngine(app);

initRoutes(app);

let port = process.env.PORT;
app.listen(port || 8080, () => console.log(`Doctor Appointment Booking System app is listening on port ${port}!`));
