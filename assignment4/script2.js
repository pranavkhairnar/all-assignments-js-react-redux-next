// using new keyword

const programmer0 = new Object();
programmer0.firstName = "Pranav";
programmer0.lastName = "Khairnar";
programmer0.age = 21;
programmer0.education = "B.E.";

console.log("Created object using new keyword: \n");
console.log("Programmer's name: " + programmer0.firstName + " " + programmer0.lastName);
console.log("Programmer's age: " + programmer0.age);
console.log("Programmer's Education: " + programmer0.education);


// using an object literal

const programmer1 = {
    firstName:"shinjo", 
    language:"cpp", 
    age:20, 
    rating:1600
};

console.log("Created object using an object literal: \n");
console.log("Programmer's name: " + programmer1.firstName);
console.log("Programmer's favourite language: " + programmer1.language);
console.log("Programmer's age: " + programmer1.age);
console.log("Programmer's coding rating: " + programmer1.rating);
