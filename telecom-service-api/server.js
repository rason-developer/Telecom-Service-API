require('dotenv').config();

const {PORT} = require ("./config/dotenv.config");
const app = require("./app");
const http = require("http");

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
});
