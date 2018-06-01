// PARA CONOCER LA LOCATION
var urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams.toString());

//FUNCION: "query-string PARA ACCEDER A LOS VALORES DE LA SEDE REQUERIDA
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// console.log(getParameterByName('sede'));

 var arraySede= data[getParameterByName('sede')];
// console.log(arraySede);



