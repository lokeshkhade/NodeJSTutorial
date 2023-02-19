const express = require('express'); //Load express moudule which returns a function express
const app = express(); //express fucntion retuns object of type express,by convention we call the object as app.app object support varios method get,post,put


// First argument in get fuction is url or path.second parameter is a callback function which is called when we have http request to this endpoint '/'.This req object has bunch of properties ex.re
app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});