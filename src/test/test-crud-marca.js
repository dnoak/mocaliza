const axios = require('axios');

const apiUrl = 'http://localhost:8000/api/marca';

async function criarMarca(nome) {
    try {
        const response = await axios.post(apiUrl, { nome });
        console.log('Marca criada:', response.data);
    } catch (error) {
        console.error('Erro ao criar marca:', error);
    }
}

async function obterMarca(id) {
    try {
        const response = await axios.get(`${apiUrl}/${id}`);
        console.log('Marca encontrada:', response.data);
    } catch (error) {
        console.error('Erro ao obter marca:', error);
    }
}

async function obterMarcas() {
    try {
        const response = await axios.get(`${apiUrl}`);
        console.log('Marcas encontradas:', response.data);
    } catch (error) {
        console.error('Erro ao obter marcas:', error);
    }
}

async function atualizarMarca(id, novoNome) {
    try {
        const response = await axios.put(`${apiUrl}/${id}`, { nome: novoNome });
        console.log('Marca atualizada:', response.data);
    } catch (error) {
        console.error('Erro ao atualizar marca:', error);
    }
}

async function deletarMarca(id) {
    try {
        await axios.delete(`${apiUrl}/${id}`);
        console.log('Marca deletada.');
    } catch (error) {
        console.error('Erro ao deletar marca:', error);
    }
}

async function executarOperacoesCrudMarca() {
    // criando marca de carros
    await criarMarca('Toyota');
    await criarMarca('Ford');
    await criarMarca('Honda');
    await criarMarca('Hyundai');
    await criarMarca('Chevrolet');
    // atualizando marca por id
    await atualizarMarca(2, 'Ford Motors');
    // obtendo marca por id
    await obterMarca(2);
    // removendo marca por id
    await deletarMarca(1);
    // obtendo todas as marcas
    await obterMarcas();
}

executarOperacoesCrudMarca();
