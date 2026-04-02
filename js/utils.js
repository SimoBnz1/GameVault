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
