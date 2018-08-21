//console.log(data);

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

//Accediendo a las generación
const getGenerations= function (event){
    event.preventDefault();
    
    let sede= event.target.value;//seleccionando la sede por medio de su value
    let generation= data[sede];//obteniendo las generaciones de c/sede
    console.log(generation);

    let select= document.getElementById('generations');
    let eachGeneration;

    //itera sobre todas las propiedades de la sede para encontrar las generaciones
    for ( eachGeneration in generation) {
        let option= document.createElement('option');
        option.setAttribute("value", eachGeneration);
        option.innerHTML = eachGeneration;
        select.appendChild(option);
    }
}

//Dando click a cada sede para obtener sus generaciones
document.getElementById('locations').addEventListener('change', getGenerations);

getLocation(data);