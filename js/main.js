let btn_register;
let pass1;
let pass2;



window.onload = init;

function init() {
  btn_register = document.getElementById("btn_register");
  pass1 = document.getElementById("password1");
  pass2 = document.getElementById("password2");
  btn_register.addEventListener("click", procesarDatos);
}

function procesarDatos(event) {
  event.preventDefault();

  console.log("pass1", pass1.value);
  console.log("pass2", pass2.value);

  if (pass1.value == pass2.value) {
    console.log("contraseñas iguales");

    let usuario;
        usuario = document.getElementById("email_user");
        

        guradarDatos({
            usuario: usuario.value,
            clave: pass1.value,
          });

  } else {
    alert("las contraseñas no son iguales");
  }
}

function guradarDatos(obj) {
  localStorage.setItem("usuario", JSON.stringify(obj));
  //clear();
  location.href = "index.html";
}

/*function clear() {
  let usuario, clave;
  usuario = document.getElementById("usuario");
  clave = document.getElementById("clave");

  usuario.value = "";
  clave.value = "";
}*/
