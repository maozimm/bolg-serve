// 路由集合
module.exports = app => {
	// // 用户
	// app.use('/users', require('./user'));
	// // 分类
	// app.use('/categories', require('./category'));
	// // 文章
	// app.use('/posts', require('./post'));
	// // 评论
	// app.use('/comments', require('./comment'));
	// // 轮播图
	// app.use('/slides', require('./slide'));
	// // 网站设置
	// app.use('/settings', require('./settings'));

	// 其他
	// 用户登录
	app.get('/login', require('./login/login'));
	// 用户注册
	app.post('/register', require('./login/register'));
	// 获取用户信息
	app.get('/user', require('./user/getUser'))
	// 修改用户信息
	app.put('/user/:id', require('./user/modifyUser'))
	// 删除用户
	app.delete('/user/:id', require('./user/deleteUser'))
	// 添加用户
	app.post('/user', require('./user/addUser'))
	// 获取分类
	app.get('/category', require('./category/getCategory'))
	// 获取文章
	app.get('/article', require('./article/getArticle'))
	// // 用户退出
	// app.post('/logout', require('./actions/other/logout'));
	// // 判断用户是否登录
	// app.get('/login/status', require('./actions/other/loginStatus'))
	// // 图片文件上传
	// app.post('/upload', require('./actions/other/upload'));
};