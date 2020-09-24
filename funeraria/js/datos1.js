var registrosformulario1 = [{}];

window.onload = cargarEventos;
function cargarEventos(){
    document.getElementById("guardar").addEventListener("submit", agregar1 ,false);
}

function agregar1() {
   
    var tid = document.getElementById("tipo").value;
    var nid = document.getElementById("ide").value;  
    var nom = document.getElementById("nombres").value;
    var correo = document.getElementById("email").value;
    var tele = document.getElementById("telefono").value;
    var tipo = document.getElementById("tipo2").value;
    var men = document.getElementById("mensaje").value;

    var  nuevoregistro1 = {
        
        tipoid:tid,
        numid:nid,
        nombre:nom,
        email:correo,
        telefono:tele,
        tipos:tipo,
        mensaje:men
     
     };
    
     console.log(registrosformulario1);
        registrosformulario1.push(nuevoregistro1);
        localStorage.setItem('consulta', JSON.stringify(registrosformulario1));
        var guardado = localStorage.getItem('consulta');
        console.log('objetoObtenido: ', JSON.parse(guardado));
        

        
        
        }


