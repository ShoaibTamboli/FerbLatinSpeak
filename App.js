var inputText = document.querySelector('.txt-inputcontainer');
var outputText = document.querySelector('.txt-outputcontainer');
var button = document.querySelector('#btn-translate');

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";





function getTranslateURL(text){
    return serverURL +"?"+"text" +text;
}


button.addEventListener("click", clickhandler)


function clickhandler() {


    console.log(inputText.value)
    console.log("Clicked")

    fetch(getTranslateURL(text))
    .then (response =>response.json)
    .then( json=> console.log(json))
}