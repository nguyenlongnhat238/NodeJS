
const config = {
    user: 'sa',
    password: '230801',
    server: 'localhost',
    database: 'Northwind',
    extra: {
        trustServerCertificate: true,
        trustedConnection: true,
        connectionString: "Data Source=NLN-KEN;database=Northwind;Integrated Security=True"
    },
    port: 55892,
};


module.exports = config;