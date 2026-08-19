let http = require('http');
let server = http.createServer(function(req,res){
    res.end("<html><body>Site YEEEEEYYYY</body></html>");
});
server.listen(3000);
console.log('Vai tumaaaaandu!!!!!');