function imprimirTodo(contenido) {
    document.getElementById("lista-resultados").innerHTML = contenido;
}

function iniciarCalculos() {
    let reporte = "";

    // 1. Sueldo
    let s1 = parseFloat(prompt("Ej 1: Sueldo base:")) || 0;
    let v1 = parseFloat(prompt("Venta 1:")) || 0;
    let v2 = parseFloat(prompt("Venta 2:")) || 0;
    let v3 = parseFloat(prompt("Venta 3:")) || 0;
    let com = (v1 + v2 + v3) * 0.10;
    reporte += `<div class="item"><strong>1. Sueldo Total:</strong> <span>$${(s1 + com).toFixed(2)}</span></div>`;

    // 2. Nota Final
    let p1 = parseFloat(prompt("Ej 2: Parcial 1:")) || 0;
    let p2 = parseFloat(prompt("Ej 2: Parcial 2:")) || 0;
    let p3 = parseFloat(prompt("Ej 2: Parcial 3:")) || 0;
    let ex = parseFloat(prompt("Examen Final:")) || 0;
    let tr = parseFloat(prompt("Trabajo Final:")) || 0;
    let nf = (((p1 + p2 + p3) / 3) * 0.55) + (ex * 0.30) + (tr * 0.15);
    reporte += `<div class="item"><strong>2. Nota Final:</strong> <span>${nf.toFixed(2)}</span></div>`;

    // 3. Tiempo de llegada
    let hh = parseInt(prompt("Ej 3: Hora salida:")) || 0;
    let mm = parseInt(prompt("Minutos:")) || 0;
    let ss = parseInt(prompt("Segundos:")) || 0;
    let t = parseInt(prompt("Tiempo viaje (seg):")) || 0;
    let totalS = (hh * 3600) + (mm * 60) + ss + t;
    let hF = Math.floor(totalS / 3600) % 24;
    let mF = Math.floor((totalS % 3600) / 60);
    let sF = totalS % 60;
    reporte += `<div class="item"><strong>3. Llegada:</strong> <span>${hF}:${mF}:${sF}</span></div>`;

    // 4. Conversión Tiempo
    let segs = parseInt(prompt("Ej 4: Segundos a convertir:")) || 0;
    let h4 = Math.floor(segs / 3600);
    let m4 = Math.floor((segs % 3600) / 60);
    let s4 = segs % 60;
    reporte += `<div class="item"><strong>4. Tiempo:</strong> <span>${h4}h ${m4}m ${s4}s</span></div>`;

    // 5. Descuento
    let prec = parseFloat(prompt("Ej 5: Precio original:")) || 0;
    reporte += `<div class="item"><strong>5. Con 15% Desc:</strong> <span>$${(prec * 0.85).toFixed(2)}</span></div>`;

    // 6. Distancia
    let distK = parseFloat(prompt("Ej 6: Kilómetros:")) || 0;
    reporte += `<div class="item"><strong>6. Metros:</strong> <span>${distK * 1000}m</span></div>`;

    // 7. Cilindro
    let rad = parseFloat(prompt("Ej 7: Radio:")) || 0;
    let altC = parseFloat(prompt("Altura:")) || 0;
    let vol = 3.1416 * Math.pow(rad, 2) * altC;
    reporte += `<div class="item"><strong>7. Vol. Cilindro:</strong> <span>${vol.toFixed(2)}</span></div>`;

    // 8. Porcentajes
    let hom = parseInt(prompt("Ej 8: Hombres:")) || 0;
    let muj = parseInt(prompt("Mujeres:")) || 0;
    let total8 = hom + muj;
    let porcH = (total8 > 0) ? (hom / total8) * 100 : 0;
    let porcM = (total8 > 0) ? (muj / total8) * 100 : 0;
    reporte += `<div class="item"><strong>8. Género:</strong> <span>H:${porcH.toFixed(1)}% M:${porcM.toFixed(1)}%</span></div>`;

    // 9. Rectángulo
    let b9 = parseFloat(prompt("Ej 9: Base:")) || 0;
    let a9 = parseFloat(prompt("Altura:")) || 0;
    reporte += `<div class="item"><strong>9. Área:</strong> <span>${(b9 * a9).toFixed(2)}</span></div>`;

    // 10. Compra Fija
    let total10 = (1000 * 4) + (3200 * 2) + (2200 * 7);
    reporte += `<div class="item"><strong>10. Total Compra:</strong> <span>$${total10}</span></div>`;

    // 11. Polinomio
    let res11 = (7 * Math.pow(10, 5)) + (8 * Math.pow(10, 3)) - (9 * Math.pow(10, 2)) + 9;
    reporte += `<div class="item"><strong>11. Polinomio p(10):</strong> <span>${res11}</span></div>`;

    imprimirTodo(reporte);
}
