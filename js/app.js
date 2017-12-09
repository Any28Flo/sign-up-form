// var nombre = document.getElementById('name');
// nombre.addEventListener('keyup', function(e) {
//   var nombreUsuario = e.target.value;
//   var patron = /^[a-zA-Z]+$/;
//
//   if (!patron.test(nombreUsuario)) {
//     e.target.style.borderBottom = '2px solid red';
//   } else {
//     e.target.style.borderBottom = 'none';
//   }
// });
//
// var correo = document.getElementById('mail');
// correo.addEventListener('keyup', function(e) {
//   var correoUsuario = e.target.value;
//   var patron = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
//
//   if (!patron.test(correoUsuario)) {
//     e.target.style.borderBottom = '2px solid red';
//   } else {
//     e.target.style.borderBottom = 'none';
//   }
// });
//
// var contrasena = document.getElementById('password');
// contrasena.addEventListener('keyup', function(e) {
//   var passwordUsuario = e.target.value;
//   var patron = /^\w{6,12}$/;
//
//   if (!patron.test(passwordUsuario)) {
//     e.target.style.borderBottom = '2px solid red';
//   } else {
//     e.target.style.borderBottom = 'none';
//   }
// });


function validar(opciones) {
  var { selector, tipo, callback } = opciones;

  var elemento = document.querySelector(selector);
  elemento.addEventListener('keyup', probar);

  function probar(e) {
    var valor = e.target.value;
    var patron;
    switch (tipo) {
      case 'name':
        patron = /^[a-zA-Z]+$/;
        break;
      case 'email':
        patron = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
        break;
      case 'password':
        patron = /^\w{6,12}$/;
        break;
      default:
        patron = /.+/;
    }

    if (patron.test(valor)) {
      e.target.style.borderBottom = 'none';
    } else {
      callback(e.target);
    }
  }
}

validar({
  selector: '#name',
  tipo: 'name',
  callback: function(elemento) {
    elemento.style.borderBottom = '2px solid red';
  }
});
validar({
  selector: '#mail',
  tipo: 'email',
  callback: function(elemento) {
    elemento.style.borderBottom = '5px solid green';
  }
});
validar({
  selector: '#password',
  tipo: 'password',
  callback: function(elemento) {
    elemento.style.border = '3px dashed blue';
  }
});
