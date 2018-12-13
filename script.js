document.querySelector("#beholder").addEventListener("click", showmenu);
document.querySelector("#luk").addEventListener("click", hidemenu);

function showmenu() {
    console.log("showmenu");
    document.querySelector("#header").classList.add("hide");
    document.querySelector("#menu").classList.remove("hide");
}
function hidemenu() {
    console.log("hidemenu");
    document.querySelector("#header").classList.remove("hide");
    document.querySelector("#menu").classList.add("hide");
}

