
var 
cNombres = [],
cApellidos = [],
cTipo = [],
cIdentificacion = [],
cProceso = [],
cPrecios = [],
cJardin = []; 
cNicho = []; 

if (localStorage.getItem('Fnombres') != null) {
    var 
    cNombres = JSON.parse (localStorage.getItem('Fnombres')),
    cApellidos = JSON.parse (localStorage.getItem('Fapellido')),
    cTipo = JSON.parse (localStorage.getItem('Ftipo')),
    cIdentificacion = JSON.parse (localStorage.getItem('Fidentificacion')),
    cProceso = JSON.parse (localStorage.getItem('Fproceso')), 
    cPrecios = JSON.parse (localStorage.getItem('Fprecio')),
    cJardin = JSON.parse (localStorage.getItem('Fjardin')),
    cNicho = JSON.parse (localStorage.getItem('Fnicho'));
}


var elementoBotonRegistrar = document.querySelector('#guardar');

elementoBotonRegistrar.addEventListener('click', registrarfallecido);

function registrarfallecido() {

var 
    nNombres = document.querySelector('#nombre').value,
    nApellidos = document.querySelector('#apellido').value,
    nTipo = document.querySelector('#tipoD').value,
    nIdentificacion = document.querySelector('#identidad').value,
    nCiclo = document.querySelector('#Ciclo').value,
    nPrecio = document.querySelector('#programas').value,
    nJardin = document.querySelector('#jardin').value,
    nNicho = document.querySelector('#nicho').value;

    
    cNombres.push(nNombres);
    cApellidos.push(nApellidos);
    cTipo.push(nTipo); 
    cIdentificacion.push(nIdentificacion);
    cProceso.push(nCiclo);
    cPrecios.push(nPrecio);
    cJardin.push(nJardin);
    cNicho.push(nNicho);
    guardar(cNombres,cApellidos,cTipo,cIdentificacion,cProceso,cPrecios,cJardin,cNicho); 
    llenartabla();

}

function guardar (pNombres,pApellidos,pTipo,pIdentificacion,pProceso,pPrecio,pJardin,pNicho){

localStorage.setItem('Fnombres', JSON.stringify(pNombres));
localStorage.setItem('Fapellido', JSON.stringify(pApellidos));
localStorage.setItem('Ftipo', JSON.stringify(pTipo));
localStorage.setItem('Fidentificacion', JSON.stringify(pIdentificacion));
localStorage.setItem('Fproceso', JSON.stringify(pProceso));
localStorage.setItem('Fprecio', JSON.stringify(pPrecio));
localStorage.setItem('Fjardin', JSON.stringify(pJardin));
localStorage.setItem('Fnicho', JSON.stringify(pNicho));

}