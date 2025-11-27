export function testarAPI(req, res) {
    res.json({
        ok: true,
        mensagem: "API de mensagens operacional."
    });
}
