//FOR WRITING DATA TO LOCAL FILE
const fs = require('fs');
fs.writeFile('output.txt', 'WritingFile', (err)=>{
    if (err) throw err;
    else console.log('error doesn\'t exist, file created successfully');

})