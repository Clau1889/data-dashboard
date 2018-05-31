//console.log(Object.keys(data));

//ACCEDIENDO  A LAS SEDES (devuelve un objeto)
var arequipa = data.AQP;
var cdmx = data.CDMX;
var lima = data.LIM;
var santiago = data.SCL;
console.log("lo que contiene la sede arquipa (data.AQP)", arequipa);

//ACCEDIENDO A LAS GENERACIONES (devuelve las keys(strings) en un array)
var aqpGenerations = Object.keys(arequipa);
var cdmxGenerations = Object.keys(cdmx);
var limaGenerations = Object.keys(lima);
var stgoDeChileGenerations = Object.keys(santiago);
console.log("lo que contiene las generaciones de arequipa (Object.keys(arequipa)",aqpGenerations);

console.log(arequipa[aqpGenerations[0]]);


//CREANDO FUNCION QUE CONVIERTA CUALQUIER OBJETO A UN ARRAY
var objectToArray = function(object) {
  var array2d = [];
  var allThePropertiesOfTheObject = Object.keys(object);

  for (var i = 0; i < allThePropertiesOfTheObject.length; i++) {
        array2d.push(allThePropertiesOfTheObject[i], object[allThePropertiesOfTheObject[i]])
  };

  return array2d;
};


console.log(objectToArray(arequipa));


// //FORMANDO UN ARRAY CON LA INFO DE LAS SEDES para poder recorrerlo
//
// var arequipaArray = [
//                       [aqpGenerations[0], arequipa[aqpGenerations[0]]],
//                       [aqpGenerations[1], arequipa[aqpGenerations[1]]]
//             ];
//
// console.log(arequipaArray);

















//
// //Obteniendo el total de estudiantes presentes por sede.
// //AREQUIPA
//
// var totalStudentsPerHeadquarters = function(sede){
//   var sum = 0;
//   for(var i = 0; i < aqpGenerations.length; i++){
//       var students = arequipa[aqpGenerations[i]].students;
//       var totalStudentsperGeneration = Object.keys(students).length;
//       console.log(totalStudentsperGeneration);
//
//       sum += totalStudentsperGeneration;
//   }
//
//   return console.log(sum);
// };
//
// console.log(totalStudentsPerHeadquarters(arequipa));
//
//
//
//
// /*var totalStudentsPerHeadquarters = function(generation){
//   var sum = 0;
//   for(var i = 0; i < aqpGenerations.length; i++){
//       var students = aqpGenerations[i].students;
//
//       sum = students;
//   }
//   sum++;
//
//   return console.log(students);
// };*/
