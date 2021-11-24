let nombre = document.querySelector('#nombre');
let precio = document.querySelector('#precio');

nombre.addEventListener('blur', () => {validarCampoRequerido(nombre)});
precio.addEventListener('blur', () => {validarNumero(precio)});

function validarCampoRequerido(input) {
  if (input.value.trim().length > 0 && input.value.trim().length >= 3) {
    input.className = "form-control rounded-pill border-1 is-valid";
    console.log(input.value)
    return true;
  } else {
    input.className = "form-control rounded-pill border-1 is-invalid";
    return false;
  }
}

function validarNumero(input) {
    let patron = /^[0-9]{1,5}$/;
    if (patron.test(input.value)) {
      input.className = "form-control rounded-pill border-1 is-valid";
      console.log(input.value)
      return true;
    } else {
      input.className = "form-control rounded-pill border-1 is-invalid";
      return false;
    }
  }