const express = require('express');
const morgan = require('morgan');
const app = express();


//register view engine
app.set('view engine', 'ejs');
app.set('views', 'views');//2cond argument is the foldrr where the views are

app.listen(3000);

//middleware n static files
app.use(express.static('public'));
app.use(morgan('dev'));

const blogs = [
    {handle: 'blog1', title: 'NDVI calculation and maskinkg Lansat 8 images in Google Earth Engine code editor in JS', snipet: 'This tutorial cover how to apply the NDVI algoritm and masking the results from Landsat 8.', data: 'May 2021'},
    {handle: 'blog2', title: 'Blog prova número 2', snipet: 'Text intro blog numero 2', data: 'May 2021'},
    {handle: 'blog3', title: 'Blog prova número 3', snipet: 'Text intro blog numero 3', data: 'May 2021'}
  ];
  
app.get('/', function (req, res) {
  res.render('index', {blogs: blogs});
}); 

app.get('/about', function (req, res) {
    //res.sendFile('./views/about.html', { root: __dirname });//sense ejs
  res.render('about');
}); 

// blog routes 
app.get('/blog1', function (req, res) {
  res.render('blog1', {blogs: blogs});
});    

app.get('/blog2', function (req, res) {
  res.render('blog2');
});  

app.get('/blog3', function (req, res) {
  res.render('blog3');
});  

/* app.get('/:handle', function (req, res) {
  res.render(`/${req.params.handle}`);
});  
 */
//404 pages !!sempre a sota de totes !!!!
app.use((req, res) => {
    res.status(404).render('404'/* , { title: '404'} */);
     // res.status(404).sendFile('./views/404.html', { root: __dirname});
 });