import pool from './scr/config/banco.js';


async function testarConexao() {
    try {
        const res = await pool.query('SELECT NOW()');
        console.log('Conexão bem-sucedida:', res.rows[0]);
    }
    catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    }
    finally {
        await pool.end();
    }
}

testarConexao();