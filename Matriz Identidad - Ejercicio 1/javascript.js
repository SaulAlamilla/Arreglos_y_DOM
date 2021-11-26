/*
Alumno: Saul Humberto Alamilla Calixto
No. Control: 18390023

Elabore un programa que presente en pantalla
la matriz identidad de una matriz de N X N.
*/

function generarMatriz(){
    document.getElementById("matriz").innerHTML="<br>";
    let longitud = document.getElementById('dimension').value;
    let arreglo = [];

    for (let i=0; i<longitud; i++){
        let arreglo2 = [];
        for (let j=0; j<longitud; j++){
            if(i==j) {
                arreglo2.push(1);
            }else {
                arreglo2.push(0);
            }
        }
        arreglo.push(arreglo2);
    }

    for (let i=0; i<arreglo.length; i++){
        let $div = document.createElement("div");
        $div.innerHTML = arreglo[i];
        let $contenedor = document.getElementById("matriz");
        $contenedor.appendChild($div);
    }
}