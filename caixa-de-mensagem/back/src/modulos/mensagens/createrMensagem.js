const sql = require('mssql');
const { connectDB } = require('../../config/banco.js');

async function criarMensagem(mensagem) {
    try {
        const pool = await connectDB();

        const result = await pool.request()
            .input('mensagem', sql.VarChar(sql.MAX), mensagem)
            .query(`
                INSERT INTO CaixaMensagens (mensagem)
                OUTPUT INSERTED.idMensagens
                VALUES (@mensagem)
            `);

        const id = result.recordset[0].idMensagens;

        console.log("Nova mensagem criada! ID =", id);
        return id;

    } catch (error) {
        console.error("Erro ao criar mensagem:", error);
        throw error;
    }
}

module.exports = { criarMensagem };
