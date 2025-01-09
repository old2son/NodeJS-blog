require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
const port = 5000 || process.env.PORT;

// 设置静态资源路径
app.use(express.static('public'));

// 模板引擎
app.use(expressLayout)
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
