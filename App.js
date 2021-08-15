var inputText = document.querySelector('.txt-inputcontainer');
var outputText = document.querySelector('.txt-outputcontainer');
var button = document.querySelector('#btn-translate');

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL="https://api.funtranslations.com/translate/ferb-latin.json";



function getTranslateURL(text) {
    return serverURL + "?" + "text=" + text;
}


button.addEventListener("click", clickhandler)


function errorhandler(errorhandle) {
    console.log("Some this went wrong: ", errorhandle);
    alert("Some thing went wrong:" + errorhandle)
    alert("Please try after some time ")
}


function clickhandler() {


   // outputText.innerText="thishishihs"+inputText.value;
    var userinputText = inputText.value;
    // console.log(inputText.value)
    // console.log("Clicked")

    fetch(getTranslateURL(userinputText))
        .then(response => response.json())
        .then(json => outputText.innerText=json.contents.translated)
        .catch(errorhandler)
}