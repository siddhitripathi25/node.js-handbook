const http = require('http');
function requestListener(req, res) {
    console.log(req);
}
const server = http.createServer(requestListener);  //WE ARE NOT CALLING THE FUNCTION, WE ARE PASSING ITS REFERENCE, SO IT WILL BE CALLED WHENEVER REQUEST IS MADE.
//THIS HTTP SERVER RETURNS A SERVER OBJECT, SO WE CAN CALL LISTEN METHOD ON IT.
const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is listening on address http://localhost:${PORT}`);
});  //3000 is port number, we can use any port number, but it should be greater than 1024 and less than 65535.

//THIS LISTEN METHOD CAN TAKE 3 ARGUMENTS, PORT NUMBER, HOSTNAME, CALLBACK FUNCTION. CALLBACK FUNCTION IS OPTIONAL. IF WE DON'T PROVIDE IT, IT WILL NOT THROW ERROR, BUT IT WON'T EXECUTE ANYTHING WHEN SERVER STARTS LISTENING.
//WE CAN ALSO PROVIDE HOSTNAME, BUT IT IS OPTIONAL. IF WE DON'T PROVIDE IT, IT WILL DEFAULT TO 'localhost'. SO WE CAN JUST PROVIDE PORT NUMBER AND CALLBACK FUNCTION.
//Also, we can provide hostname as '