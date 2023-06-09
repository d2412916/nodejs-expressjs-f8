const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override')
const handlebars = require('express-handlebars');


const route = require('./routes');
const db = require('./config/db');


// const sass = require('node-sass');
// const fs = require('fs');

// sass.render({
//   file: __dirname + '/resources/scss/app.scss',
//   outputStyle: 'compressed'
// }, (err, result) => {
//   if (err) throw err;
//   fs.writeFileSync(__dirname + '/public/css/styles.css', result.css);
// });

//connect to db
db.connect();

const app = express();
const port = 3000;

const { execPath } = require('process');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(methodOverride('_method'));


//HTTP logger
// app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// console.log('PATH: ', path.join(__dirname, 'resource/views'))
route(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
})