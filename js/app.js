
                        /***********************\
                        *         SEDES         *
                        \***********************/

//Accediendo a las sedes
const getLocation= function (dataObj) {
    let dataKeys= Object.keys(data);
    let select= document.getElementById('locations');

    for (i = 0; i < dataKeys.length; i++) {
        //Crear los nombres de las sedes por medio del DOM
        let option= document.createElement('option');
        option.setAttribute("value", dataKeys[i]);
        option.innerHTML = dataKeys[i];
        //console.log(dataKeys[i]);
        select.appendChild(option);
    }
}

                        /***********************\
                        *     GENERACIONES      *
                        \***********************/

//Accediendo a las generación
const getGenerations= function (event){
    event.preventDefault();
    
    let sede= event.target.value;//seleccionando la sede por medio de su value
    let generation= data[sede];//obteniendo las generaciones de c/sede
    //console.log(generation);

    let select= document.getElementById('generations');
    let option= document.getElementById('option-generation');
    let eachGeneration;
    select.innerHTML = "";


    //itera sobre todas las propiedades de la sede para encontrar las generaciones
    for ( eachGeneration in generation) {
        let option= document.createElement('option');
        option.setAttribute("value", eachGeneration);
        option.innerHTML = eachGeneration;
        select.appendChild(option);
    }

}

                        /***********************\
                        *        STUDENTS       *
                        \***********************/

const getStudents= function (event){
    event.preventDefault();
    
    let getSede= document.getElementById('locations').value;
    let selectGeneration= event.target.value;
    let students= data[getSede][selectGeneration].students;
    let totalStudents= students.length;
    let eachStudent;
    let active = 0;
    let inactive = 0;

    let dataStudents= document.getElementById('data-students');
    // let template = '<h3 id="total">Total Students: + '+totalStudents+' </h3>'
    // dataStudents.appendChild(template);

    for (j =0; j < students.length; j ++){
        eachStudent= students[j];

        //Obteniendo los datos requeridos
        let nameStudent= eachStudent.name;
        console.log(nameStudent);
        let photoStudent= eachStudent.photo;
        console.log(photoStudent);
        let status= eachStudent.active;
        //console.log(status);

        //Contando y sacando porcentaje a las estudiantes activas e inactivas
        if(status === false){
            inactive ++;
        } else {
            active ++;
        }
    }

                        /***********************\
                        *    Active-Students    *
                        \***********************/
    let totalActive= active;
    console.log(totalActive);
    let percentageActive= Math.round((totalActive* 100 / totalStudents).toFixed(2));
    console.log(percentageActive);

                        /***********************\
                        *    Inactive-Students    *
                        \***********************/
    let totalInactive= inactive;
    console.log(totalInactive);
    let percentageInactive= Math.round((totalInactive * 100 / totalStudents).toFixed(2))
    console.log(percentageInactive);
}


//Dando click a cada sede para obtener sus generaciones
document.getElementById('locations').addEventListener('change', getGenerations);

//Dando click a cada generación para obtener sus estudiantes
document.getElementById('generations').addEventListener('change', getStudents);

getLocation(data);