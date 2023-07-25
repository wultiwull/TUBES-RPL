// toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// toggle class active shopping-cart
const shoppingcart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-buttom").onclick = (e) => {
  shoppingcart.classList.toggle("active");
  e.preventDefault();
};

// klik diluar sidebar untuk menghilangkan navbar dan shopping-cart
const hm = document.querySelector("#hamburger-menu");
const scb = document.querySelector("#shopping-cart-buttom");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!scb.contains(e.target) && !shoppingcart.contains(e.target)) {
    shoppingcart.classList.remove("active");
  }
});

// Fungsi untuk menambahkan item ke keranjang
function tambahkanKeKeranjang(namaProduk, hargaProduk) {
  // Buat elemen untuk item baru dalam keranjang
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.innerHTML = `
     <img src="img/menu/${namaProduk
       .toLowerCase()
       .replace(" ", "-")}.jpg" alt="${namaProduk}" />
     <div class="item-detail">
       <h3>${namaProduk}</h3>
       <div class="item-price">IDR ${hargaProduk}</div>
     </div>
     <i data-feather="trash-2" class="remove-item" onclick="hapusItem(this)"></i>
   `;

  // Tambahkan item ke keranjang
  const shoppingCart = document.querySelector(".shopping-cart");
  shoppingCart.appendChild(cartItem);

  // Update jumlah item dan total harga
  updateCartSummary(hargaProduk);
}

// Fungsi untuk menghapus item dari keranjang
function hapusItem(item) {
  const cartItem = item.parentElement;
  const hargaProduk = cartItem.querySelector(".item-price").textContent;
  cartItem.remove();

  // Update jumlah item dan total harga
  updateCartSummary("-" + hargaProduk);
}

// Fungsi untuk update summary keranjang
function updateCartSummary(hargaProduk) {
  const cartItemCount = document.getElementById("cart-item-count");
  const cartTotal = document.getElementById("cart-total");

  const itemCount = parseInt(cartItemCount.textContent);
  cartItemCount.textContent =
    hargaProduk[0] === "-" ? itemCount - 1 : itemCount + 1;

  const total = parseInt(cartTotal.textContent);
  cartTotal.textContent =
    hargaProduk[0] === "-"
      ? total - parseInt(hargaProduk.slice(4))
      : total + parseInt(hargaProduk.slice(4));
}
