const express = require('express');
const Router = express.Router();
const connection = require('../database/connection')

// list of books
Router.get('/', (req,res)=>{
    const sql='SELECT * FROM books'
    connection.query(sql,(err,results)=>{
        if(err) return res.status(500).json({error:err.message})
            console.log(results);
            
    res.json({books:results})
    })
})
//api/books
// single book
Router.get('/:id', (req, res)=>{
    const sql = 'SELECT * FROM books WHERE id = ?'
    const reviewsSql ='SELECT * FROM reviews WHERE book_id = ?'


    const bookId = Number(req.params.id);
    console.log(sql, bookId);
    
    connection.query(sql,[bookId], (err, results)=>{
        if(err) return res.status(500).json({error:err.message})
            console.log(results);    
        if(results.length==0){
            return res.status(404).json({message:'book not found'})
        }


    connection.query(reviewsSql, [bookId], (reviewsErr, reviewsResults)=>{
       if(reviewsErr) return res.status(500).json({error:reviewsErr.message})
            console.log(reviewsResults);    
        const thisBooks = {...results[0], reviews:reviewsResults}
        res.json(thisBooks)
    })

    })
})

module.exports = Router;