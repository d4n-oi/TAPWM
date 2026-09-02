let app = require('./app/config/server');

app.get('/', function(req, res){
    res.render("home/index.ejs");
    });
app.get('/formulario_adicionar_usuario', function(req,res){
    res.render("admin/adicionar_usuario");
});
app.get('/informacoes/historia', function(req, res){
    res.render('informacoes/historia');
    });

app.get('/informacoes/cursos', function(req, res){
    res.render('informacoes/cursos');
    });
app.get('/informacoes/professores', function(req, res){
    res.render('informacoes/professores');
    });
app.listen(3000, function(){
    console.log("Servidou iniciado")
});
