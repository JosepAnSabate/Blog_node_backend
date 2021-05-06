const express = require('express');
const app = express();

//register view engine
app.set('view engine', 'ejs');
app.set('views', 'myviews');//2cond argument is the foldrr where the views are

app.listen(3000);

app.get('/', function (req, res) {
  res.sendFile('./views/index.html', { root: __dirname });
}); 

app.get('/about', function (req, res) {
    res.sendFile('./views/about.html', { root: __dirname });
  }); 

//redirect

app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

//404 pages !!sempre a sota de totes !!!!
app.use((req, res) => {
    //res.status(404).render('404', { title: '404'});
     // res.status(404).sendFile('./views/404.html', { root: __dirname});
 });