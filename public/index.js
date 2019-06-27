function cifrar() {
    var palavra = document.getElementById("inputt").value.toLowerCase();
    var chave = document.getElementById("respp").value.toLowerCase();
    var alfabeto = "abcdefghijklmnopqrstuvwxyz";
    var numsim = '1234567890!@#$%¨&*()_+,./|';
    var resultado = "";
    var j = 0;

    for (var i = 0; i < palavra.length; i++) {

        if (j >= chave.length) {
            j = 0;
        }

        if (palavra.charAt(i) === " ") {
            resultado = resultado + " ";
            ++i;
        }

        for (let k = 0; k < numsim.length; k++) {
            if (palavra.charAt(i) === numsim.charAt(k)) {
                resultado = resultado + numsim.charAt(k)
                ++i;
            }
        }

        if (i < palavra.length) {
            var posicaochave = alfabeto.indexOf(chave.charAt(j)); //pega posição das letras da chave
            var posicaoletra = alfabeto.indexOf(palavra.charAt(i)); //pega posição das letras da palavra
            var novaChave = posicaochave + posicaoletra; //soma os dois de cima para fazer a criptografia

            if (novaChave >= 25) {
                novaChave = novaChave - 26;
            }

            if (novaChave < 0) {
                novaChave = novaChave + 26;
            }

            resultado = resultado + alfabeto.charAt(novaChave);

            j++;
        }
    }
    document.getElementById("output").innerHTML = resultado;
}

function decifrar() {
    var palavra = document.getElementById("inputt").value.toLowerCase();
    var chave = document.getElementById("respp").value.toLowerCase();
    var alfabeto = "abcdefghijklmnopqrstuvwxyz";
    var numsim = '1234567890!@#$%¨&*()_+,./|';
    var resultado = "";
    var j = 0;
    for (var i = 0; i < palavra.length; i++) {

        if (j >= chave.length) {
            j = 0;
        }

        if (palavra.charAt(i) === " ") {
            resultado = resultado + " ";
            ++i;
        }

        for (let k = 0; k < numsim.length; k++) {
            if (palavra.charAt(i) === numsim.charAt(k)) {
                resultado = resultado + numsim.charAt(k)
                ++i;
            }
        }

        if (i < palavra.length) {
            var posicaochave = alfabeto.indexOf(chave.charAt(j));
            var posicaoletra = alfabeto.indexOf(palavra.charAt(i));
            var novaChave = posicaoletra - posicaochave;

            if (novaChave >= 25) {
                novaChave = novaChave - 26;
            }

            if (novaChave < 0) {
                novaChave = novaChave + 26;
            }

            resultado = resultado + alfabeto.charAt(novaChave);
            j++;
        }
    }

    document.getElementById("output").innerHTML = resultado;
}