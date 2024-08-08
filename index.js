const a = document.querySelector("#navbarbars");
a.addEventListener("click", deneme);
let b = 0;
const c = document.querySelector(".mobilmenu")
const d = document.querySelector(".mobilliste")
function deneme (e) {
    e.preventDefault();
    if (b==0) {
        c.classList.remove("invisible")
        d.classList.remove("invisible")
        b++;
    }
    else {
        c.classList.add("invisible");
        d.classList.add("invisible");
        b--;
    }
}