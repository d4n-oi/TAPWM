let http = require('http');
let server = http.createServer(function(req,res){
    let opcao = req.url;
    if(opcao=='/Pataco'){
        res.end("<html><body>Pataco pataco</body></html>");
    }
    else if(opcao == '/Patinhus'){
        res.end("<html><body>Patinho patinho</body></html>");
    }
    else if(opcao == '/Patota'){
        res.end("<html><body>Patota patota</body></html>");
    }
    else
        res.end("<html><body>AAAAhhh nauumm</body></html>");
});
server.listen(3000);
console.log('YYYYEEEEYYYYY');