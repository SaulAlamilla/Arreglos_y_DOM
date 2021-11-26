let alumno = [];
let calificaciones = [];

function materia(){
    calificaciones.push(document.getElementById("register").value);
    document.getElementById("temporal").innerHTML = "Registro sin guardar: " + calificaciones;
    document.getElementById("register").value = "";
}
function guardar(){
    document.getElementById("temporal").innerHTML = "Registro sin guardar: ";
    let temporal = [];
    for (let i=0; i<calificaciones.length; i++){
        temporal.push(calificaciones[i]);
    }
    alumno.push(temporal);
    calificaciones.length = 0;

    //IMPRIMIR LOS VALORES EN LA PANTALLA
    let datos = document.getElementById("datos");
    let cali = document.createElement("div")
    cali.innerHTML = "Alumno" +alumno.length + ": "+alumno[alumno.length-1];
    datos.appendChild(cali);
}
function resultados(){
    let aprobados=0;
    let reprobados=0;
    let suma_aprobados = 0;
    let suma_reprobados = 0;

    //variables para la cantidad de materias, aprobadas y reprobadas
    let total_aprobadas = 0;
    let total_reprobadas = 0;

    for (let i=0; i<alumno.length; i++){
        let promedioIndividual=0;
        let total_materias = 0;

        for (let j=0; j<alumno[i].length; j++){
            promedioIndividual = promedioIndividual + Number(alumno[i][j]);
        }
        total_materias = total_materias + Number(alumno[i].length);

        promedioIndividual = promedioIndividual/Number(alumno[i].length);
        if (promedioIndividual >= 70){
            aprobados++;
            suma_aprobados = suma_aprobados + (promedioIndividual*Number(alumno[i].length));
            total_aprobadas = total_aprobadas + total_materias;
        }else{
            reprobados++;
            suma_reprobados = suma_reprobados + (promedioIndividual*Number(alumno[i].length));
            total_reprobadas = total_reprobadas + total_materias;
        }

    }
    document.getElementById("resultados").innerText +=
        "\n-------------------RESULTADOS-----------------" +
        "\nAlumnos aprobados: " + aprobados +
        "\nPorcentaje de aprobacion: " + aprobados*100/Number(alumno.length)+"%"+
        "\nAlumnos reprobados: " + reprobados +
        "\nPorcentaje de reprobacion: " + reprobados*100/Number(alumno.length)+"%"+
        "\nPromedio grupal: " + (suma_aprobados + suma_reprobados) / (total_aprobadas + total_reprobadas) +
        "\nPromedio de los aprobados: " + suma_aprobados / total_aprobadas +
        "\nPromedio de los reprobados: " + suma_reprobados / total_reprobadas+"\n";
}
