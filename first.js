//FOR WRITING DATA TO LOCAL FILE
//USE OF REQUIRE FUNCTION TO IMPORT FILE SYSTEM MODULE
const fs = require('fs');
fs.writeFile('output.txt', 'WritingFile', (err)=>{
    if (err) throw err;
    else console.log('error doesn\'t exist, file created successfully');

})