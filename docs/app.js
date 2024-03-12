document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });


function abrirPopup(){
    document.getElementById('popup-container').classList.add('mostrar-popup');
    document.body.style.overflow = 'hidden';
}
function cerrarPopup(){
    document.getElementById('popup-container').classList.remove('mostrar-popup');
    document.body.style.overflow = 'auto';
}

function copiarMail() {
    var mailElemento = document.getElementById('mail');
    var mailTexto = mailElemento.textContent.trim(); // Utiliza trim() para eliminar espacios en blanco
  
    navigator.clipboard.writeText(mailTexto).then(function () {
        document.getElementById('copiar-tooltip').innerText = 'Email copiado!';
        document.getElementById('copiar-tooltip').classList.add('tooltip-copiado');

        console.log('Correo copiado al portapapeles:', mailTexto);
      }).catch(function (err) {
        console.error('Error al copiar el correo al portapapeles:', err);
      });
}
  
function mostrarCopiarTooltip() {
    document.getElementById('copiar-tooltip').style.display = 'flex';
} 
function ocultarCopiarTooltip(textoOriginal = String) {
    document.getElementById('copiar-tooltip').style.display = 'none';
    document.getElementById('copiar-tooltip').innerText = textoOriginal;
    document.getElementById('copiar-tooltip').classList.remove('tooltip-copiado');
}

function mostrarEnviarTooltip() {
    document.getElementById('enviar-tooltip').style.display = 'flex';
} 
function ocultarEnviarTooltip(textoOriginal = String) {
    document.getElementById('enviar-tooltip').style.display = 'none';
    document.getElementById('enviar-tooltip').innerText = textoOriginal;
    document.getElementById('enviar-tooltip').classList.remove('tooltip-copiado');
}

