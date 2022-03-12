const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread.js');


// INDEX
breads.get('/', (req, res) => {
  res.render('index',
    {
      breads: Bread,
      title: 'Index Page'
    }
  )
})

// NEW
breads.get('/new', (req, res) => {
  res.render('new');
});

// EDIT
breads.get('/:indexArray/edit', (req, res) => {
  res.render('edit', {
    bread: Bread[req.params.indexArray],
    index: req.params.indexArray
  })
}) 

// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex],
      index: req.params.arrayIndex,
    })
  } else {
    res.render('404')
  }
})

// CREATE
breads.post('/', (req, res) => {
  const hasImage = req.body.image;
  if(!hasImage){
    req.body.image = 'https://media.istockphoto.com/photos/delicious-homemade-sourdough-rye-bread-on-a-plate-and-milk-homemade-picture-id1125389587?k=20&m=1125389587&s=612x612&w=0&h=ZPZojCIPTYhKheU6C2DSSo2FIlomVt9cruAwxjP4fUA='
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGlutten = false
  }
  Bread.push(req.body)
  res.redirect('/breads')
})

// DELETE
breads.delete('/:indexArray', (req, res) => {
  Bread.splice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
})

// UPDATE
breads.put('/:arrayIndex', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.arrayIndex] = req.body
  res.redirect(`/breads/${req.params.arrayIndex}`)
})



module.exports = breads;