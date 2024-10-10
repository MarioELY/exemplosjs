const receitas = [
    {
        titulo: "Bolo de Morango",
        imagem: "bolo_morango.png",
        preparo: "Bata todos os ingredientes e leve ao forno por 40 minutos.",
        ingredientes: ["Chocolate", "Farinha de trigo", "Morango", "Açúcar", "Ovo", "Fermento", "Manteiga"]
    },
    {
        titulo: "Macarrão",
        imagem: "macarrao.png",
        preparo: "Cozinhe o macarrão e adicione o molho de tomate.",
        ingredientes: ["Macarrão", "Molho de tomate", "Queijo ralado", "Manjericão", "Alho", "Azeite", "Sal"]
    }
    // Adicione mais receitas conforme necessário
];

function getListaIngredientes(receita) {
    return receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).reduce((acc, item) => acc + item, "<ul>") + "</ul>";
}

function getCard(receita) {
    return `
        <div class="card" style="width: 250px;">
            <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
            <div class="card-body">
                <h5 class="card-title">${receita.titulo}</h5>
                <div class="card-text">
                    ${getListaIngredientes(receita)}
                    <hr>
                    <p>${receita.preparo}</p>
                </div>
            </div>
        </div>
    `;
}

function preencheCatalogo() {
    const pnlCatalogo = document.getElementById("pnlCatalogo");
    pnlCatalogo.innerHTML = receitas.map(receita => getCard(receita)).reduce((acc, card) => acc + card, "");
}
