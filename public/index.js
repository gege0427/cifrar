function calcular() {
    var inpu = document.getElementById('respp').value;
    var input2 = document.getElementById('inputt').value.toUpperCase();
    var result = "";

    if(inpu <1){
        inpu=1;
    }else if(inpu >25){
        inpu=25;
    }
    for(var i = 0; i<input2.length; i++){ 
       var posicaoDaLetraNoAlfabeto = input2.charCodeAt(i)-64;
      
       var letraComDeslocamento =  parseInt(posicaoDaLetraNoAlfabeto) + parseInt(inpu);;
       
       if(letraComDeslocamento >26){
        var letraComDeslocamento = letraComDeslocamento % 26;
       }
        result += String.fromCharCode(parseInt(letraComDeslocamento)+64);
    
    }
    document.getElementById("output").innerHTML = result;
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

      
       var letraComDeslocamento = parseInt(posicaoDaLetraNoAlfabeto) - parseInt(inpu);
       
       if(letraComDeslocamento <0){
        var letraComDeslocamento = 26 + letraComDeslocamento ;
        }
        result += String.fromCharCode(parseInt(letraComDeslocamento)+65);
    
    }
    document.getElementById("output").innerHTML = result;
}