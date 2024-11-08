const url = "https://kool.krister.ee/chat/Lugemispaevik1"
const username = prompt('Mis su nimi on?')
const pagenr = document.querySelector(".lehekulg");
const title = document.getElementById("pealkiri");
const author = document.getElementById("autor");
const kasutajainfo = document.querySelector(".Info")
const submit = document.getElementById("submit")


pagenr.innerHTML += '<input placeholder="Lehekülje nr"> <br>'
let checkbox = document.getElementById("Loetud");
checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        pagenr.innerHTML = "";
    } else {
        pagenr.innerHTML += '<input placeholder="Lehekülje nr" id="nr"> <br>'
    }
});

const nr = document.getElementById("nr");

kasutajainfo.innerHTML = "";
kasutajainfo.innerHTML += `<h2>Tere, ${username}!</h2>`;

async function fetchMessages() {
    const response = await fetch(url);
    const data = await response.json();
    const element = document.getElementById("loetud_raamatud");
    const element2 = document.getElementById("lugemata");

    element.innerHTML = "";
    element2.innerHTML = "";
    for (const item of data) {
        const pealkiri = item.pealkiri;
        const autor = item.autor;
        const loetud = item.jarjekord
        if (checkbox.checked) {
            element.innerHTML += "<p>" + autor + ": " + pealkiri + " Lõpuni loetud </p> <br>";
        } else {
            element.innerHTML += "<p>" + autor + ": " + pealkiri + "  " + loetud + "</p> <br>";
        }
    }
}

setInterval(fetchMessages, 3000)

submit.addEventListener("click", function (event) {
    const message = { kasutaja: username, pealkiri: title.value, autor: author.value, jarjekord: pagenr.value };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });

  })

  







