/* 
O que precisamos fazer? - Quando clicar no botão do personagem na lista temos que marcar o botão como selecionado e mostrar o personagem correspondente.

     OBJRTIVO 1 - Quando clicar no botão do personagem da lista, marcar o botão como selecionado.
        
          Passo 1 - pegar os botões do JS para poder verificar quando o usuário clicar em cima de um deles.

          Passo 2 - Selecionar a classe "selecionado" no botão que o usuário clicou.

          Passo 3 - Verificar se já existe o botão selecionado, se SIM, devemos remover a seleção dele.

    OBJETIVO 2 - Quando clicar no botão do personagem mostrar as informações dele.
     
         Passo 1 - Pegar o personagem no JS para poder mostrar ou esconder ele.

         Passo 2 - Adicionar a classe "selecionado" no personagem que o usuário selecionou.

         Passo 3 - Verificar se já existe um personagem selecionado, se SIM, devemos remover a seleção dele.
*/

const botoes = document.querySelectorAll(".botao");


const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {


        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");





        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    desselecionarPersonagem();
}

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

