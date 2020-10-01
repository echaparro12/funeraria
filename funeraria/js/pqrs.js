
var cTipo = [],
    cIdentificacion = [],
    cNombres = [],
    cEmail = [],
    cCelular = [],
    cSolicitud = [],
    cMensaje = []; 
 

    if (localStorage.getItem('Tipo') != null) {
        var cTipo = JSON.parse (localStorage.getItem('Tipo')),
        cIdentificacion = JSON.parse (localStorage.getItem('Identificacion')),
        cNombres = JSON.parse (localStorage.getItem('Nombres')),
        cEmail = JSON.parse (localStorage.getItem('Email')),
        cCelular = JSON.parse (localStorage.getItem('Celular')), 
        cSolicitud = JSON.parse (localStorage.getItem('solicitud')),
        cMensaje = JSON.parse (localStorage.getItem('Mensaje'));
 
    }
 
var elementoBotonRegistrar = document.querySelector('#guardarpqrs');
 
elementoBotonRegistrar.addEventListener('click', registrarpaciente);
 
function registrarpaciente() {
 
    var nTipo = document.querySelector('#tipo').value,
        nIdentificacion = document.querySelector('#ide').value,
        nNombres = document.querySelector('#nombres').value,
        nEmail = document.querySelector('#email').value,
        nCelular = document.querySelector('#telefono').value,
        nsolicitud = document.querySelector('#tiposolicitud').value,
        nmensaje = document.querySelector('#mensaje').value;
 
        cTipo.push(nTipo); 
        cIdentificacion.push(nIdentificacion);
        cNombres.push(nNombres);
        cEmail.push(nEmail);
        cCelular.push(nCelular);
        cSolicitud.push(nsolicitud);
        cMensaje.push(nmensaje);
 
        guardar(cTipo,cIdentificacion,cNombres,cEmail,cCelular,cSolicitud,cMensaje); 
     
 
}
 
function guardar (pTipo,pIdentificacion,pNombres,pEmail,pCelular,pSolicitud,pmensaje){
 
    localStorage.setItem('Tipo', JSON.stringify(pTipo));
    localStorage.setItem('Identificacion', JSON.stringify(pIdentificacion));
    localStorage.setItem('Nombres', JSON.stringify(pNombres));
    localStorage.setItem('Email', JSON.stringify(pEmail));
    localStorage.setItem('Celular', JSON.stringify(pCelular));
    localStorage.setItem('solicitud', JSON.stringify(pSolicitud));
    localStorage.setItem('Mensaje', JSON.stringify(pmensaje));
  
  }