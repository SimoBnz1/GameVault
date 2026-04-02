function setupCart() {
  displayCart();
}

function displayCart() {
  let cart = getCart();
  let container = document.getElementById('cartItems');
  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML = '<p>Panier vide</p>';
    document.getElementById('cartTotal').innerText = '$0.00';
    return;
  }

  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let game = null;

    for (let j = 0; j < games.length; j++) {
      if (games[j].id === item.id) {
        game = games[j];
        break;
      }
    }

    if (!game) {
      continue;
    }

    let card = document.createElement('div');
    card.innerHTML = '<h3>' + game.title + '</h3>' +
                     '<p>Prix: $' + game.price + '</p>' +
                     '<p>Quantité: ' + item.quantity + '</p>' +
                     '<button onclick="changeQty(' + item.id + ', -1)">-</button>' +
                     '<button onclick="changeQty(' + item.id + ', 1)">+</button>' +
                     '<button onclick="removeItem(' + item.id + ')">Supprimer</button>';
    container.appendChild(card);
  }

  updateTotal();
}

function changeQty(id, value) {
  let cart = getCart();

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].quantity += value;

      if (cart[i].quantity <= 0) {
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

function updateTotal() {
  let cart = getCart();
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let game = null;

    for (let j = 0; j < games.length; j++) {
      if (games[j].id === item.id) {
        game = games[j];
        break;
      }
    }

    if (game) {
      total += game.price * item.quantity;
    }
  }

  document.getElementById('cartTotal').innerText = '$' + total.toFixed(2);
}

function setupCart() {
  displayCart();
}

document.addEventListener('DOMContentLoaded', setupCart);
