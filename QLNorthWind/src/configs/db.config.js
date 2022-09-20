
var config = {
    "server": "localhost",
    "authentication": {
        "type": "default",
        "options": {
            "userName": "sa",
            "password": "230801"
        }
    },
    "options": {
        "port": 1433,
        "database": "Northwind",
        "trustServerCertificate": true
    }
}

module.exports = config;