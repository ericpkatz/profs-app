const port = process.env.PORT || 3000;

require('./app').listen(port, ()=> console.log(`listening on port ${port}`));
