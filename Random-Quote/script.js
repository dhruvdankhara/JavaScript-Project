let btn = document.querySelector("#btn")
let p = document.querySelector("p")

async function getQuote(){
    const url = "https://api.quotable.io/random";
    let response = await fetch(url);
    let data = await response.json();
    p.innerText = `"${data.content}"`;
}

btn.addEventListener("click", getQuote);



// fetch("https://api.quotable.io/random")
// .then((response) => console.log(response))
// .catch( error => console.error(error));