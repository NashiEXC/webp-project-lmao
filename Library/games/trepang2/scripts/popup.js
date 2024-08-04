playbutton.addEventListener(
    "click",
    function () {
        popupcontent.classList.add(
        "show"
        );
    }
);
cancel.addEventListener(
    "click",
    function () {
        popupcontent.classList.remove(
            "show"
        );
    }
);
window.addEventListener(
    "click",
    function (event) {
        if (event.target == popupcontent) {
            popupcontent.classList.remove(
                "show"
            );
        }
    }
);