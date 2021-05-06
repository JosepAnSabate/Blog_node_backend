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

app.get('/', function (req, res) {
  const blogs = [
    {title: 'Blog prova número 1', snipet: 'Text intro blog numero 1'},
    {title: 'Blog prova número 2', snipet: 'Text intro blog numero 2'},
    {title: 'Blog prova número 3', snipet: 'Text intro blog numero 3'}
  ];
  res.render('index', {blogs: blogs});
}); 

app.get('/about', function (req, res) {
    //res.sendFile('./views/about.html', { root: __dirname });//sense ejs
  res.render('about');
}); 



//404 pages !!sempre a sota de totes !!!!
app.use((req, res) => {
    res.status(404).render('404'/* , { title: '404'} */);
     // res.status(404).sendFile('./views/404.html', { root: __dirname});
 });