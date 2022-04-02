function escolherPrincipal(nomePrincipal) {
    console.log(nomePrincipal);
 
    const botaoSelecionado = document.querySelector(".opcoes-principal").querySelector(".selecionado");
    if (botaoSelecionado !== null) {

        botaoSelecionado.classList.remove("selecionado");
    }

    nomePrincipal.classList.add("selecionado");
    opcao = nomePrincipal.innerHTML;
}

function escolherBebida(nomeBebida) {
    console.log(nomeBebida);
    
    const botaoSelecionado = document.querySelector(".opcoes-bebida").querySelector(".selecionado");
    if (botaoSelecionado !== null) {
      
      botaoSelecionado.classList.remove("selecionado");
    }
  
    nomeBebida.classList.add("selecionado");
    opcao = nomeBebida.innerHTML;
}

function escolherSobremesa(nomeSobremesa) {
    console.log(nomeSobremesa);
   
    const botaoSelecionado = document.querySelector(".opcoes-sobremesa").querySelector(".selecionado");
    if (botaoSelecionado !== null) {

        botaoSelecionado.classList.remove("selecionado");
    }
  
    nomeSobremesa.classList.add("selecionado");
    opcao = nomeSobremesa.innerHTML;
}
  