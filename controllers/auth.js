const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('64b9666cf18e5f2a0817b80b')
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
  
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};
