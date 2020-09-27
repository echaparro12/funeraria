let registrospqrs = [ {
    tipoid:" ",
    numid: " ",
    nombre: " ",
    email: " ",
    telefono: " ",
    tipos: "",
    mensaje: " "}]
   

window.onload = cargarEventos;
function cargarEventos(){
    document.getElementById("guardarpqrs").addEventListener("submit", agregarpqrs ,false);
}

function agregarpqrs() {
   
    var tid = document.getElementById("tipo").value;
    var nid = document.getElementById("ide").value;  
    //var nom = document.getElementById("nombres").value;
    //var correo = document.getElementById("email").value;
    //var tele = document.getElementById("telefono").value;
    //var tipo = document.getElementById("tipo2").value;
    var men = document.getElementById("mensaje").value;

    let  nuevopqrs = [{
        
        tipoid:tid,
        numid:nid,
       // nombre:nom,
        //email:correo,
        //telefono:tele,
        //tipos:tipo,
        mensaje:men
     
    }];
     
     
        registrospqrs.unshift(nuevopqrs);
        console.log(registrospqrs);

        //localStorage.setItem('consulta', JSON.stringify(registrospqrs));
        //var guardado = localStorage.getItem('consulta');
        //console.log('objetoObtenido: ', JSON.parse(guardado));
        

        
        
        }


