var registrosformulario = [{}];

window.onload = cargarEventos;
function cargarEventos(){
    document.getElementById("guardar").addEventListener("submit", agregar ,false);
}

function agregar() {
   
      var nom = document.getElementById("nombres").value;
      var ape = document.getElementById("lastname").value;
      var tid = document.getElementById("tipo").value;
      var nid = document.getElementById("ide").value;
      var correo = document.getElementById("email").value;
      var tele = document.getElementById("telefono").value;
      var dire = document.getElementById("direccion").value;

      var nomf = document.getElementById("nombre2").value;
      var apef = document.getElementById("lastname2").value;
      var tidf = document.getElementById("tipo2").value;
      var nidf = document.getElementById("ide2").value;
      var proc = document.getElementById("Ciclo").value;
      var prec = document.getElementById("programas").value; 
     
    var  nuevoregistro = {
        nombre:nom,
        apellido:ape,
        tipoid:tid,
        numid:nid,
        email:correo,
        telefono:tele,
        direccion:dire,
        nombref:nomf,
        apellidof:apef,
        tipoidf:tidf,
        numidf:nidf,
        proceso:proc,
        precios:prec
     };
    
     console.log(registrosformulario);
        registrosformulario.push(nuevoregistro);
        localStorage.setItem('registro', JSON.stringify(registrosformulario));
        var guardado = localStorage.getItem('registro');
        console.log('objetoObtenido: ', JSON.parse(guardado));
        

        
        
        }


