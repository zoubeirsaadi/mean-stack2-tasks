var express = require ('express');
var path = require ('path'); // File System Path / System module
var bodyParser = require ('body-parser'); //Body-parser va permettre de traiter le contenu POST des requêtes HTTP pour pouvoir l’utiliser

var index = require ('./routes/index');
var tasks = require ('./routes/tasks');

var port = 3000;

var app = express(); //main app

//View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);

app.listen(port, function () {
    console.log('server started on port'+port);
});
