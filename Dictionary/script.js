const url = 'https://translated-mymemory---translation-memory.p.rapidapi.com/get?langpair=en%7Cit&q=Hello%20World!&mt=1&onlyprivate=0&de=a%40b.c';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
	}
};

async function getData(url,options){
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
getData();