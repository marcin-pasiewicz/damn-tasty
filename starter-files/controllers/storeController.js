exports.myMiddleware = (req, res, next) => {
    req.name = 'Marcin';
    next()
};

exports.homePage = (req, res) => {
    res.render('index');
};