const botoes = document.querySelectorAll(".botao");
const ferramentas = document.querySelectorAll(".ferramenta");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    //verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele
    desselecionarBotao();
    desselecionarFerramenta();
    // adicionar a classe "selecionado" no botao que o usuario clicou
    botao.classList.add("selecionado");
    ferramentas[indice].classList.add("selecionado");
  });
});

function desselecionarFerramenta() {
  const ferramentaSelecionada = document.querySelector(
    ".ferramenta.selecionado"
  );
  ferramentaSelecionada.classList.remove("selecionado");
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
