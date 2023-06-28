const setBackgroundNav = (id, idSection, backgroundColorNav, opacityLevel = "1", time) => {
    $(id).on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: $(idSection).offset().top }, time);
        setTimeout(()=>{
            document.getElementById("cabeza").style.backgroundColor = backgroundColorNav;
            document.getElementById("cabeza").style.opacity = opacityLevel;
            // Guardar los valores en el almacenamiento local
        },time);
    });
}


$(document).ready(function() {
    setBackgroundNav('#a1', '#inicio', '#2C302F', '.9', 1000);
    setBackgroundNav('#a2', '#caracteristicas', '#2C302F', '.9', 1000);
    setBackgroundNav('#a3', '#beneficios', '#2C302F', '.9', 1000);
    setBackgroundNav('#a4', '#descargar', '#2C302F', '.9', 1000);
    setBackgroundNav('#a5', '#contacto', '#2C302F', '.2', 1000);
    setBackgroundNav('#a-return', '#main', 'transparent', '1', 1000);
});

$(window).on("refresh", function(event) {
      event.preventDefault();
      $("html, body").animate({scrollTop: $('#main').offset().top }, time);
      $("#cabeza").css("backgroundColor", "transparent");
      $("#cabeza").css("opacity", "1");
      location.reload();
});

window.addEventListener("keydown", function(event) {
    if (event.key === "Tab") {
        event.preventDefault();
    }
});