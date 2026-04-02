let selectedCategory = "All";

function displayGames(list) {
  let grid = document.getElementById("gameGrid");
  grid.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    let game = list[i];

    let card = document.createElement("div");
    card.className = "rounded-xl bg-white border border-emerald-500/10 p-4 shadow-sm transition duration-300 hover:shadow-teal-500/10";

    card.innerHTML = `
      <img class="h-48 w-full rounded-lg object-cover" src="${game.image}">
      
      <div class="mt-4">
        <h3 class="text-slate-900 text-lg">${game.title}</h3>
        <p class="text-slate-500">${game.category}</p>
        <p class="text-emerald-500 font-bold">$${game.price}</p>

        <button onclick="addToCart(${game.id})"
          class="mt-2 w-full bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-teal-500">
          Add to Cart
        </button>
      </div>
    `;

    grid.appendChild(card);
  }
}

function addToCart(id) {
  let cart = getCart();
  let found = false;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].quantity++;
      found = true;
    }
  }

  if (!found) {
    cart.push({ id: id, quantity: 1 });
  }

  saveCart(cart);
  alert("Added to cart");
}

function filterGames() {
  let text = document.getElementById("searchInput").value.toLowerCase();
  let result = [];

  for (let i = 0; i < games.length; i++) {
    let game = games[i];

    let matchTitle = game.title.toLowerCase().includes(text);
    let matchCategory = selectedCategory === "All" || game.category === selectedCategory;

    if (matchTitle && matchCategory) {
      result.push(game);
    }
  }

  displayGames(result);
}

function setup() {
  displayGames(games);

  document.getElementById("searchInput").addEventListener("input", filterGames);

  let buttons = document.querySelectorAll(".category-button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove("bg-emerald-500");
            buttons[j].classList.add("bg-white");
        }
      this.classList.remove("bg-white");
      this.classList.add("bg-emerald-500");
      selectedCategory = this.dataset.genre;
      filterGames();
    });
  }
}

document.addEventListener("DOMContentLoaded", setup);