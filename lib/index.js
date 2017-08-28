exports.utf8JSON = function(req, res, next) {
    res.set('Content-Type', 'application/json; charset=utf-8'); 
    next();
};

exports.logger = function(req, res, next) {
    console.log(req.url);
    next();
};
