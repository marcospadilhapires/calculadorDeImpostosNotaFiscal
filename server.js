const express = require('express');
const cors = require('cors');
const nfe = require('nfe-io')('3YpOr6RGiBYx3e4v8cyRonJc07FQk1BHY0GVWGIhE51QQkIj3qNxzkzfW20tyo1ZBFk'); // API Key da NFE.io
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()); 
// Rota para receber os dados da nota fiscal do frontend
app.post('/emitir-nota', async (req, res) => {
    const id = '656ce434fcbaa81a2c464587'; // ID da sua empresa na NFE.io
    const dadosNotaFiscal = req.body;

    try {
        // Chama a função da biblioteca para emitir a nota fiscal
        const resultado = await nfe.serviceInvoices.create(id, dadosNotaFiscal);
        console.log('Nota fiscal emitida com sucesso:', resultado);
        res.json(resultado);
    } catch (error) {
        console.error('Erro ao emitir a nota fiscal:', error);
        res.status(500).send('Erro ao emitir a nota fiscal');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
