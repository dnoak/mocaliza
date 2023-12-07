const { Marca } = require('../models/marca'); // Certifique-se de que o caminho está correto

class MarcaController {
    async index() {
        return await Marca.findAll();
    }
    
    async show(id) {
        return await Marca.findOne({ 
            where: { id: id }
        });
    }
    
    async store(marcaDto) {
        const marca = await Marca.create(marcaDto);
        await marca.save();
        return marca;
    }
    
    async update(id, marcaDto) {
        const marca = await Marca.findOne({ 
            where: { id: id }
        });

        if (!marca) {
            throw Error("Marca not found!");
        }

        marca.nome = marcaDto.nome;
        await marca.save();
        
        return marca;
    }
    
    async destroy(id) {
        const marca = await Marca.findOne({ 
            where: { id: id }
        });
        
        if (!marca) {
            throw Error("Marca not found!");
        }
        
        await marca.destroy();
    }
}

module.exports = { MarcaController }
