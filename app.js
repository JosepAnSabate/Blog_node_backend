const express = require('express');
const morgan = require('morgan');
const app = express();


//register view engine
app.set('view engine', 'ejs');
app.set('views', 'views');//2cond argument is the foldrr where the views are

//deploying project
//app.listen(3000);
let port = process.env.PORT;
if (port == null || port == ""){
  port = 4000;
} 
app.listen(port, ()=>{
  console.log('Ap listening...')
}) 
/* http.createServer(onRequest).listen(process.env.PORT || 4000) */
//app.listen(process.env.Port || 3000)

//middleware n static files
app.use(express.static('public'));
app.use(morgan('dev'));

const blogs = [
    {handle: 'blog1', title: 'NDVI calculation and masking Lansat 8 images in Google Earth Engine code editor in JS',
       snipet: 'This tutorial cover how to apply the NDVI algorithm and masking the results from Landsat 8.', data: 'May 2021',
      category1:'JavaScript', category2:"GoogleEarthEngine"
      },
    {handle: 'blog2', title: 'Plotly graphs about SARS-CoV-2 vaccination campaign in Catalunya using Python.', 
      snipet: 'Check out the different interactive graphs about the Catalan vaccination campaign.', data: 'September 2021',
      category1:'Python', category2:"Plotly", 
    },
    {handle: 'blog3', title: 'Mapping of iron-bearing minerals with Sentinel-2 using IAF index in Google Earth Engine code editor in JS.',
       snipet: 'Example of Web Map published using the free deployment of Earth Engine Apps.', data: 'February 2022', code:"https://code.earthengine.google.com/f3ab88798570f25d838642e497f13e72",
       category1:'JavaScript', category2:"GoogleEarthEngine", externalSource:"https://josepandreu995.users.earthengine.app/view/iaf-sentinel-2"
      },
    {handle: 'blog4', title: 'World oil production by country Web map using React Leaflet, React Hooks, GeoJson and Papa Parse.',
       snipet: 'Example of Web Map published using the free deployment of GitHub.', data: 'February 2022', code:"https://github.com/JosepAnSabate/React-Leaflet-World-Oil-Production-Deployment",
       category1:'JavaScript', category2:"React", externalSource:"https://josepansabate.github.io/React-Leaflet-World-Oil-Production-Deployment/"
      }
  ];
  
app.get('/', function (req, res) {
  res.render('index', {blogs: blogs});
}); 

app.get('/category/:id', function (req, res) {
  const id = req.params.id;
  console.log(id);
  res.render('categories', {blogs: blogs, catId:id});
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



/* app.get('/:handle', function (req, res) {
  res.render(`/${req.params.handle}`);
});  
 */

//404 pages !!sempre a sota de totes !!!!
app.use((req, res) => {
    res.status(404).render('404'/* , { title: '404'} */);
     // res.status(404).sendFile('./views/404.html', { root: __dirname});
 });