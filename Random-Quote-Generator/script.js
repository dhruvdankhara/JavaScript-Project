let btn = document.querySelector("#btn");
let copy = document.querySelector(".copy");
let p = document.querySelector("p");

function showToolTip() {
    let toolTip = document.querySelector(".tooltip-text");
    toolTip.style.visibility = 'visible';
    setTimeout(function () {
        toolTip.style.visibility = 'hidden';
    }, 2000);
}

async function getQuote(){
    const url = "https://api.quotable.io/random";
    let response = await fetch(url);
    let data = await response.json();
    p.innerText = `"${data.content}"`;
}

copy.addEventListener("click", () => {
    return navigator.clipboard.writeText(p.innerText);
});
btn.addEventListener("click", getQuote);
copy.addEventListener("click", showToolTip)




// fetch("https://api.quotable.io/random")
// .then((response) => console.log(response))
// .catch( error => console.error(error));