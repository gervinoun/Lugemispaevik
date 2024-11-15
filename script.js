
const url = "https://kool.krister.ee/chat/Lugemispaevik2"
const username = prompt('Mis su nimi on?')
const pagenr = document.querySelector(".lehekulg");
pagenr.innerHTML += '<input placeholder="Lehekülje nr" id="nr"> <br>'
const title = document.getElementById("pealkiri");
const author = document.getElementById("autor");
const kasutajainfo = document.querySelector(".Info")
const submit = document.getElementById("submit")
const leht = document.getElementById("nr")


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
        const kasutaja = item.kasutaja
        if (kasutaja === username) {
            if (loetud === "lõpuni") {
                element.innerHTML += "<p> Autor:" + autor + "<br> Pealkiri:" + pealkiri + "</p> <br>";
            } else {
                element2.innerHTML += "<p> Autor:" + autor + "<br> Pealkiri:" + pealkiri + " <br> Lehekülg:" + loetud + "</p> <br>"; 
            }
        }
    }
}

setInterval(fetchMessages, 3000)

submit.addEventListener("click", function (event) {
    if (checkbox.checked) {
        const message = { kasutaja: username, pealkiri: title.value, autor: author.value, jarjekord: "lõpuni" };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),

    })} else {
        const message1 = { kasutaja: username, pealkiri: title.value, autor: author.value, jarjekord: leht.value };
        fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(message1),
          });
    }
});

  







