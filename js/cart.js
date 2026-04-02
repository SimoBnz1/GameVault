function setupCart() {
  // Initialisation du panier
}

function displayCart() {
  let cart = getCart();
  let container = document.getElementById('cartItems');
  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML = '<p>Panier vide</p>';
    return;
  }
}

document.addEventListener('DOMContentLoaded', setupCart);
