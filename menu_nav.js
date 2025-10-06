  function toggleNav() {
        const sideNav = document.getElementById('sideNav');
        const menuBtn = document.getElementById('menu-icon'); 
    
        sideNav.classList.toggle('open');
        document.body.classList.toggle('overlay-active'); 
    
        if (sideNav.classList.contains('open')) {
            menuBtn.innerHTML = "&#10005;";
        } else {
            menuBtn.innerHTML = "&#9776;";
        }
    }
    
    document.addEventListener('click', function (event) {
        const sideNav = document.getElementById('sideNav');
        const menuBtn = document.getElementById('menu-icon');
    
        if (!sideNav.contains(event.target) && !menuBtn.contains(event.target)) {
            sideNav.classList.remove('open');
            document.body.classList.remove('overlay-active'); 
            menuBtn.innerHTML = "&#9776;"; 
        }
    });

    function toggleNav() {
  const sideNav = document.getElementById("sideNav");
  const body = document.body;
  const overlay = document.getElementById("overlay");

  sideNav.classList.toggle("open");

  if (sideNav.classList.contains("open")) {
    body.classList.add("lock-scroll");
    overlay.classList.add("active");
  } else {
    body.classList.remove("lock-scroll");
    overlay.classList.remove("active");
  }
}
// Close nav when clicking overlay
document.getElementById("overlay").addEventListener("click", () => {
  document.getElementById("sideNav").classList.remove("open");
  document.body.classList.remove("lock-scroll");
  document.getElementById("overlay").classList.remove("active");
});

const products = [
  "Gadgets",
  "Stationaries",
  "Swap Service",
  "Recharge",
  "Clothing",
  "Gaming",
  "Kitchen",
  "Books",
  "Gym & Fitness",
  "Health & Lifestyle",
  "Appliances",
  "Furniture",
  "Contacts",
  "Earn"
];

const input = document.querySelector("input");
const suggestions = document.getElementById("suggestions");

input.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  suggestions.innerHTML = "";

  if (query.length > 0) {
    const matches = products.filter(item =>
      item.toLowerCase().includes(query)
    );

    if (matches.length > 0) {
      suggestions.style.display = "block"; // show box
    } else {
      suggestions.style.display = "none"; // hide if no matches
    }

    matches.forEach(match => {
      const li = document.createElement("li");
      li.textContent = match;

      // Click suggestion → fill input + hide box
      li.addEventListener("click", () => {
        input.value = match;
        suggestions.innerHTML = "";
        suggestions.style.display = "none";
      });

      suggestions.appendChild(li);
    });
  } else {
    suggestions.style.display = "none"; // hide when input empty
  }
});

// Hide when clicking outside input or suggestions
document.addEventListener("click", function (e) {
  if (!input.contains(e.target) && !suggestions.contains(e.target)) {
    suggestions.style.display = "none";
  }
});
