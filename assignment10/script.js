let count =0;

async function myfun(url) {
    const response = await fetch(url);
    const data = await response.json();
    count = count + 1;
    console.log("API ("+ count + "):");
    for (let i = 0; i < data.length; i++) {
        if(data[i].name.charAt(0) == 'S') {
            console.log(data[i].name + ",   Address: " + data[i].address + " BG: " + data[i].bloodgroup); 
        }
    }
}

myfun("http://demo0410178.mockable.io/first");
myfun("http://demo0410178.mockable.io/second");
myfun("http://demo0410178.mockable.io/third");

/*

1):
[
    { "name": "Pranav", "address": "Nashik", "bloodgroup": "B+" },
    {"name": "Shinjo", "address": "Pune","bloodgroup": "A+" },
    { "name": "Abhi", "address": "Mumbai", "bloodgroup": "B-" },
    { "name": "Rahul","address": "Delhi", "bloodgroup": "O+" },
    { "name": "Shreyas", "address": "Goa", "bloodgroup": "B+" }
]

2):
[
    { "name": "Samruddhi", "address": "IND", "bloodgroup": "B+" },
    {"name": "Sheetal", "address": "IND","bloodgroup": "A+" },
    { "name": "Sara", "address": "IND", "bloodgroup": "B-" },
    { "name": "James","address": "UK", "bloodgroup": "O+" },
    { "name": "Tom", "address": "US", "bloodgroup": "B+" }
]

3):
[
    { "name": "Sam", "address": "NYC", "bloodgroup": "B+" },
    {"name": "Santiago", "address": "California","bloodgroup": "A+" },
    { "name": "Abhi", "address": "LA", "bloodgroup": "B-" },
    { "name": "Rahul","address": "Paris", "bloodgroup": "O+" },
    { "name": "Stephan", "address": "Denver", "bloodgroup": "B+" }
]

*/
