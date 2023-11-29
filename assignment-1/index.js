const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const { url } = req;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url === "/"){
        try{
            const homePage = fs.readFileSync('index.html', 'utf8');
            res.end(homePage);
        }catch(err){
            console.log(err);
            res.end('Uh Oh! A server error has occurred.\n');
        }
    }else if(url === "/car"){
        try{
            const homePage = fs.readFileSync('Ch8_CarFactsButton.html', 'utf8');
            res.end(homePage);
        }catch(err){
            console.log(err);
            res.end('Uh Oh! A server error has occurred.\n');
        }
    }else if(url === "/cat"){
        try{
            const homePage = fs.readFileSync('Ch8_CatFactsButton.html', 'utf8');
            res.end(homePage);
        }catch(err){
            console.log(err);
            res.end('Uh Oh! A server error has occurred.\n');
        }
    }else if(url === "/city"){
        try{
            const homePage = fs.readFileSync('Ch8_CityFactsButton.html', 'utf8');
            res.end(homePage);
        }catch(err){
            console.log(err);
            res.end('Uh Oh! A server error has occurred.\n');
        }
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})