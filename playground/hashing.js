const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

let password = '23155swad!';


bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash)
    })
})


let hashedPassword = '$2a$10$ev1XCQbrFAMy3dijX6MnrufAykJqjE54dVefu7KqpYJPwJcRnx0sm';


bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
})



// let data = {
//     id: 10
// };


// let token = jwt.sign(data, 'abc123');

// let decoded = jwt.verify(token, 'abc123');


// console.log(token);

// console.log('Decoded: ', decoded);




// let message = 'i am user number 1';
// let hash = SHA256(message).toString();


// console.log(`Message: ${message}`);
// console.log(`Hashed Message: ${hash}`);


// let data = {
//     id: 4
// }

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash){
//     console.log('Data was not changed');
// }else{
//     console.log('data was changed. do not trust');
// }