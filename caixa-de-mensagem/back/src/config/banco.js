require('dotenv').config();
const sql = require('mssql');

const config = {
    user: process.env.DB_USERSQL,
    password: process.env.DB_PASSSQL,
    server: process.env.DB_HOSTSQL,
    database: process.env.DB_NAMESQL,
    port: Number(process.env.DB_PORTSQL),
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

async function connectDB() {
    try {
        const pool = await sql.connect(config);
        console.log('Conectado ao SQL Server!');
        return pool;
    } catch (err) {
        console.error('Erro ao conectar:', err);
    }
}

connectDB(); // 👈 ADICIONE ISSO

module.exports = { connectDB };

