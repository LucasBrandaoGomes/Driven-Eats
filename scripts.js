let principal;
let valorprincipal;
let bebida;
let valorbebida;
let sobremesa;
let valorsobremesa;

function escolherPrincipal(nomePrincipal) {
    console.log(nomePrincipal);
 
    const botaoSelecionado = document.querySelector(".opcoes-principal").querySelector(".selecionado");
    if (botaoSelecionado !== null) {

        botaoSelecionado.classList.remove("selecionado");
    }

    nomePrincipal.classList.add("selecionado");

    principal = nomePrincipal.querySelector(".opcao p:nth-child(2)").innerHTML;
    valorprincipal = (nomePrincipal.querySelector(".preço span:nth-child(2)").innerHTML);

    console.log(principal)
    console.log(valorprincipal)
}

function escolherBebida(nomeBebida) {
    console.log(nomeBebida);
    
    const botaoSelecionado = document.querySelector(".opcoes-bebida").querySelector(".selecionado");
    if (botaoSelecionado !== null) {
      
      botaoSelecionado.classList.remove("selecionado");
    }
  
    nomeBebida.classList.add("selecionado");

    bebida = nomeBebida.querySelector(".opcao p:nth-child(2)").innerHTML;
    valorbebida = (nomeBebida.querySelector(".preço span:nth-child(2)").innerHTML);

    console.log(bebida)
    console.log(valorbebida)
}

function escolherSobremesa(nomeSobremesa) {
    console.log(nomeSobremesa);
   
    const botaoSelecionado = document.querySelector(".opcoes-sobremesa").querySelector(".selecionado");
    if (botaoSelecionado !== null) {

        botaoSelecionado.classList.remove("selecionado");
    }

    nomeSobremesa.classList.add("selecionado");  
    
    sobremesa = nomeSobremesa.querySelector(".opcao p:nth-child(2)").innerHTML;
    valorsobremesa = (nomeSobremesa.querySelector(".preço span:nth-child(2)").innerHTML);

    console.log(sobremesa)
    console.log(valorsobremesa)
}

let finalizar = document.querySelector(".button");

if ((Number(valorprincipal) !== null) && (Number(valorbebida) !== null) && (Number(valorsobremesa) !== null)){
    finalizar.querySelector(".selecione").classList.add("escondido");
    finalizar.querySelector(".finalizar escondido").classList.remove("escondido");

}


function total(){
   let total = Number(valorprincipal)+Number(valorbebida)+Number(valorsobremesa);

}