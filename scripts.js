let principal;
let valorprincipal;
let bebida;
let valorbebida;
let sobremesa;
let valorsobremesa;


function verificaçao3pedidos(){

    let finalizar = document.querySelector(".retangulo");

    if ((Number(valorprincipal) > 0) && (Number(valorbebida) > 0) && (Number(valorsobremesa) > 0)){
        
        finalizar.querySelector(".selecione").classList.add("escondido");
        finalizar.querySelector(".finalizar").classList.remove("escondido");

    }
}

function escolherPrincipal(nomePrincipal) {
    console.log(nomePrincipal)
 
    const botaoSelecionado = document.querySelector(".opcoes-principal").querySelector(".selecionado");
    if (botaoSelecionado !== null) {
    botaoSelecionado.classList.remove("selecionado");
    }

    nomePrincipal.classList.add("selecionado");

    principal = nomePrincipal.querySelector(".opcao p:nth-child(2)").innerHTML;
    valorprincipal = (nomePrincipal.querySelector(".preço span:nth-child(2)").innerHTML);

    

    verificaçao3pedidos()    
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


    verificaçao3pedidos()    
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

    verificaçao3pedidos()
}

function finalizarPedido(){

    let nome = prompt("Informe seu nome");
    let endereço = prompt("Informe seu endereço Rua/Numero/Bairro");

    let total = (Number(valorprincipal)+Number(valorbebida)+Number(valorsobremesa)).toFixed(2)

    mensagem =  encodeURIComponent(`Olá, gostaria de fazer o pedido:\n- Prato: ${principal}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\n Total: R$  ${total}\n\n  Nome: ${nome}\n Endereço: ${endereço}`)

    window.open("https://wa.me/5527997766049?text=" +mensagem)
}

