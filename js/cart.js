function setupCart() {
  displayCart();
}

function displayCart() {
  let cart = getCart();
  let container = document.getElementById('cartItems');
  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML = '<p>Panier vide</p>';
    return;
  }

  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let card = document.createElement('div');
    card.innerHTML = '<div>' + item.id + '</div>' +
                     '<div>Quantité: ' + item.quantity + '</div>';
    container.appendChild(card);
  }
}

document.addEventListener('DOMContentLoaded', setupCart);
