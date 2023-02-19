const express = require('express'); //Load express moudule which returns a function express
const app = express(); //express fucntion retuns object of type express,by convention we call the object as app.app object support varios method get,post,put


// First argument in get fuction is url or path.second parameter is a callback function which is called when we have http request to this endpoint '/'.This req object has bunch of properties ex.re
app.get('/', (req, res) => {
    res.send("Hello World");
});

<<<<<<< Updated upstream
app.listen(3000, () => {
    console.log("listening on port 3000");
=======
//To define a parameter we use :id(id is name of parameter)  
// In order to read params we req.params.id
app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});
//Multiple parameter
// localhost:3000/api/courses/2023/1
app.get('/api/courses/:year/:month', (req, res) => {
    res.send(req.params);
});
//QuerString : To read query params we use req.query
//localhost:3000/api/courses/2023/1?sortBy=name
app.get('/api/courses/:year/:month', (req, res) => {
    res.send(req.query);
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
>>>>>>> Stashed changes
});