document.getElementById("button").addEventListener("click", () =>{
    var x = document.getElementById("url").value;
    x = x + "";
    var y = document.getElementById("shortURL");
    // document.getElementById("url").value = "";
    if(x.includes("http://")){
        var t = document.querySelector('.abd');
        
        // document.querySelector('img').src = "Chala-Ja-Bsdk-meme-template-608x608.jpg";
        // t.classList.add('fade-in-image') ;
        return;
    }
    if (x.includes("https://")){
        x = x.substring(8, x.length);
    }
    if(x.includes("www.")){
        x = x.substring(4, x.length);
    }
    x = "https://"+x;
    
    

    console.log(x);
    
    const encodedParams = new URLSearchParams();
encodedParams.append("url", x);

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '572cb6fbbfmsh75d0b64fccb1653p104841jsn4bb45ba66dd8',
		'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://url-shortener-service.p.rapidapi.com/shorten', options)
	.then(response => response.json())
	.then(response => {
        var URL = response.result_url;
        y.innerHTML = URL;
        y.href = URL;
    })
	.catch(err => console.error(err));
    
});

