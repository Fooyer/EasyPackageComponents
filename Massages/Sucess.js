// This code is a Sucess Massages

import {ConvertSeconds} from "../Utilities/timeConversion";

// Sucess Message

function Sucess(time) {

    if (time==null){
        time = 5;
    }
    time2 = ConvertSeconds(time);

    var divNova = document.createElement("div");
    
    var conteudoNovo = document.createTextNode("Olá, cumprimentos!");
    divNova.appendChild(conteudoNovo);
    divNova.id = "Sucess";

    var divAtual = document.getElementById("Aooba");
    document.body.insertBefore(divNova, divAtual);

    setInterval(function() {
        var element = document.getElementById("Sucess");
        element.remove();
    }, time2)
    
}

function Show(){

    alert('Aooba');

}