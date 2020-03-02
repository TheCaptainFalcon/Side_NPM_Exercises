// Install the faker package
// Read the faker docs and figure out how it works
// Use Faker to print out 10 random product names and prices

// NPM install node, express, nodemon, faker

const faker = require ('faker');
const express = require('express');
app = express();

app.listen(6000, () => {
});


console.log('==================');
console.log('WELCOME TO MY SHOP!');
console.log('==================');

function printer() {
    for(let x = 0; x < 10; x++) {
        // For general purpose, this code is sufficient
    //    console.log(faker.fake("{{commerce.productName}}, {{commerce.price}}")) 

       // To add character modifications - use this code
       console.log(faker.commerce.productName() + ' - $' + faker.commerce.price());
    }  
};

printer();

