function toggleVisibility(button, contentDiv, showText, hideText) {
    button.addEventListener('click', () => {
      if (contentDiv.classList.contains('hidden')) {
        contentDiv.classList.remove('hidden');  
        button.textContent = hideText;  // Altera o texto do botão para Ocultar
      } else {
        contentDiv.classList.add('hidden');  
        button.textContent = showText;  // Altera o texto do botão para Informações
      }
    });
  }

  // para selecionar os botoes e as divs
  const buttonHeader = document.querySelector('.button-header');
  const galaxyInfoDiv = document.getElementById('galaxy-info');
  toggleVisibility(buttonHeader, galaxyInfoDiv, "informações", "ocultar")
  // main
  const buttonMain = document.querySelector('.button-main')
  const pilaresInfoDiv = document.getElementById('pilares-info')
  toggleVisibility(buttonMain, pilaresInfoDiv, "informações", "ocultar")
  // section-one
  const buttonOne = document.querySelector('.button-one');
  const buracoNegroInfoDiv = document.getElementById('buraco-negro-info');
  toggleVisibility(buttonOne, buracoNegroInfoDiv, "informações", "informaçôes");
  //section two
  const buttonTwo = document.querySelector('.button-two');
  const neutronsInfoDiv = document.getElementById('neutrons-info');
  toggleVisibility(buttonTwo, neutronsInfoDiv, "informações", "informaçôes")
  //section three
  const buttonThree = document.querySelector('.button-three');
  const buracoMinhocaInfoDiv = document.getElementById('buraco-minhoca-info');
  toggleVisibility(buttonThree, buracoMinhocaInfoDiv, "informações", "ocultar");
  //section four
  const buttonFour = document.querySelector('.button-four');
  const nebulosaInfoDiv = document.getElementById('nebulosa-info');
  toggleVisibility(buttonFour, nebulosaInfoDiv, "informações", "ocultar")