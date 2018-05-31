console.log(Object.keys(data));


//ACCEDIENDO  A LAS SEDES
var arequipa = data.AQP;
var cdmx = data.CDMX;
var lima = data.LIM;
var santiago = data.SCL;
//console.log(arequipa);

//ACCEDIENDO A LAS GENERACIONES
var aqpGenerations = Object.keys(arequipa);
var cdmxGenerations = Object.keys(cdmx);
var limaGenerations = Object.keys(lima);
var stgoDeChileGenerations = Object.keys(santiago);
console.log(aqpGenerations);

var aqpGeneration2016 = arequipa["2016-2"];
var aqpGeneration2017 = arequipa["2017-1"];

console.log(arequipa["2016-2"]);

//Obteniendo el total de estudiantes presentes por sede.
//AREQUIPA

var totalStudentsPerHeadquarters = function(aqpGenerations){
  var sum = 0;
  for(var i = 0; i < aqpGenerations.length; i++){
      var students = aqpGenerations[i].students.length;
      sum = students;
      //var totalOfStudents = students+sum;
      //sum++;
  }
  sum++;
};
