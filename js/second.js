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




///////////////////////////////////////////////////////////////////////////////

//ACCEDIENDO  A LAS SEDES (devuelve un objeto)
var arequipa = data.AQP;
var cdmx = data.CDMX;
var lima = data.LIM;
var santiago = data.SCL;
// console.log(arequipa);

//ACCEDIENDO A LAS GENERACIONES (devuelve las keys(strings) en un array)
var aqpGenerations = Object.keys(arequipa);
var cdmxGenerations = Object.keys(cdmx);
var limaGenerations = Object.keys(lima);
var stgoDeChileGenerations = Object.keys(santiago);
console.log(aqpGenerations);

var aqpGeneration2016 = arequipa["2016-2"];
var aqpGeneration2017 = arequipa["2017-1"];


//CREANDO FUNCION QUE CONVIERTA CUALQUIER OBJETO A UN ARRAY
var objectToArray = function(object) {
  var array2d = [];
  var allThePropertiesOfTheObject = Object.keys(object);

  for (var i = 0; i < allThePropertiesOfTheObject.length; i++) {
        array2d.push(allThePropertiesOfTheObject[i], object[allThePropertiesOfTheObject[i]])
  };

  return array2d;
};


//CONVIRTIENDO LOS OBJETOS DE LAS SEDES EN ARRAYS
var arrayArequipa = objectToArray(arequipa);
var arrayCdmx = objectToArray(cdmx);
var arrayLima = objectToArray(lima);
var arraySantiago = objectToArray(santiago);
console.log(arrayArequipa);

// CREANDO FUNCION QUE RETORNE UN ARRAY DE ESTUDIANTES DE CADA GENERACION

// var arrayOfActiveStudentsperGeneration (arrayOfTheHeadquarters){
//     for(var students)
// }
