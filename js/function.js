let colorbtn = document.getElementById ("color")
let grisesbtn = document.getElementById ("grises")
let efectobtn = document.getElementById ("efecto")
let imgcambio = document.getElementById ("imgcambio")

colorbtn.onclick = function() {
imgcambio.src = "./img/matu.png";
}

grisesbtn.onclick = function() {
    imgcambio.src = "./img/matu-grises.png";
    }

efectobtn.onclick = function() {
imgcambio.src = "./img/matu-efecto.png";
}
