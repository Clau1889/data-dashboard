/***********************ENCONTRANDO SEDE ***********************/
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
console.log(getParameterByName('sede'));

//OBTENER UN ARREGLO DE LA SEDE SELECCIONADA
var arraySede = data[getParameterByName('sede')];
console.log(arraySede);

/***************COLOCANDO NOMBRE SEDE SELECCIONADA**********/
if (getParameterByName('sede') === 'CDMX') {
    var getNameLocation = document.getElementById('name-location').innerHTML = 'CDMX, México';
} else if (getParameterByName('sede') === 'AQP') {
    var getNameLocation = document.getElementById('name-location').innerHTML = 'Arequipa, Perú';
} else if (getParameterByName('sede') === 'LIM') {
    var getNameLocation = document.getElementById('name-location').innerHTML = 'Lima, Perú ';
} else if (getParameterByName('sede') === 'SCL') {
    var getNameLocation = document.getElementById('name-location').innerHTML = 'Santiago de Chile, Chile';
};

/*********************** ENCONTRANDO GENERACIONES*****************************/
//OBTENER TOTAL DE GENERACIONES
var totalGeneration= Object.keys(arraySede);
    console.log(totalGeneration); 

//CREAR LOS OPTIONS(generaciones encontradas por sede)
var menuGeneration = document.getElementById('menu-generation');
for (var i=0; i<totalGeneration.length; i++){
    var eachGeneration= totalGeneration[i];

    //CREAR ELEMENTOS DE SELECTION
    var option= document.createElement('option');
    var textOption= document.createTextNode(eachGeneration);

    //CREAR ATRIBUTOS A ELEMENTOS
    option.setAttribute('id','option');
    option.setAttribute('value', 'generation');

    //INDICAR POSICION DE HERENCIA
    option.appendChild(textOption);
    menuGeneration.appendChild(option);

}; 

/********* APARECER TABS HASTA QUE SE SELECCIONE GENERACION*********/





