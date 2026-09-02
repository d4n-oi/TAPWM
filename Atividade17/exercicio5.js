let eventos = require('events');
let EmissorEventos = eventos.EventEmmiter;
let ee = new EmissorEventos();

ee.on('dados', function(fecha){
    console.log(fecha);
});

ee.emit('dados', 'primeira vez' + Date.now());

setInterval(function(){
    ee.emit('dados', Date.now());
}, 500);
