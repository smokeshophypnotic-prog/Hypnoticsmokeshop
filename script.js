const products = [
    { name: "New Arrivals", img: "images/new-arrivals.jpeg", link: "new.html" },
    { name: "Geekbar", img: "images/Geekbar-main.jpeg", link: "geekbar.html" },
    { name: "Off Stamp", img: "images/Off-Stamp-main.jpeg", link: "offstamp.html" },
    { name: "Raz", img: "images/raz.jpeg", link: "raz.html" },
    { name: "Liquor", img: "images/Liquor logo-main.jpg", link: "liquor.html" },
    { name: "Pods", img: "images/pods.jpeg", link: "pods.html" },
    { name: "Hookah", img: "images/hookah.jpeg", link: "hookah.html" },

    { name: "Blue Razz Ice", img: "images/BlueRazzIce.jpeg", link: "geekbar.html" },
    { name: "Mexico Mango", img: "images/mexico-mango-geek-bar.jpeg", link: "geekbar.html" }
];

function searchSite(){
    let input = document.getElementById("search").value.toLowerCase();
    let results = document.getElementById("results");

    if(input === ""){
        location.reload();
        return;
    }

    let filtered = products.filter(p =>
        p.name.toLowerCase().includes(input)
    );

    results.innerHTML = "";

    filtered.forEach(p => {
        results.innerHTML += `
            <a class="card" href="${p.link}">
                <img src="${p.img}">
                <h2>${p.name}</h2>
            </a>
        `;
    });
}

function zoom(img){
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalImg").src = img.src;
}

function closeZoom(){
    document.getElementById("modal").style.display = "none";
}