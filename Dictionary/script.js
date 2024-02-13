const url = 'https://shakespeare.p.rapidapi.com/shakespeare.json?text=You%20asked%20Mr.%20Weasely%20to%20do%20magic!';
const options = {
	method: 'GET',
	headers: {
		'X-FunTranslations-Api-Secret': '<REQUIRED>',
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'shakespeare.p.rapidapi.com'
	}
};



async function getData(url,options){
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
getData();