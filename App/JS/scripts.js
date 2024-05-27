function goBack() {
    window.history.back();
  }
  

// codigo para os popups

// Função para abrir o popup

function abrirPopupContactos() {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('popup-contactos').style.display = 'block';
  document.getElementById('popup').style.display = 'none';
}

function fecharPopupContactos() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('popup-contactos').style.display = 'none';
}

function abrirPopupCriarChave() {
  document.getElementById('popup').style.display = 'block';
}

function abrirPopupChaveEnviada() {
  document.getElementById('popup-contactos').style.display = 'none';
  document.getElementById('chave-enviada').style.display = 'block';

  // Define um temporizador para fechar o popup após 3 segundos
  setTimeout(function() {
    document.getElementById('chave-enviada').style.display = 'none';
    window.location.reload(); // Recarrega a página após 3 segundos
  }, 3000); // 3000 milissegundos = 3 segundos
}








function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "martarepolho233@gmail.com" && password === "martinha233") {
    window.location.href = "../Homepage/homepage.html";
  } else if (email === "" || password === "") {
    document.getElementById("error-message").innerText = "Por favor introduza um email e uma password.";
    document.getElementById("error-message").style.display = "block";
  } else {
    document.getElementById("error-message").innerText = "Email e password incorretos";
    document.getElementById("error-message").style.display = "block";
  }
}