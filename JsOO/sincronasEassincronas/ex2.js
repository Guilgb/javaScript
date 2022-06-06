// Time out
setTimeout(function(){
    console.log('1 segundo de delay');
}, 3000)

// callback

const https = require('https');
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2';

https.get(API, red => {
    console.log('anda');
})
console.log('Conectando')