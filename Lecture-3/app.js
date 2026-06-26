const http = require('http');
function requestListener(req, res) {
    console.log(req);
}
http.createServer(requestListener);  //WE ARE NOT CALLING THE FUNCTION, WE ARE PASSING ITS REFERENCE, SO IT WILL BE CALLED WHENEVER REQUEST IS MADE.