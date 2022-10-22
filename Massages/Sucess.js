// This code is a Sucess Massages

// mensagem sucesso

import {ConvertSeconds} from "../Utilities/timeConversion";

function Sucess(time) {

    if (time=null){
        time = 5;
    }
    time = ConvertSeconds(time);

    var divNova = document.createElement("div");
    
    var conteudoNovo = document.createTextNode("Olá, cumprimentos!");
    divNova.appendChild(conteudoNovo);
    divNova.id = "Sucess";

    var divAtual = document.getElementById("Aooba");
    document.body.insertBefore(divNova, divAtual);

    setInterval(function() {
        var element = document.getElementById("Sucess");
        element.remove();
    }, time)
    
}