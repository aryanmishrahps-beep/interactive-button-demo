const button = document.getElementById("colorBtn");

const colors = [
    "#3498db",
    "#2ecc71",
    "#9b59b6",
    "#f39c12",
    "#e74c3c",
    "#1abc9c",
    "#34495e",
    "#16a085"
];

button.addEventListener("click", function(){

    const randomIndex = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[randomIndex];

});