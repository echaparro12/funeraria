const form=document.getElementById('formulario');

form.addEventListener('submit',function(event){
event.preventDefault();

var usuario = document.getElementById("correo").value;
var password = document.getElementById("password").value;

var Email = JSON.parse (localStorage.getItem('userEmail'));
var Passworduser = JSON.parse (localStorage.getItem('userPass'));

var email = Email.toString();
var pass = Passworduser.toString();


if (email==usuario && pass == password) {

alert("Bienvenido");
location.href="../vistas/viewuser/modulousuario.html";
}else{
alert("Contraseña o Correo no coinciden");

}

});

   

    
