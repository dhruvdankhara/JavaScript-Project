let btn = document.querySelector("#btn");
let copy = document.querySelector(".copy");
let p = document.querySelector("p");


async function getQuote(){
    const url = "https://api.quotable.io/random";
    let response = await fetch(url);
    let data = await response.json();
    p.innerText = `"${data.content}"`;

    const copyToClipboard = (content) => {
        return navigator.clipboard.writeText(content);
    }
    
    copy.addEventListener("click", copyToClipboard(data.content));

}

btn.addEventListener("click", getQuote);



// fetch("https://api.quotable.io/random")
// .then((response) => console.log(response))
// .catch( error => console.error(error));