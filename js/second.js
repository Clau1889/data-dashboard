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

var titleSede
console.log(arraySede);


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







///////////////////////////////////////////////////////////////////////////////
var propertiesOfData = Object.keys(data);
// console.log(propertiesOfData);


//CREANDO FUNCION QUE CONVIERTA CUALQUIER OBJETO A UN ARRAY
var objectToArray = function(object) {
  var array2d = [];
  var allThePropertiesOfTheObject = Object.keys(object);

  for (var i = 0; i < allThePropertiesOfTheObject.length; i++) {
        array2d.push(allThePropertiesOfTheObject[i], object[allThePropertiesOfTheObject[i]])
  };

  return array2d;
};


//CONVIRTIENDO EL OBJETO DATA A ARRAY
var arrayData = objectToArray(data);
// console.log(data);
var dataToArray = objectToArray(arrayData);
// console.log(dataToArray);

//HACIENDO UN NUEVO DATA (segundo alcance: hacer una función que por cada sede encuentre haga este acomodo)
var newData = [];
newData.push(dataToArray[1],dataToArray[3],dataToArray[5],dataToArray[7],dataToArray[9],dataToArray[11], dataToArray[13], dataToArray[15]);
// for(var i = 1; i < dataToArray.length; i+2 ){
//   newData.push(dataToArray[i]);
// };

console.log(newData);


//FUCION QUE CONVIERTE EL VALOR DE LAS PROPIEDADES-GENERACION DE LAS SEDES DEL "newDATA" EN ARRAYS

var turningValuesOfTheGenerationIntoArrays = function (arr) {
  for (var i of arr){
    console.log(typeof i);
    //si i es igual a objeto
      if(i != "string" ){

        for (var item in i){
          console.log(typeof item);

        }
    }
  }
  return i;
}
console.log(turningValuesOfTheGenerationIntoArrays(newData));





//ACCEDIENDO  A LAS SEDES (devuelve un objeto)
var arequipa = data.AQP;
var cdmx = data.CDMX;
var lima = data.LIM;
var santiago = data.SCL;
console.log(arequipa);

//ACCEDIENDO A LAS GENERACIONES (devuelve las keys(strings) en un array)
var aqpGenerations = Object.keys(arequipa);
var cdmxGenerations = Object.keys(cdmx);
var limaGenerations = Object.keys(lima);
var stgoDeChileGenerations = Object.keys(santiago);
console.log(aqpGenerations);

// var aqpGeneration2016 = arequipa["2016-2"];
// var aqpGeneration2017 = arequipa["2017-1"];





//CONVIRTIENDO LOS OBJETOS DE LAS SEDES EN ARRAYS
var arrayArequipa = objectToArray(arequipa);
var arrayCdmx = objectToArray(cdmx);
var arrayLima = objectToArray(lima);
var arraySantiago = objectToArray(santiago);
console.log(arrayArequipa);

console.log(arrayArequipa[1]);
var new2016 = objectToArray(arrayArequipa[1]);
var new2017 = objectToArray(arrayArequipa[3]);
console.log(new2016);



var dataData = [];
dataData.push(arequipa);

arequipa["2016-2"] = new2016;
arequipa["2017-1"] = new2017;
console.log(dataData);


// CREANDO FUNCION QUE RETORNE UN ARRAY DE ESTUDIANTES DE CADA GENERACION

// var arrayOfActiveStudentsperGeneration (arrayOfTheHeadquarters){
//     for(var students)
// }
