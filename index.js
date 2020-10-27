const http = require('http');
const express = require('express');
const status = require ('http-status');
const sequelize = require ('./src/database/database');
const app = express();
const routes = require ('./src/routes/routes.js');
const cors = require('cors');

app.use(express.json()); // vai trabalhar com Json

app.use(cors());

app.use('/sistema', routes); // esse "/sistema" é definido como local do servidor antes do /usuarios feito nas rotas

app.use((req, res, next) => {
    res.status.apply(status.NOT_FOUND).send("Page not found");
});

app.use((req, res, next) => {
    res.status.apply(status.INTERNAL_SERVER_ERROR).json({error});
});

sequelize.sync({force: false}).then( () => {
    const port = 3003; // Vai responder na porta 3003. posso definir esta porta
    app.set("port", process.env.PORT || port);
    const server = http.createServer(app);
    server.listen(process.env.PORT || port);
});
