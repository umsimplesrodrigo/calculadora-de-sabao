const form = document.getElementById("formIngredientes");
const addIngredienteBtn = document.getElementById("addIngrediente");
const ingredientesBaseDiv = document.getElementById("ingredientesBase");
const calculadoraDiv = document.getElementById("calculadora");
const inputsCalculadoraDiv = document.getElementById("inputsCalculadora");

let ingredientes = [];

addIngredienteBtn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("ingrediente-input");
  div.innerHTML = `
    <input type="text" placeholder="Ingrediente" class="nome-ingrediente" required />
    <input type="number" placeholder="Quantidade" class="quantidade-ingrediente" required />
  `;
  ingredientesBaseDiv.appendChild(div);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nomes = Array.from(document.getElementsByClassName("nome-ingrediente"));
  const quantidades = Array.from(document.getElementsByClassName("quantidade-ingrediente"));

  ingredientes = nomes.map((input, i) => ({
    nome: input.value,
    quantidade: parseFloat(quantidades[i].value),
    proporcao: 0, // será calculado
  }));

  const baseQuantidade = ingredientes[0].quantidade;
  ingredientes.forEach(ing => {
    ing.proporcao = ing.quantidade / baseQuantidade;
  });

  // Gera os inputs da calculadora
  inputsCalculadoraDiv.innerHTML = '';
  ingredientes.forEach((ing, index) => {
    const div = document.createElement("div");
    div.classList.add("proporcao-input");

    div.innerHTML = `
      <label>${ing.nome}:</label>
      <input type="number" data-index="${index}" value="${ing.quantidade}" />
    `;

    inputsCalculadoraDiv.appendChild(div);
  });

  // Adiciona evento aos inputs
  inputsCalculadoraDiv.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", (e) => {
      const changedIndex = parseInt(e.target.dataset.index);
      const novaBase = parseFloat(e.target.value);
      if (isNaN(novaBase) || novaBase <= 0) return;

      const novaBaseOriginal = novaBase / ingredientes[changedIndex].proporcao;

      inputsCalculadoraDiv.querySelectorAll("input").forEach((inputOutro, idx) => {
        if (idx !== changedIndex) {
          const novaQuantidade = (ingredientes[idx].proporcao * novaBaseOriginal).toFixed(2);
          inputOutro.value = novaQuantidade;
        }
      });
    });
  });

  calculadoraDiv.classList.remove("oculto");
});
