function burger() {
    var x = document.getElementById("nav-burger");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
}