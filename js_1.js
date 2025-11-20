const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Toggle saat hamburger diklik
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // cegah event bubbling
  navLinks.classList.toggle("show");
});

// Klik di luar menu → tutup
document.addEventListener("click", (e) => {
  const klikDiDalamMenu =
    navLinks.contains(e.target) || menuToggle.contains(e.target);

  if (!klikDiDalamMenu) {
    navLinks.classList.remove("show");
  }
});

// SEARCH FUNCTION WITH ANIMATION
const searchInput = document.getElementById("searchInput");
const articleCards = document.querySelectorAll(".card");
const notFound = document.getElementById("notFound");

searchInput.addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  let found = false;

  articleCards.forEach((card) => {
    const title = card.dataset.title.toLowerCase();

    if (title.includes(keyword)) {
      // tampilkan kartu dengan fade-in
      card.classList.remove("hide");
      found = true;
    } else {
      // sembunyikan kartu dengan fade-out
      card.classList.add("hide");
    }
  });

  // tampilkan pesan not found dengan animasi
  if (!found) {
    notFound.classList.add("show");
  } else {
    notFound.classList.remove("show");
  }
});
