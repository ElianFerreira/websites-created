let fieldCode = document.getElementById('field-code');
let fieldPass = document.getElementById('field-pass');

function verifyLogin() {
  if (fieldCode.value === '') {
    alert('Por favor, insira seu Codigo.');
  } else if (fieldPass.value === '') {
    alert('Por favor, insira uma senha válida.');
  }

  redirectClient();
}

function redirectClient() {
  if (fieldCode.value !== '' && !fieldPass.value !== '') {
    location.href = 'pages/cad.html';
  }
}
