const express = require('express');
const router = express.Router(); // 从 express 获取路由

// 设置路由
router.get('', (req, res) => {
	// res.send('Hello World!');

    const locals = {
        title: 'NodeJs Blog',
        description: 'Simple Blog created by express'
    }

	res.render('index', { locals });
});

router.get('/about', (req, res) => {
	res.render('about');
});

module.exports = router;