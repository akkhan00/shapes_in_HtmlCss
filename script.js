clicker = document.querySelectorAll(".clicker");

clicker.forEach((item) => {
    item.addEventListener("click", e => {
        const target = e.target.innerText.toLowerCase();
        switch (target) {
            case "heart":
                window.open(document.URL + "shapes/heart/heart.html");
                break;
            case "triangle":
                window.open(document.URL + "shapes/triangle/triangle.html")
                break;
        }
    })
})

