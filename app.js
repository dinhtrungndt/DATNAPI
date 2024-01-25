var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const testRouter = require('./routes/api');
const postnewsRouter = require('./routes/PostnewsApi.js');
const NotificationRouter = require('./routes/NotificationAPI');
const BrandRouter = require('./routes/BrandApi');
const chatsRouter = require('./routes/chatApi.js');
const categoryRouter = require('./routes/CategoryApi.js');
const typesRouter = require('./routes/TypesApi.js');
const adRouter = require('./routes/AdApi');
const SaveRouter = require('./routes/SaveAPi.js');


var app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

require('./config/DBConnection')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/public", express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send("hello world");
});

//tạo đường dẫn tới file trong router
app.use('/api', testRouter);
app.use('/api/Notification', NotificationRouter)
app.use('/api/postnews', postnewsRouter);
app.use('/api/brands', BrandRouter);
app.use('/api/ads', adRouter);
app.use('/api/chat', chatsRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/types', typesRouter);
app.use('/api/save', SaveRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));

});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
