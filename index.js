/**
 * Carga del SDK Azure Application Insights para NodeJS, por seguridad la instrumentation key
 * debe estar guardada en una variable de entorno en el servidor
 */
// const appInsights = require("applicationinsights");
// appInsights.setup("your_instrmentation_key").start();
//require("custom-env").env(true);
const express = require("express");

const firstExercise = require("./routes/firstExercise")
const secondExercise = require("./routes/secondExercise")
var cors = require("cors");


const app = express();

app.use(cors());

//Habilitar Express.json
app.use(express.json({ extended: true}));



app.use("/api/firstExercise", firstExercise);
app.use("/api/secondExercise", secondExercise);

const port = 4000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Listen on port ${port}`);
});