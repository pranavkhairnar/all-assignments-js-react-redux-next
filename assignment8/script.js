let count = 0;

function namesWithS(url) {
    fetch(url)
    .then(function(response){
        return response.json();
    }).then(function(response){
        count= count+1;
        console.log("API ("+count+"):");
        let data = response;
        for (let i = 0; i < data.length; i++) {
            if(data[i].name.charAt(0) == 'S') {
                console.log(data[i].name + ",   Address: " + data[i].address + " BG: " + data[i].bloodgroup); 
            }
        }
    });
}


namesWithS("http://demo0410178.mockable.io/first");

namesWithS("http://demo0410178.mockable.io/second");

namesWithS("http://demo0410178.mockable.io/third");


