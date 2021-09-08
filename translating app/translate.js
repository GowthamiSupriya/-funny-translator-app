var inputTxt= document.querySelector('#input');
var outputTxt= document.querySelector('#output');
var transbtn= document.querySelector('#translate-btn');

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("Error occured " + error);
}

function clickHandler(){
    var txt = inputTxt.value; //taking input
    //calling server
    fetch(getTranslationURL(txt))
    .then(response => response.json())
    .then(json => {
        var translatedtxt=  json.contents.translated 
        outputTxt.innerText= translatedtxt
    })              //printing output
    .catch(errorHandler)
    
}

transbtn.addEventListener("click", clickHandler)
