Promise.all([
	fetch("http://demo0410178.mockable.io/first"),
	fetch("http://demo0410178.mockable.io/second"),
    fetch("http://demo0410178.mockable.io/third")
]).then(function (responses) {
	return Promise.all(responses.map(function (response) {
		return response.json();
	}));
}).then(function (data) {
    for(let ind=0; ind<data.length; ind++) {
        let c = ind+1;
        console.log("API (" + c + "):");
        for (let i = 0; i < data[ind].length; i++) {
            if(data[ind][i].name.charAt(0) == 'S') {
                console.log(data[ind][i].name + ",   Address: " + data[ind][i].address + " BG: " + data[ind][i].bloodgroup); 
            }
        }
    }
}).catch(function (error) {
	console.log(error);
});