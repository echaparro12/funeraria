const form=document.getElementById('form-p');
form.addEventListener('submit',function(event){
    event.preventDefault();
    
var Nombres = [],
    Apellidos = [],
    Identificacion = [],
    Telefono = [],
    Email = [],
    Password = [];
     
 

    if (localStorage.getItem('userNombre') != null) {
        var Nombres = JSON.parse (localStorage.getItem('userNombre')),
        Apellidos = JSON.parse (localStorage.getItem('userApellido')),
        Identificacion = JSON.parse (localStorage.getItem('userIdentificacion')),
        Telefono = JSON.parse (localStorage.getItem('userCelular')), 
        Email = JSON.parse (localStorage.getItem('userEmail')),
        Password = JSON.parse (localStorage.getItem('userPass'));
        
    }
 
var elementoBotonRegistrar = document.querySelector('#guardardatos');
 
elementoBotonRegistrar.addEventListener('click', Agregarusuario);
 
function Agregarusuario() {
 
    var nombre = document.querySelector('#nombre').value,
        apellido = document.querySelector('#apellido').value,
        identificacion = document.querySelector('#ide').value,
        telefono = document.querySelector('#telefono').value,
        email = document.querySelector('#email').value,
        password = document.querySelector('#pass').value;
        
 
        Nombres.push(nombre); 
        Apellidos.push(apellido);
        Identificacion.push(identificacion);
        Telefono.push(telefono);
        Email.push(email);
        Password.push(password);
       
 
        guardar(Nombres,Apellidos,Identificacion,Telefono,Email,Password); 
     
 
}
 
function guardar (txtnombre,txtapellido,txtidentificacion,txttelefono,txtemail,txtpass){
 
    localStorage.setItem('usuerNombre', JSON.stringify(txtnombre));
    localStorage.setItem('userApellido', JSON.stringify(txtapellido));
    localStorage.setItem('userIdentificacion', JSON.stringify(txtidentificacion));
    localStorage.setItem('userCelular', JSON.stringify(txttelefono));
    localStorage.setItem('userEmail', JSON.stringify(txtemail));
    localStorage.setItem('userPass', JSON.stringify(txtpass));
    cambiarpagina();
    window.location="../vistas/login1.html";
  }

  function cambiarpagina(){
    alert("Sus datos han sido guardados");
    //location.href="../vistas/login1.html";
    
  }});

