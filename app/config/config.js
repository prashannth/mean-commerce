config = {
    PORT: process.env.PORT || 3000,
    DB: 'mongodb://admin:meanmarket@ds011495.mlab.com:11495/heroku_3dbf9l41',
    DB_LOCAL: 'mongodb://localhost/mean_shop_db',
    secret: 'thisisverysevuresecretkey',
    mailer: {
        username: 'username@domain.com',
        password: 'password'
    }
};

module.exports = config;
