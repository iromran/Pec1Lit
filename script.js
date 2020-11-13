function cambiarFondo() {
    var form = document.getElementById("form");
    form.addEventListener("submit", event => {
        event.preventDefault();
        var html = document.getElementById("htmlpage");
        if (html.style.backgroundColor == "white") {
            html.style.backgroundColor = " #ffda89";
        } else {
            html.style.backgroundColor = "white";
        }

    });
}

cambiarFondo();