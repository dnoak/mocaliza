const axios = require('axios');

const apiUrl = 'http://localhost:8000/api/categories';

async function criarCategoria(nome) {
    try {
        const response = await axios.post(apiUrl, { name: nome });
        console.log('Categoria criada:', response.data);
    } catch (error) {
        console.error('Erro ao criar categoria:', error);
    }
}

async function obterCategoria(id) {
    try {
        const response = await axios.get(`${apiUrl}/${id}`);
        console.log('Categoria encontrada:', response.data);
    } catch (error) {
        console.error('Erro ao obter categoria:', error);
    }
}

async function obterCategorias() {
    try {
        const response = await axios.get(`${apiUrl}`);
        console.log('Categorias encontradas:', response.data);
    } catch (error) {
        console.error('Erro ao obter categorias:', error);
    }
}

async function atualizarCategoria(id, novoNome, novoStatus) {
    try {
        const response = await axios.put(`${apiUrl}/${id}`, { name: novoNome, active: novoStatus });
        console.log('Categoria atualizada:', response.data);
    } catch (error) {
        console.error('Erro ao atualizar categoria:', error);
    }
}

async function deletarCategoria(id) {
    try {
        await axios.delete(`${apiUrl}/${id}`);
        console.log('Categoria deletada.');
    } catch (error) {
        console.error('Erro ao deletar categoria:', error);
    }
}

async function executarOperacoesCrud() {
    // criando categoria de carros
    await criarCategoria('Sedã');
    await criarCategoria('Hatch');
    await criarCategoria('SUV');
    await criarCategoria('Pickup');
    await criarCategoria('Van');
    // removendo categoria por id
    await deletarCategoria(1);
    // atualizando categoria por id
    await atualizarCategoria(2, 'Hatchback', true);
    // obtendo categoria por id
    await obterCategoria(2);
    // obtendo todas as categorias
    await obterCategorias();
}

executarOperacoesCrud();