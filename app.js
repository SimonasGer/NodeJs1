const fs = require("fs");
const http = require("http");
const url = require("url")
const searchName = require("./modules/searchName")

let products = fs.readFileSync("./data/products.json", "utf-8");
products = JSON.parse(products);

// const newText = text.match(/\w+/g);
// const array = newText.filter((word) => word.length > 3);
// console.log(array);
// const result = array.toString()
// fs.writeFileSync("./data/result.txt", result);


// Nusiskaityti teksta is new.txt i reZult irasome zodzius kur daugioau nei 6 simboliai
// Create server

const server = http.createServer((req, res) => {
    //res.writeHead(200, {"Content-Type":"text/html"})
    //res.end("<h1>This is a home page</h1>");

    // res.writeHead(200, {"Content-Type":"application/json"})
    // res.end(JSON.stringify(text))

    const {pathname, query} = url.parse(req.url, true);
    switch(pathname){
        case "/": 
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end("<h1>This is a home page</h1>");
            break;
        case "/api/products":
            res.writeHead(200, {"Content-Type":"application/json"});
            res.end(JSON.stringify(products));
            break;
        case "/api/product":
            res.writeHead(200, {"Content-Type":"application/json"});
            res.end(JSON.stringify(products[query.id]));
            break;
        case "/api/search":
            res.writeHead(200, {"Content-Type":"application/json"});
            res.end(JSON.stringify(searchName(products, query)));
            break;
        default:
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end("<h1>Page not found</h1>");
            break;
    }
})
server.listen(8080, "127.0.0.1", () => {
    console.log("Server listening on 8080 port");
}) 
