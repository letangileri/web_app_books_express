const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const booksRouter = require('./routes/books')
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})

//Add first route
app.get('/', (req, res)=>{
    res.send('Hellooooo world');
})

app.use('/api/books', booksRouter);