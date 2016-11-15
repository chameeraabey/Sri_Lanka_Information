var express=require('express');

var app=express();//app has all the methods of express

app.set('view engine','ejs');

var routes=require('./routes');

var path=require('path');
app.use(express.static(path.join(__dirname,'public')));

//Routes

//Home route
app.get('/',routes.home);

//Single route
app.get('/visit/:visit_no?',routes.single);

//Page not found route
app.get('*',routes.notFound);

//console.log('Hello');

//Tell app to listen on a specific port
app.listen(process.env.PORT || 3000);