var accordeon = document.getElementsByClassName("accordeon");
var i;

for (i = 0; i < accordeon.length; i++){
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.display = null;
        } else {
            panel.style.display = panel.scrollHeight + "px";
        }
    });
}