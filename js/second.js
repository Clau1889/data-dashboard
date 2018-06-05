/********ENCONTRANDO SEDE ********/
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

/******COLOCANDO NOMBRE SEDE SELECCIONADA***/
if (getParameterByName('sede') === 'CDMX') {
    var getNameLocation = document.getElementById('name-location').innerHTML = 'CDMX, México';
} else if (getParameterByName('sede') === 'AQP') {
    var getNameLocation = document.getElementById('name-location').innerHTML = 'Arequipa, Perú';
} else if (getParameterByName('sede') === 'LIM') {
    var getNameLocation = document.getElementById('name-location').innerHTML = 'Lima, Perú ';
} else if (getParameterByName('sede') === 'SCL') {
    var getNameLocation = document.getElementById('name-location').innerHTML = 'Santiago de Chile, Chile';
};


/******** ENCONTRANDO GENERACIONES**********/
//OBTENER TOTAL DE GENERACIONES
var totalGeneration = Object.keys(arraySede);
console.log(totalGeneration);

//CREAR LOS OPTIONS(generaciones encontradas por sede)
var menuGeneration = document.getElementById('menu-generation');
for (var i = 0; i < totalGeneration.length; i++) {
    var eachGeneration = totalGeneration[i];

    //CREAR ELEMENTOS DE SELECTION
    var option = document.createElement('option');
    var textOption = document.createTextNode(eachGeneration);

    //CREAR ATRIBUTOS A ELEMENTOS-- al id y value se les va asignando el valor de I para poderlos manipular al seleccionar
    option.setAttribute('id', i);
    option.setAttribute('class', 'option');
    option.setAttribute('value', i);

    //INDICAR POSICION DE HERENCIA
    option.appendChild(textOption);
    menuGeneration.appendChild(option);
};


/***REQUERIMIENTO 1: FUNCIÓN QUE ARROJA EL TOTAL DE ESTUDIANTES POR SEDE*************/
var totalStudentsPerHeadQuarters = function (headQuarters) {
    var generationsOfHeadquarters = Object.keys(headQuarters);
    var sum = 0;
    for (var i = 0; i < generationsOfHeadquarters.length; i++) {
        var students = headQuarters[generationsOfHeadquarters[i]].students;
        //console.log(students);
        var totalStudentsperGeneration = Object.keys(students).length;
        //console.log(totalStudentsperGeneration);


        sum += totalStudentsperGeneration;


    }
    //CREANDO ELEMENTOS PARA PLASMAR EN HTML TOTAL DE ESTUDIANTES POR GENERACION
    var containStudents = document.getElementById('contain-total-sede');
    var totalStudents = document.getElementById('students-general');
    var textTotalStudents = document.createElement('p');
    var textTotal = document.createTextNode(sum);

    textTotalStudents.setAttribute('id', 'studentsPerLocation');
    textTotalStudents.setAttribute('class', 'studentsPerSede');

    textTotalStudents.appendChild(textTotal);
    totalStudents.appendChild(textTotalStudents);
    containStudents.appendChild(totalStudents);

    return sum;

};

console.log(totalStudentsPerHeadQuarters(arraySede));


/*******************TRABAJANDO CON SEDES********************************************/

//FUNCION QUE RETORNA UN ARRAY2D CON LAS ESTUDIANTES POR GENERACION DE CADA SEDE
var arrayOfStudentsPerHeadquarters = function (headquarters) {
    var generationsOfHeadquarters = Object.keys(headquarters);
    //  generationsOfHeadquarters = ["2017-1", "2017-2"]
    var studentsperGeneration = [];
    for (var i in generationsOfHeadquarters) {
        var students = headquarters[generationsOfHeadquarters[i]].students;
        studentsperGeneration.push(students);
    }

    return studentsperGeneration;
};

console.log(arrayOfStudentsPerHeadquarters(arraySede));


/************FUNCIÓN QUE RETORNA UN ARRAY CON LAS ESTUDIANTES ACTIVAS DE CADA SEDE**********************/
var arrayOfActiveStudentsPerHeadquarters = function (headquarters) {
    var generationsOfHeadquarters = Object.keys(headquarters);
    //  generationsOfHeadquarters = ["2017-1", "2017-2"]
    var studentsperGeneration = [];
    var activeStudents = [];
    var inactiveStudents = [];
    for (var i in generationsOfHeadquarters) {
        var students = headquarters[generationsOfHeadquarters[i]].students;
        students.forEach(function (obj, index) {
            var statusOfTheStudent = obj.active;
            if (statusOfTheStudent == true) {
                activeStudents.push(obj);

            }
        });
    }
    var containStudents = document.getElementById('contain-total-sede');
    var totalActiveStudents = document.getElementById('students-actives');
    var textTotalActiveStudents = document.createElement('p');
    var textTotalActive = document.createTextNode(activeStudents.length);

    textTotalActiveStudents.setAttribute('id', 'studentsActivePerLocation');
    textTotalActiveStudents.setAttribute('class', 'studentsPerSede');

    textTotalActiveStudents.appendChild(textTotalActive);
    totalActiveStudents.appendChild(textTotalActiveStudents);
    containStudents.appendChild(totalActiveStudents);

    return activeStudents;
};

console.log(arrayOfActiveStudentsPerHeadquarters(arraySede));


/************FUNCIÓN QUE RETORNA UN ARRAY CON LAS ESTUDIANTES INACTIVAS DE CADA SEDE**********************/
var arrayOfActiveStudentsPerHeadquarters = function (headquarters) {
    var generationsOfHeadquarters = Object.keys(headquarters);
    //  generationsOfHeadquarters = ["2017-1", "2017-2"]
    var studentsperGeneration = [];
    var activeStudents = [];
    var inactiveStudents = [];
    for (var i in generationsOfHeadquarters) {
        var students = headquarters[generationsOfHeadquarters[i]].students;
        students.forEach(function (obj, index) {
            var statusOfTheStudent = obj.active;
            if (statusOfTheStudent === false) {
                inactiveStudents.push(obj);
            }
        });
    }
    var containStudents = document.getElementById('contain-total-sede');
    var totalInactiveStudents = document.getElementById('students-inactives');
    var textTotalInactiveStudents = document.createElement('p');
    var textTotalInactive = document.createTextNode(inactiveStudents.length);

    textTotalInactiveStudents.setAttribute('id', 'studentsInactivePerLocation');
    textTotalInactiveStudents.setAttribute('class', 'studentsPerSede');

    textTotalInactiveStudents.appendChild(textTotalInactive);
    totalInactiveStudents.appendChild(textTotalInactiveStudents);
    containStudents.appendChild(totalInactiveStudents);

    return inactiveStudents;
};

console.log(arrayOfActiveStudentsPerHeadquarters(arraySede));

/************FUNCIÓN QUE RETORNA UN ARRAY2D CON LAS ESTUDIANTES ACTIVAS E INACTIVAS POR SEDE**********************/
var statusOfTheStudentsPerHeadquarters = function (headquarters) {
    var generationsOfHeadquarters = Object.keys(headquarters);
    //  generationsOfHeadquarters = ["2017-1", "2017-2"]
    var studentsperHeadquarters = [];
    var activeStudents = [];
    var inactiveStudents = [];
    for (var i in generationsOfHeadquarters) {
        var students = headquarters[generationsOfHeadquarters[i]].students;
        students.forEach(function (obj, index) {
            var statusOfTheStudent = obj.active;
            console.log(statusOfTheStudent);

            if (statusOfTheStudent == true) {
                activeStudents.push(obj);
            } else {
                inactiveStudents.push(obj);
            }
        });

    }
    studentsperHeadquarters.push(activeStudents, inactiveStudents);
    activeStudents.unshift();
    inactiveStudents.unshift();

    return studentsperHeadquarters;
};

console.log(statusOfTheStudentsPerHeadquarters(arraySede));
var containStudents = document.getElementById('contain-total-sede');

/******REQUERIMIENTO 2: SE CREA FUNCION GENERAL DEPENDIENDO LA GENERACION SELECCIONADA *********/
function selectGeneration(value) {
    var list= document.getElementById('contain-menu').style.display= "block";

    var getGeneration = document.getElementById(value).textContent;
    console.log(getGeneration);

    //ENTRAR A LAS LLAVES DE LAS GENERACION SELECCIONADA
    var generations = Object.keys(arraySede);

    // //INICIALIZANDO CONTADORES PARA ESTUDIATNES ACTIVAS E INACTIVAS
    var active = 0;
    var inactive = 0;

    // GUARDANDO  ESTUDIANTES EN ARRAY SEGUN SU STATUS
    var studentsperHeadquarters = [];
    var activeStudents = [];
    var inactiveStudents = [];

    // //ENTRAR A CADA GENERACION POR SEDE
    for (var i = 0; i < generations.length; i++) {
        if (generations[i] == getGeneration) {
            var students = arraySede[generations[i]].students;
            var ratings = arraySede[generations[i]].ratings;
            console.log(ratings);
            console.log(students);


            //ENTRAR A LAS ESTUDIANTES POR GENERACION
            for (var j = 0; j < students.length; j++) {
                var studentsStatus = students[j].active;

                //SI LA ESTUDIANTE ESTA ACTIVA O INACTIVA
                if (studentsStatus == true) {
                    active = active + 1;
                    activeStudents.push(students[j]);


                } else if (studentsStatus == false) {
                    inactive = inactive + 1;
                    inactiveStudents.push(students[j]);
                };
            };//cierra for en j


            /******REQUERIMIENTO 3: CANTIDAD Y PORCENTAJE DE ESTUDIANTES EXITOSAS POR GENERACION *********/

            for (element of activeStudents) {
                console.log(element);
                var sprints = element.sprints;
                console.log(sprints);


            var sumScoreOfAllSprints = 0;
            for( obj of sprints){
                var score = obj.score;
                console.log(score);
                var tech = score.tech;
                console.log(tech);
                var hse = score.hse;
                console.log(hse);
                var scorePerSprint = tech + hse;
                sumScoreOfAllSprints += scorePerSprint;
                console.log(sumScoreOfAllSprints);
                var arrOfSuccessfulStudentsPerGeneration = [];
                if(sumScoreOfAllSprints > 8400){
                    arrOfSuccessfulStudentsPerGeneration.push(element);
                    console.log(arrOfSuccessfulStudentsPerGeneration);
                }
            }

            };

            console.log(active);
            console.log(inactive);
            console.log(activeStudents);
            console.log(inactiveStudents);

            /************************TRABAJANDO CON RATINGS*************************/
            /******REQUERIMIENTO 4: OBTENIENDO EL % DE ESTUDIANTES SATISFECHA POR GENERACION *********/

            //Obteniendo la suma de todos los porcentajes de los sprints por generación
            var sum = 0;
            for (element of ratings) {
                console.log(element);
                var students = element.student;
                console.log(students);
                var cumple = students["cumple"];
                console.log(cumple);
                var supera = students.supera;
                console.log(supera);
                var sumCumpleSupera = cumple + supera;
                sum += sumCumpleSupera;
                console.log(sum);
            };

            //OBTENIENDO EL PORCENTAJE TOTAL DE ESTUDIANTES SATISFECHAS POR GENERACIONES
            var percentageOfStudentsSatisfiedPerGeneration = sum / ratings.length + "%";
            console.log(percentageOfStudentsSatisfiedPerGeneration);



            /******REQUERIMIENTO 5: PUNTUACIÓN PROMEDIO DE L@S PROFESORES POR GENERACION*********/

            var sumOfTheAverage = 0;
            for(element of ratings){
                var averageOfTeachersPerSprint = element.teacher;
                sumOfTheAverage += averageOfTeachersPerSprint;
            };

            //OBTENIENDO EL PROMEDIO DE PROFESORES POR GENERACION
            var averageOfTeachersPerGeneration = sumOfTheAverage/ratings.length;
            console.log(averageOfTeachersPerGeneration.toFixed(2));


            /******REQUERIMIENTO 6: PUNTUACIÓN PROMEDIO DE L@S JEDIE MASTER POR GENERACION*********/

            var sumOfTheAverage2 = 0;
            for(element of ratings){
                var averageOfJediPerSprint = element.jedi;
                sumOfTheAverage2 += averageOfJediPerSprint;
            };

            //OBTENIENDO EL PROMEDIO DE JEDIE POR GENERACION
            var averageOfJediPerGeneration = sumOfTheAverage2/ratings.length;
            console.log(averageOfJediPerGeneration.toFixed(2));

        };//cierra if
    };//cierra el for en i

    return pruebaPintar(active, activeStudents, inactive, inactiveStudents, percentageOfStudentsSatisfiedPerGeneration, averageOfTeachersPerGeneration, averageOfJediPerGeneration );
};

// console.log(selectSede(value));
function pruebaPintar (active, activeStudents, inactive, inactiveStudents, percentageOfStudentsSatisfiedPerGeneration, averageOfTeachersPerGeneration, averageOfJediPerGeneration ){
  console.log("Pintando HTML");
  console.log(active);
  console.log(inactive);
  console.log(activeStudents);
  console.log(inactiveStudents);
  console.log(percentageOfStudentsSatisfiedPerGeneration);
  console.log(averageOfTeachersPerGeneration.toFixed(2));
  console.log(averageOfJediPerGeneration.toFixed(2));
};
