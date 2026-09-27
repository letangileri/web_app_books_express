const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const booksRouter = require('./routes/books')
const notFound = require('./middleware/notFound')
const serverError = require('./middleware/serverError')


//we need he static assets for the image upload feature
app.use(express.static('public'));
// middleware to parse JSON bodies for the reviews submission feature
app.use(express.json());


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})

//Add first route
app.get('/', (req, res)=>{
    res.send('Hellooooo world');
})
// middleware for books router
app.use('/api/books', booksRouter);

// middleware handle server error
app.use(serverError);

//Middleware 404
app.use(notFound);




