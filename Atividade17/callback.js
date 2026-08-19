function exibeMensagemNaOrdem(mensagem, callback){
    console.log(mensagem);
    callback();
}

exibeMensagemNaOrdem("Essa é a mensagem", function(){
    console.log("essa é a segunda msg");
});