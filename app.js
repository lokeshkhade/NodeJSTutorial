
const Joi = require('joi');//joi module return a Class and By covention class name start with capital letter
const express = require('express'); //Load express moudule which returns a function express
const app = express(); //express fucntion retuns object of type express,by convention we call the object as app.app object support varios method get,post,put


//To enable parsing of JSON object in the body of request
app.use(express.json());
const courses = [
    { id: 1, name: 'Maths' },
    { id: 2, name: 'English' },
    { id: 3, name: 'Hindi' }
];

// First argument in get fuction is url or path.second parameter is a callback function which is called when we have http request to this endpoint '/'.This req object has bunch of properties ex.re
app.get('/', (req, res) => {
    res.send("Hello World");
});


//To define a parameter we use :id(id is name of parameter)  
// In order to read params we req.params.id
app.get('/api/courses/:id', (req, res) => {

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course)
        res.status(404).send('Course Not Found');
    res.send(course);
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


app.post('/api/courses', (req, res) => {

    const { error } = validateCourse(req.body);
    if (error) {
        res.status(404).send(error.details[0].message);
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});


app.put('/api/courses/:id', (req, res) => {
    //Find Course 
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course)
        res.status(404).send('Course Not Found');


    //Validate Course

    const { error } = validateCourse(req.body);// Object Destructor 

    if (error) {
        res.status(404).send(error.details[0].message);
    }
    //Update Course
    course.name = req.body.name;
    res.send(course);
});

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(course);

}


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);

});