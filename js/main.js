let selectedCategory = 'All';

// Affiche une liste de jeux dans la grille principale
function displayGames(list) {
  let grid = document.getElementById('gameGrid');
  grid.innerHTML = '';

  for (let i = 0; i < list.length; i++) {
    let game = list[i];
    let card = document.createElement('div');
    card.innerHTML = '<div><strong>' + game.title + '</strong></div>' +
                     '<div>' + game.category + '</div>' +
                     '<div>$' + game.price.toFixed(2) + '</div>' +
                     '<button onclick="addToCart(' + game.id + ')">Ajouter au panier</button>';
    grid.appendChild(card);
  }
}

// Ajoute un jeu au panier et sauvegarde dans localStorage
function addToCart(id) {
  let cart = getCart();
  let found = false;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].quantity++;
      found = true;
      break;
    }
  }

  if (!found) {
    cart.push({ id: id, quantity: 1 });
  }

  saveCart(cart);
}

// Filtre les jeux selon le texte et la catégorie sélectionnée
function filterGames() {
  let text = document.getElementById('searchInput').value.toLowerCase();
  let result = [];

  for (let i = 0; i < games.length; i++) {
    let game = games[i];
    let titleMatch = game.title.toLowerCase().includes(text);
    let categoryMatch = selectedCategory === 'All' || game.category === selectedCategory;

    if (titleMatch && categoryMatch) {
      result.push(game);
    }
  }

  displayGames(result);
}

function setup() {
  displayGames(games);
  document.getElementById('searchInput').addEventListener('input', filterGames);

  let buttons = document.querySelectorAll('.category-button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove('bg-emerald-500');
        buttons[j].classList.add('bg-white');
      }
      this.classList.remove('bg-white');
      this.classList.add('bg-emerald-500');

      selectedCategory = this.dataset.genre;
      filterGames();
    });
  }
}

document.addEventListener('DOMContentLoaded', setup);
