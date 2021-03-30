const express = require("express");
const consign = require("consign");
const bodyPaser = require("body-paser");

module.exports = () => {
    const app = express();
    app.use(express.json());
    consign()
        .include('controllers')
        .into(app)
    

    return app;
}

