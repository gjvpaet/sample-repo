const fs = require('fs');

fs.readFile('basic.html', 'utf8', (err, data) => {
    if (err) {
        console.log('err: ', err);
    }
    console.log('data: ', data);
});