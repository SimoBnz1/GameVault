
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
        card.className =
            "rounded-xl bg-slate-800 border border-slate-200 p-4 shadow-sm";

        card.innerHTML = `
      <img class="h-48 w-full rounded-lg object-cover" src="${game.image}" alt="${game.title}">

      <div class="mt-4">
        <h3 class="text-lg font-semibold text-white">${game.title}</h3>
        <p class="text-sm text-slate-500">${game.category}</p>
        <p class="mt-2 text-blue-600 font-bold">${formatPrice(game.price)}</p>

        <button 
          class="mt-3 w-full rounded-lg bg-purple-500 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-300"
          onclick="addToCart(${game.id})"
        >
          Ajouter au panier
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
            break;
        }
    }

    if (!found) {
        cart.push({ id: id, quantity: 1 });

    }
    
    saveCart(cart);
    const countCart = document.getElementById("cardcount");
    countCart.innerText = cart.length;

}

function filterGames() {
    let searchText = document.getElementById("searchInput").value.toLowerCase();

    let filtered = [];

    for (let i = 0; i < games.length; i++) {
        let game = games[i];

        let titleMatch = game.title.toLowerCase().includes(searchText);

        let categoryMatch = selectedCategory === "All" || game.category === selectedCategory;

        if (titleMatch && categoryMatch) {
            filtered.push(game);
        }
    }

    displayGames(filtered);
   
}


function setup() {
    let promo =document.getElementById('promo');
     let count=30;
    promo.innerText=count;
   
    for (let i = 0; i <= 30; i--) {
        if(i===0){
            promo.innerText=""
        }
        count--
    }
    displayGames(games);
    const cart = getCart()
    const countCart = document.getElementById("cardcount");
    countCart.innerText = cart.length;

    document.getElementById("searchInput").addEventListener("input", () => filterGames());

    const categoryButtons = document.querySelectorAll(".category-button");

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
          categoryButtons.forEach(btn => {
                btn.classList.remove("bg-purple-600");
                btn.classList.add("bg-slate-800");
            });


            button.classList.remove("bg-slate-800");
            button.classList.add("bg-purple-600");

            selectedCategory = button.dataset.genre;

            filterGames();
        });
    });

}

document.addEventListener("DOMContentLoaded", setup);