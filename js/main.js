let selectedCategory = 'All';

function displayGames(list) {
  let grid = document.getElementById('gameGrid');
  grid.innerHTML = '';

  for (let i = 0; i < list.length; i++) {
    let game = list[i];
    let card = document.createElement('div');
    card.textContent = game.title;
    grid.appendChild(card);
  }
}

function setup() {
  displayGames(games);
}

document.addEventListener('DOMContentLoaded', setup);
