function calcular() {
    var inpu = document.getElementById('respp').value;//a variavel inpu recebe o valor coletado ("número de chaves")
    var input2 = document.getElementById('inputt').value.toUpperCase();// a variavel inputt recebe o valor coletado ("letra(s)") e as tranforma em caixa alta 
    var result = "";// inicializa a variavel

    if(inpu <1){ // se valor de chaves digitado for menor que 1 , valor de chaves automaticamente vira 1
        inpu=1;
    }else if(inpu >25){ // se valor de chaves digitado for maior que 25 , valor de chaves digitado vira automaticamente  25
        inpu=25;
    }
    for(var i = 0; i<input2.length; i++){ 
       var posicaoDaLetraNoAlfabeto = input2.charCodeAt(i)-64; // a variavel recebe o as letras e a tranforma em id e a joga na tabela ascii e tira -64 que e quando começa o alfabeto em caixa alta da tabela ascii
      
       var letraComDeslocamento =  parseInt(posicaoDaLetraNoAlfabeto) + parseInt(inpu);; // o id da letra ou letras digitadas somado com o numero de chaves
       
       if(letraComDeslocamento >26){// se maior que 26 a soma acima , a soma e dividida por 26 e o resto e contando, como se passase do Z e voltasse pro A
        var letraComDeslocamento = letraComDeslocamento % 26;
       }
        result += String.fromCharCode(parseInt(letraComDeslocamento)+64); // faz o id virar numero novamente 
    
    }
    document.getElementById("output").innerHTML = result; // mostra o resultado 
}

function desfazer() {
    var inpu = document.getElementById('respp').value;
    var input2 = document.getElementById('inputt').value.toUpperCase();
    var result = "";

    if(inpu <1){
        inpu=1;
    }else if(inpu >25){
        inpu=25;
    }
    
    for(var i = 0; i<input2.length; i++){ 
     
     
     
       var posicaoDaLetraNoAlfabeto = input2.charCodeAt(i)-65; 

      
       var letraComDeslocamento = parseInt(posicaoDaLetraNoAlfabeto) - parseInt(inpu);// o id da letra ou letras digitadas somado com o numero de chaves subtraido com o numero de chaves
       
       if(letraComDeslocamento <0){// se menor que 0 a subtração acima  , subtração recebee 26 mais o numero de chaves ,como se passase do A e voltasse pro Z
        var letraComDeslocamento = 26 + letraComDeslocamento ;
        }
        result += String.fromCharCode(parseInt(letraComDeslocamento)+65); 
    
    }
    document.getElementById("output").innerHTML = result;
}