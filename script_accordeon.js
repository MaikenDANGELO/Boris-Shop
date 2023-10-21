var accordeon = document.getElementsByClassName("accordeon");
var i;



for (i = 0; i < accordeon.length; i++){
    accordeon[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}