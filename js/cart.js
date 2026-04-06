
function setupCart() {
  displayCart();
  document.getElementById("orderButton").addEventListener("click",()=>order() );
}

function formatPrice(value) {
  return "$" + value.toFixed(2);
}


function findGameById(id) {
  for (let i = 0; i < games.length; i++) {
    if (games[i].id === id) {
      return games[i];
    }
  }
  return null;
}



function displayCart() {
  let cart = getCart();
  let container = document.getElementById("cartItems");

  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML =
      '<p class="text-slate-400">Votre panier est vide.</p>';

    document.getElementById("cartTotal").innerText = "$0.00";
    return;
  }

  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let game = findGameById(item.id);
    let card = document.createElement("div");

    card.className =
      "grid gap-4 rounded-xl bg-slate-800 border border-slate-200 p-4 shadow-sm sm:grid-cols-[120px_1fr_auto]";

    card.innerHTML = `
      <img class="h-32 w-full rounded-lg object-cover" src="${game.image}" alt="${game.title}" />

      <div>
        <h3 class="text-lg font-semibold text-white">${game.title}</h3>
        <p class="text-sm text-slate-500">${game.category}</p>
        <p class="mt-2 text-sm text-slate-500">
          Prix: ${formatPrice(game.price)}
        </p>
      </div>

      <div class="flex flex-col items-end justify-between gap-3 sm:items-start sm:justify-center">
        
        <div class="flex items-center gap-2">
          <button onclick="changeQty(${item.id}, -1)">-</button>

          <span class="text-white">${item.quantity}</span>

          <button onclick="changeQty(${item.id}, 1)">+</button>
        </div>

        <button onclick="removeItem(${item.id})">
          Supprimer
        </button>

      </div>
    `;

    container.appendChild(card);
  }

  updateCartTotal();
}

function changeQty(id, amount) {
  let cart = getCart();

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].quantity += amount;

      if (cart[i].quantity < 1) {
        removeItem(id);
        return;
      }
      break;
    }
  }
  saveCart(cart);
  displayCart();
}

function removeItem(id) {
  let cart = getCart();
  let newCart = [];

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id !== id) {
      newCart.push(cart[i]);
    }
  }

  saveCart(newCart);
  displayCart();
}


function updateCartTotal() {
  let cart = getCart();
  let total = calculateTotal(cart);

  document.getElementById("cartTotal").innerText =
    formatPrice(total);
}

function order() {
  saveCart([]);
  displayCart();
}

document.addEventListener("DOMContentLoaded", setupCart);