const url = "https://kool.krister.ee/chat/Lugemispaevik"
// const username = prompt('Mis su nimi on?')
const pagenr = document.querySelector(".lehekulg");
const pealkiri = document.getElementById("pealkiri");
pagenr.innerHTML += '<input placeholder="Lehekülje nr"> <br>'
const kasutajainfo = document.getElementById("Info")

let checkbox = document.getElementById("Loetud");
checkbox.addEventListener( "change", () => {
    if ( checkbox.checked ) {
        pagenr.innerHTML = "";   
    } else {
        pagenr.innerHTML += '<input placeholder="Lehekülje nr"> <br>'
    }
});

kasutajainfo.innerHTML = "";
kasutajainfo.innerHTML += `<h2>Tere, ${username}!</h2>`;