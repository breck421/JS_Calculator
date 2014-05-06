exports.index = function (req, res) {
	res.render('calc.html', {
		title: 'Calculator'
	});
};