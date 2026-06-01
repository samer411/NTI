const http = require("http");
const fs = require("fs")

const users = JSON.parse(fs.readFileSync("./users.json","utf-8"))


const server = http.createServer((req,res)=>{
    const path = req.url;
    if(path==="/"||path==='/home'){
        res.writeHead(200,{"content-type":"text/html"})
        res.end(fs.readFileSync("./task1.html","utf-8"))
    }
    else if(path=="/api"){
        res.writeHead(200,{"content-type":"application/json"})
        res.end(JSON.stringify(users))
    }
    else{
        res.writeHead(404,{"content-type":"text/html"})
        res.end("<h1 style='color:red; text-align:center; text-decoration:underline'>Page Not Found</h1>")
    }
})


server.listen(3000,"127.0.0.1",()=>{
    console.log("server listen")
})