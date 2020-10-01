
function llenartabla(){
    var tbdoy = document.querySelector('#tablafallecido tbody');
    tbdoy.innerHTML= ' ';

    var Nombres = JSON.parse (localStorage.getItem('Fnombres')),
        Apellidos = JSON.parse (localStorage.getItem('Fapellido')),
        Tipo = JSON.parse (localStorage.getItem('Ftipo')),
        Identificacion = JSON.parse (localStorage.getItem('Fidentificacion')),
        Proceso = JSON.parse (localStorage.getItem('Fproceso')), 
        Precios = JSON.parse (localStorage.getItem('Fprecio')),
        Jardin = JSON.parse (localStorage.getItem('Fjardin')),
        Nicho = JSON.parse (localStorage.getItem('Fnicho'));
        var cant = Nombres.length;

    for (var i = 0; i < cant ; i++) {

        var filas = document.createElement('tr');

        var celdasnombre = document.createElement('td'),
            celdasapellido = document.createElement('td'),
            celdastipoD = document.createElement('td'),
            celdasidentificacion = document.createElement('td'),
            celdasproceso = document.createElement('td'),
            celdasprecio= document.createElement('td'),
            celdasjardin = document.createElement('td'),
            celdasnicho = document.createElement('td');

        var nodotextonombre = document.createTextNode(Nombres[i]),
            nodotextoapellido = document.createTextNode(Apellidos[i]),
            nodotextotipo = document.createTextNode(Tipo[i]),
            nodotextoiden = document.createTextNode(Identificacion[i]),
            nodotextoproceso = document.createTextNode(Proceso[i]),
            nodotextoprecio = document.createTextNode(Precios[i]),
            nodotextojardin = document.createTextNode(Jardin[i]),
            nodotextonicho = document.createTextNode(Nicho[i]);

            celdasnombre.appendChild(nodotextonombre);
            celdasapellido.appendChild(nodotextoapellido);
            celdastipoD.appendChild(nodotextotipo);
            celdasidentificacion.appendChild(nodotextoiden);
            celdasproceso.appendChild(nodotextoproceso);
            celdasprecio.appendChild(nodotextoprecio);
            celdasjardin.appendChild(nodotextojardin);
            celdasnicho.appendChild(nodotextonicho);

            filas.appendChild(celdasnombre);
            filas.appendChild(celdasapellido);
            filas.appendChild(celdastipoD);
            filas.appendChild(celdasidentificacion);
            filas.appendChild(celdasproceso);
            filas.appendChild(celdasprecio);
            filas.appendChild(celdasjardin);
            filas.appendChild(celdasnicho);
            
    }
}