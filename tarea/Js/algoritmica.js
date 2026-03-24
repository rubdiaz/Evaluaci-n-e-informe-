// --- PROBLEMA 1 ---

/*

function problema1(sueldo, v1, v2, v3) {
    
    let totalVentas = v1 + v2 + v3;
    
    let comision = totalVentas * 0.10;
    
    let totalMes = sueldo + comision;

    
    console.log("--- RESULTADO ---");
    
    console.log("Sueldo Base: " + sueldo);
    
    console.log("Comisiones Ganadas: " + comision.toFixed(2));
    
    console.log("Total a Recibir: " + totalMes.toFixed(2));
}

let OpcionElegida = 1; 

switch (OpcionElegida) {
    
    case 1:
        
        problema1(1200, 250, 300, 150);
        
    break;

    case 2:
        
    console.log("Ejecutando el Problema 2...");
        
        break;

    default:
    
        console.log("Opción no válida.");
        
    break;
}

*/

// --- PROBLEMA 2 ---

/*

function problema2(p1, p2, p3, examen, trabajo) {
    
    let promedioParciales = (p1 + p2 + p3) / 3;
    
    let porcentajeParciales = promedioParciales * 0.55;
    
    let porcentajeExamen = examen * 0.30;
    
    let porcentajeTrabajo = trabajo * 0.15;
    
    
    let notaFinal = porcentajeParciales + porcentajeExamen + porcentajeTrabajo;

    console.log("--- RESULTADO ---");
    
    console.log("Promedio de Parciales: " + promedioParciales.toFixed(2));
    
    console.log("Puntos por Parciales (55%): " + porcentajeParciales.toFixed(2));
    
    console.log("Puntos por Examen (30%): " + porcentajeExamen.toFixed(2));
    
    console.log("Puntos por Trabajo (15%): " + porcentajeTrabajo.toFixed(2));
    
    console.log("------------------------------");
    
    console.log("CALIFICACIÓN FINAL: " + notaFinal.toFixed(2));
}

let opcionElegida = 2; 

switch (opcionElegida) {
    
    case 1:
        
    problema1(1200, 250, 300, 150);
        
    break;

    case 2:
        
        problema2(15, 18, 14, 16, 20); 
        
    break;

    default:
        
    console.log("Opción no válida.");
        
    break;
}

*/

// --- PROBLEMA 3 ---

/*

function problema3(hh, mm, ss, t) {
    
    let totalSegundosInicial = (hh * 3600) + (mm * 60) + ss;
    
    
    let totalSegundosFinal = totalSegundosInicial + t;
    
    let horaLlegada = Math.floor(totalSegundosFinal / 3600) % 24;
    
    let minutosLlegada = Math.floor((totalSegundosFinal % 3600) / 60);
    
    let segundosLlegada = totalSegundosFinal % 60;

    console.log("--- RESULTADO ---");
    
    console.log("Hora de Salida: " + hh + ":" + mm + ":" + ss);
    
    console.log("Tiempo de viaje: " + t + " segundos");
    
    console.log("------------------------------");
    
    console.log("HORA DE LLEGADA: " + horaLlegada + ":" + minutosLlegada + ":" + segundosLlegada);
}

let OpcionElegida = 3; 

switch (OpcionElegida) {
    
    case 1:
        
    problema1(1200, 250, 300, 150);
    
        break;
    
    case 2:
        
    problema2(15, 18, 14, 16, 20); 
        
    break;
    
    case 3:
        
        problema3(10, 30, 15, 5400);
        
    break;
    
    default:
        
    console.log("Opción no válida.");
        
    break;
}

*/

// --- PROBLEMA 4 ---

/*

function problema4(correctas, incorrectas, blancas) {
    
    let puntosCorrectas = correctas * 5;
    
    let puntosIncorrectas = incorrectas * -1;
    
    let puntosBlancas = blancas * 0;
    
    let notaDefinitiva = puntosCorrectas + puntosIncorrectas + puntosBlancas;

    console.log("--- RESULTADO ---");
    
    console.log("Preguntas Correctas: " + correctas + " (+ " + puntosCorrectas + " pts)");
    
    console.log("Preguntas Incorrectas: " + incorrectas + " (" + puntosIncorrectas + " pts)");
    
    console.log("Preguntas en Blanco: " + blancas + " (0 pts)");
    
    console.log("------------------------------");
    
    console.log("NOTA DEFINITIVA: " + notaDefinitiva + " puntos");
}

let opcionElegida = 4; 

switch (opcionElegida) {
    
    case 1: problema1(1200, 250, 300, 150); break;
    
    case 2: problema2(15, 18, 14, 16, 20); break;
    
    case 3: problema3(10, 30, 15, 5400); break;
    
    case 4: 
        
        problema4(11, 7, 2); 
        
    break;
    
    default:
        
    console.log("Opción no válida.");
        
    break;
}

*/

// --- PROBLEMA 5 ---

/*

function problema5(horasDia, pagoHora) {
    
    let sueldoDiario = horasDia * pagoHora;
    
    let sueldoMensual = sueldoDiario * 30;

    console.log("--- RESULTADO ---");
    
    console.log("Horas trabajadas al día: " + horasDia);
    
    console.log("Pago por hora: $" + pagoHora.toFixed(2));
    
    console.log("Sueldo por un día: $" + sueldoDiario.toFixed(2));
    
    console.log("------------------------------");
    
    console.log("GANANCIA TOTAL EN 30 DÍAS: $" + sueldoMensual.toFixed(2));
}


let OpcionElegida = 5; 

switch (OpcionElegida) {
    
    case 1: problema1(1200, 250, 300, 150); break;
    
    case 2: problema2(15, 18, 14, 16, 20); break;
    
    case 3: problema3(10, 30, 15, 5400); break;
    
    case 4: problema4(11, 7, 2); break;
    
    case 5:
    
        problema5(8, 10.50);
    
        break;
    
    default:
    
        console.log("Opción no válida.");
    
        break;
}

*/

// --- PROBLEMA 6 ---

/*

function problema6(km) {
    
    let hm = km * 10;
    
    let dam = km * 100;
    
    let m = km * 1000;
    
    let dm = km * 10000;
    
    let cm = km * 100000;
    
    let mm = km * 1000000;

    console.log("--- RESULTADO ---");
    
    console.log("Kilómetros: " + km);
    
    console.log("Hectómetros: " + hm);
    
    console.log("Decámetros: " + dam);
    
    console.log("Metros: " + m);
    
    console.log("Decímetros: " + dm);
    
    console.log("Centímetros: " + cm);
    
    console.log("Milímetros: " + mm);
}

let OpcionElegida = 6; 

switch (OpcionElegida) {
    
    case 1: problema1(1200, 250, 300, 150); break;
    
    case 2: problema2(15, 18, 14, 16, 20); break;
    
    case 3: problema3(10, 30, 15, 5400); break;
    
    case 4: problema4(11, 7, 2); break;
    
    case 5: problema5(8, 10.50); break;
    
    case 6:
    
        problema6(1);
    
        break;
    
    default:
    
        console.log("Opción no válida.");
    
        break;
}

*/

// --- PROBLEMA 7 ---

/*

function problema7(r, h) {
    
    let pi = 3.14;
    
    let volumen = pi * (r * r) * h;

    console.log("--- RESULTADO ---");
    
    console.log("Radio: " + r);
    
    console.log("Altura: " + h);
    
    console.log("------------------------------");
    
    console.log("VOLUMEN DEL CILINDRO: " + volumen.toFixed(2));
}


let OpcionElegida = 7; 


switch (OpcionElegida) {

    case 1: 
    
        problema1(1200, 250, 300, 150); 
    
        break;

    case 2: 
    
        problema2(15, 18, 14, 16, 20); 
    
        break;

    case 3: 
    
        problema3(10, 30, 15, 5400); 
    
        break;

    case 4: 
    
        problema4(11, 7, 2); 
    
        break;

    case 5: 
        
    problema5(8, 10.50); 
    
        break;

    case 6: 
        
    problema6(1); 
        
    break;

    case 7:
        
    problema7(5, 10);
    
        break;

    default:
    
        console.log("Opción no válida.");
    
        break;
}

*/

// --- PROBLEMA 8 ---

/*

function problema8(hombres, mujeres) {

    let totalAlumnos = hombres + mujeres;
    
    let porcentajeHombres = (hombres / totalAlumnos) * 100;
    
    let porcentajeMujeres = (mujeres / totalAlumnos) * 100;

    console.log("--- RESULTADO ---");
    
    console.log("Cantidad de hombres: " + hombres);
    
    console.log("Cantidad de mujeres: " + mujeres);
    
    console.log("Total de alumnos: " + totalAlumnos);
    
    console.log("------------------------------");
    
    console.log("PORCENTAJE DE HOMBRES: " + porcentajeHombres.toFixed(2) + "%");
    
    console.log("PORCENTAJE DE MUJERES: " + porcentajeMujeres.toFixed(2) + "%");
}


let OpcionElegida = 8; 

switch (OpcionElegida) {

    case 1: 
        
    problema1(1200, 250, 300, 150); 
    
        break;

    case 2: 
    
        problema2(15, 18, 14, 16, 20); 
    
        break;

    case 3: 
    
        problema3(10, 30, 15, 5400); 
    
        break;

    case 4: 
    
        problema4(11, 7, 2); 
    
        break;

    case 5: 
    
        problema5(8, 10.50); 
    
        break;

    case 6: 
    
        problema6(1); 
    
        break;

    case 7:
    
        problema7(5, 10);
    
        break;

    case 8:
        
        problema8(15, 10);
        
    break;

    default:
    
        console.log("Opción no válida.");
    
        break;
}

*/

// --- PROBLEMA 9 ---

/*

function problema9(base, altura) {

    let area = base * altura;
    
    let perimetro = 2 * (base + altura);

    console.log("--- RESULTADO ---");
    
    console.log("Base: " + base);
    
    console.log("Altura: " + altura);
    
    console.log("------------------------------");
    
    console.log("ÁREA DEL RECTÁNGULO: " + area);
    
    console.log("PERÍMETRO DEL RECTÁNGULO: " + perimetro);
}


let OpcionElegida = 9; 


switch (OpcionElegida) {

    case 1: 
        
    problema1(1200, 250, 300, 150); 
    
        break;

    case 2: 
    
        problema2(15, 18, 14, 16, 20); 
    
        break;

    case 3: 
    
        problema3(10, 30, 15, 5400); 
    
        break;

    case 4: 
    
        problema4(11, 7, 2); 
    
        break;

    case 5: 
    
        problema5(8, 10.50); 
    
        break;

    case 6: 
    
        problema6(1); 
    
        break;

    case 7:
    
        problema7(5, 10);
    
        break;

    case 8:
    
        problema8(15, 10);
    
        break;

    case 9:
        
        problema9(20, 10);
        
    break;

    default:
    
        console.log("Opción no válida.");
    
        break;
}

*/

// --- PROBLEMA 10 ---

/*

function problema10(p1, c1, p2, c2, p3, c3) {

    let subtotal1 = p1 * c1;
    
    let subtotal2 = p2 * c2;
    
    let subtotal3 = p3 * c3;
    
    let pagoTotal = subtotal1 + subtotal2 + subtotal3;

    console.log("--- RESULTADO ---");
    
    console.log("Total Azúcar: " + subtotal1);
    
    console.log("Total Café: " + subtotal2);
    
    console.log("Total Aceite: " + subtotal3);
    
    console.log("------------------------------");
    
    console.log("PAGO TOTAL DE LA COMPRA: " + pagoTotal);
}


let OpcionElegida = 10; 


switch (OpcionElegida) {

    case 1: 
    
        problema1(1200, 250, 300, 150); 
    
        break;

    case 2: 
    
        problema2(15, 18, 14, 16, 20); 
    
        break;

    case 3: 
    
        problema3(10, 30, 15, 5400); 
    
        break;

    case 4: 
    
        problema4(11, 7, 2); 
    
        break;

    case 5: 
    
        problema5(8, 10.50); 
    
        break;

    case 6: 
        
    problema6(1); 
    
        break;

    case 7:
    
        problema7(5, 10);
    
        break;

    case 8:
    
        problema8(15, 10);
    
        break;

    case 9:
    
        problema9(20, 10);
    
        break;

    case 10:
        
        problema10(1000, 4, 3200, 2, 2200, 7);
        
    break;

    default:
    
        console.log("Opción no válida.");
    
        break;
}

*/

// --- PROBLEMA 11 ---

/*

function problema11(a, b, c, x) {

    let termino1 = a * Math.pow(x, 5);
    
    let termino2 = b * Math.pow(x, 3);
    
    let termino3 = c * Math.pow(x, 2);
    
    let resultadoFinal = termino1 + termino2 + termino3 + 9;

    console.log("--- RESULTADO ---");
    
    console.log("Valores: a=" + a + ", b=" + b + ", c=" + c);
    
    console.log("Evaluando para x = " + x);
    
    console.log("------------------------------");
    
    console.log("RESULTADO DEL POLINOMIO: " + resultadoFinal);
}


let OpcionElegida = 11; 

switch (OpcionElegida) {

    case 1: problema1(1200, 250, 300, 150); break;

    case 2: problema2(15, 18, 14, 16, 20); break;

    case 3: problema3(10, 30, 15, 5400); break;

    case 4: problema4(11, 7, 2); break;

    case 5: problema5(8, 10.50); break;

    case 6: problema6(1); break;

    case 7: problema7(5, 10); break;

    case 8: problema8(15, 10); break;

    case 9: problema9(20, 10); break;

    case 10: problema10(1000, 4, 3200, 2, 2200, 7); break;

    case 11:
        
        problema11(7, 8, -9, 10);
    
        break;

    default:
        
    console.log("Opción no válida.");
        
    break;
}

*/