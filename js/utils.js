function getCart() {
  let data = localStorage.getItem("cart");

  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function calculateTotal(cart) {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];

    for (let j = 0; j < games.length; j++) {
      if (games[j].id === item.id) {
        total += games[j].price * item.quantity;
      }
    }
  }

  return total;
}