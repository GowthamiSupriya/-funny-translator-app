var inputTxt= document.querySelector('#input');
var outputTxt= document.querySelector('#output');
var transbtn1= document.querySelector('#translate-btn1');
var transbtn2= document.querySelector('#translate-btn2');
var transbtn3= document.querySelector('#translate-btn3');

var url1= "https://api.funtranslations.com/translate/yoda.json";
var url2= "https://api.funtranslations.com/translate/pirate.json";
var url3= "https://api.funtranslations.com/translate/groot.json";

function getTranslationURL(text,serverURL) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("Error occured " + error);
}

function clickHandler(url){
    var txt = inputTxt.value; //taking input
    //calling server
    fetch(getTranslationURL(txt,url))
    .then(response => response.json())
    .then(json => {
        var translatedtxt=  json.contents.translated 
        outputTxt.innerText= translatedtxt
    })              //printing output
    .catch(errorHandler)
}

    transbtn1.addEventListener("click", clickHandler(url1))
    transbtn2.addEventListener("click", clickHandler(url2))
    transbtn3.addEventListener("click", clickHandler(url3))


