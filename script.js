clicker = document.querySelectorAll(".clicker");

clicker.forEach((item) => {
    item.addEventListener("click", e => {
        const target = e.target.innerText.toLowerCase();
        switch (target) {
            case "heart":
                window.open(document.URL.replace("index.html", "shapes/heart/heart.html"));
            case "triangle":
                window.open(document.URL.replace("index.html", "shapes/triangle/triangle.html"))
        }
    })
})

