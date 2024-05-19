function goBack() {
    window.history.back();
  }
  

// codigo para os popups

// Função para abrir o popup
function abrirPopupCriarChave() {
  var popupDiv = document.getElementById('popup');
  popupDiv.classList.add('show'); // Adiciona a classe 'show' para exibir o popup
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