let btn = document.querySelector("#btn");
let copy = document.querySelector(".copy");
let p = document.querySelector(".quote");
let loader = document.querySelector(".loader");

function showToolTip() {
    let toolTip = document.querySelector(".tooltip-text");
    toolTip.style.visibility = 'visible';
    setTimeout(function () {
        toolTip.style.visibility = 'hidden';
    }, 2000);
}

async function getQuote(){
    p.style.display = "none";
    loader.style.display = "block";
    const url = "https://api.quotable.io/random";
    let response = await fetch(url);
    let data = await response.json();
    p.innerText = `“${data.content}“`;

    loader.style.display = "none"
    p.style.display = "block";
}

copy.addEventListener("click", () => {
    return navigator.clipboard.writeText(p.innerText);
 });
btn.addEventListener("click", getQuote);
copy.addEventListener("click", showToolTip)

getQuote();


// fetch("https://api.quotable.io/random")
// .then((response) => console.log(response))
// .catch( error => console.error(error));