let selectedCategory = "All";

function formatPrice(value) {
  return "$" + value.toFixed(2);
}

function displayGames(list) {
  let grid = document.getElementById("gameGrid");
  grid.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    let game = list[i];
    let card = document.createElement("div");
    card.className = "rounded-xl bg-slate-800 border border-slate-200 p-4 shadow-sm";
    card.innerHTML =
      '<img class="h-48 w-full rounded-lg object-cover" src="' +
      game.image +
      '" alt="' +
      game.title +
      '">' +
      '<div class="mt-4">' +
      '<h3 class="text-lg font-semibold text-white">' +
      game.title +
      "</h3>" +
      '<p class="text-sm text-slate-500">' +
      game.category +
      "</p>" +
      '<p class="mt-2 text-blue-600 font-bold">' +
      formatPrice(game.price) +
      "</p>" +
      '<button class="mt-3 w-full rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-500" onclick="addToCart(' +
      game.id +
      ')">Ajouter au panier</button>' +
      "</div>";

    grid.appendChild(card);
  }
}
