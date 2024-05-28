function goBack() {
    window.history.back();
  }
  

// codigo para os popups

// Função para abrir o popup

function abrirPopupContactos() {

  document.getElementById('overlay').style.display = 'none';
  document.getElementById('popup').style.display = 'none';

  document.getElementById('overlay').style.display = 'block';
  document.getElementById('popup-contactos').style.display = 'block';
  
}

function fecharPopupContactos() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('popup-contactos').style.display = 'none';
}

function abrirPopupCriarChave() {

  var overlay = document.getElementById('overlay');
  overlay.style.display = 'block'; // Exibe o overlay escurecido

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



function abrirPopupScan() {
  document.getElementById('popup-scan').style.display = 'block';
  var overlay = document.getElementById('overlay');
  overlay.style.display = 'block'; // Exibe o overlay escurecido
}

function fecharPopupScan() {
  document.getElementById('popup-scan').style.display = 'none';
}


function adicionar() {
  document.getElementById('popup-scan').style.display = 'none';
  
  var overlay = document.getElementById('overlay');
  overlay.style.display = 'block'; // Exibe o overlay escurecido
  
  var componentPopup = document.querySelector('.component');
  componentPopup.style.display = 'block'; // Exibe o popup "component"

  // Aguarda 4 segundos antes de abrir o próximo popup
  setTimeout(function() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none'; // Oculta o overlay

    var componentPopup = document.querySelector('.component');
    componentPopup.style.display = 'none'; // Oculta o popup "component"

    // Exibe o próximo popup (substitua "popup-scan-conluida" pelo ID do próximo popup)
    var nextPopup = document.querySelector('.popup-scan-conluida');
    nextPopup.style.display = 'block';

    // Aguarda mais 3 segundos e atualiza a página
    setTimeout(function() {
      window.location.reload();
    }, 3000);
  }, 4000); // 4 segundos de espera
}



function notificarAdmin() {

  var popup = document.querySelector('.popup-fuga-de-agua');
  var overlay = document.getElementById('overlay');
  
  popup.style.display = 'none';
  overlay.style.display = 'none';

  var popupComponent = document.querySelector('.component');
  var overlay = document.getElementById('overlay');
  
  popupComponent.style.display = 'block';
  overlay.style.display = 'block';

  setTimeout(function() {
    popupComponent.style.display = 'none';
    overlay.style.display = 'none';
  }, 3000); // 3000 milissegundos = 3 segundos
}

function mostrarPopupFugaDeAgua() {
  var popup = document.querySelector('.popup-fuga-de-agua');
  var overlay = document.getElementById('overlay');
  
  popup.style.display = 'block';
  overlay.style.display = 'block';
}

function fecharPopupFugaDeAgua() {
  var popup = document.querySelector('.popup-fuga-de-agua');
  var overlay = document.getElementById('overlay');
  
  popup.style.display = 'none';
  overlay.style.display = 'none';
}

function mostrarPopupConclus() {
  var popupConclus = document.querySelector('.popup-conclus');
  var overlay = document.getElementById('overlay');
  
  popupConclus.style.display = 'block';
  overlay.style.display = 'block';

  setTimeout(function() {
    popupConclus.style.display = 'none';
    overlay.style.display = 'none';
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