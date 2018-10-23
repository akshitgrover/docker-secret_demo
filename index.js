const http = require("http");
const fs = require("fs");

const secret_1_data = fs.readFileSync("/run/secrets/SECRET_1", {encoding:"utf8"});

const secret_2_data = fs.readFileSync("/run/secrets/SECRET_2", {encoding: "utf8"});

const server = http.createServer();

server.on("request", (req, res)=>{

    res.setHeader("Content-Type", "application/json");
    let body = {secret_1_data, secret_2_data};
    let jsonBody = JSON.stringify(body);
    res.write(jsonBody);
    res.end();

});

server.listen(3000, (err)=>{

    if(err){
        console.log("Error lifting on port 3000");
        process.exit(1);
    }
    console.log("Lifted on port 3000");

});