config = {
    PORT: process.env.PORT || 3000,
    DB: 'mongodb://root:123456@ds011735.mlab.com:11735/heroku_5qlb2mfv',
    DB_LOCAL: 'mongodb://localhost/mean_shop_db',
    secret: 'thisisverysevuresecretkey',
    mailer: {
        username: 'username@domain.com',
        password: 'password'
    }
};

module.exports = config;
