function tab_nav() {
    var navA = document.querySelectorAll("ul li>a");
    var navInner = document.querySelectorAll("li ul li>a");

    for (var i = 0, len = navA.length; i < len; i++) {
        navA[i].addEventListener("focus", function (event) {
            var innerUl = event.target.parentElement.querySelector("ul");
            event.target.parentElement.parentElement.querySelector("ul").style.display = "none";
            if (innerUl) innerUl.style.display = "block";
        }, true);

        navA[i].addEventListener("click", function (event) {
            event.target.parentElement.querySelector("ul").style.display = "none";

        });

    }

    for (var i = 0, len = navInner.length; i < len; i++) {
        if (navInner[i].parentElement.nextElementSibling === null || navInner[i].parentElement.previouselementsibling === null) {
            navInner[i].addEventListener("blur", function (event) {
                event.target.parentElement.parentElement.style.display = "none"
            }, true);
        }
    }

}