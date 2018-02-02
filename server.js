const express = require('express'), // imports express
errorHandlers = require('./handlers/errorHandlers'),
path = require('path'),
index = require('./routes/index'),
app = express(); // runs express

app.engine('pug', require('pug').__express)
app.set('views', './views'); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too
app.use(express.static(path.join(__dirname, "./docs")));
app.use('/', index);

 
// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// One of our error handlers will see if these errors are just validation errors
app.use(errorHandlers.flashValidationErrors);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
    /* Development Error Handler - Prints stack trace */
    app.use(errorHandlers.developmentErrors);
}

app.use(errorHandlers.productionErrors);

module.exports = app;

// sets port for express server
app.set('port', process.env.PORT || 5000);

// listens on port 3000 and enables server to run
app.listen(app.get('port'), () => {
    console.log( 'Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
}); 