let selectedCategory = 'All';

function displayGames(list) {
  let grid = document.getElementById('gameGrid');
  grid.innerHTML = '';

  for (let i = 0; i < list.length; i++) {
    let game = list[i];
    let card = document.createElement('div');
    card.innerHTML = '<div>' + game.title + '</div>' +
                     '<button onclick="addToCart(' + game.id + ')">Ajouter au panier</button>';
    grid.appendChild(card);
  }
}

function addToCart(id) {
  // Logique d'ajout au panier
}

function setup() {
  displayGames(games);
}

document.addEventListener('DOMContentLoaded', setup);
