

//console.log(Object.keys(data));

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
console.log(arrayArequipa[1]);




//CREANDO FUNCION QUE RETORNE UN ARRAY DE ESTUDIANTES DE CADA GENERACION
// var studentsPerGeneration = function (arrayOfTheHeadquarters) {
//   var array2dOfStudentsperGeneration = [];
//   for (var i = 1; i < arrayOfTheHeadquarters.length; i+1 ) {
//     var students = arrayOfTheHeadquarters[i].students;
//     array2dOfStudentsperGeneration.push(students);
//   }
//   return array2dOfStudentsperGeneration;
// };

var studentsPerGeneration = function (arrayOfTheHeadquarters) {
    console.log(arrayOfTheHeadquarters);
  // for (var i = 1; i < arrayOfTheHeadquarters.length; i+1 ) {
  //   var students = arrayOfTheHeadquarters[i].students;
  //   var array2dOfStudentsperGeneration = objectToArray(students);
  // }
  // return array2dOfStudentsperGeneration;
};



//ARRAYS DE ESTUDIANTES POR SEDE, SECCIONADO EN GENERACIONES
var studentsArequipa = studentsPerGeneration(arrayArequipa);
// var studentsLima = studentsPerGeneration(arrayLima);
// var studentsCdmx = studentsPerGeneration(arrayCdmx);
// var studentsSantiago = studentsPerGeneration(arraySantiago);
console.log(studentsArequipa);



//CREANDO FUNCIÓN QUE RETORNE EL NÚMERO DE ESTUDIANTES ACTIVAS DE CADA GENERACION


var totalActiveStudentsPerHeadquarters = function(arrayOfTheHeadquarters) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {

    }
}


















//Obteniendo el total de estudiantes presentes por sede.
//AREQUIPA

var totalStudentsPerHeadquarters = function(sede){
  var sum = 0;
  for(var i = 0; i < aqpGenerations.length; i++){
      var students = arequipa[aqpGenerations[i]].students;
      var totalStudentsperGeneration = Object.keys(students).length;
      console.log(totalStudentsperGeneration);

      sum += totalStudentsperGeneration;
  }

  return console.log(sum);
};

console.log(totalStudentsPerHeadquarters(arequipa));




/*var totalStudentsPerHeadquarters = function(generation){
  var sum = 0;
  for(var i = 0; i < aqpGenerations.length; i++){
      var students = aqpGenerations[i].students;

      sum = students;
  }
  sum++;

  return console.log(students);
};*/
