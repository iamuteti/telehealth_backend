

module.exports = {
    development: {
        url: 'postgres://admin:admin_pass@127.0.0.1/backend_db', //    'postgres://admin:noampostgres4455@127.0.0.1/nodejs_backend_db' "username": "admin",
        dialect: 'postgres'
    },
    production: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres'
    }
}