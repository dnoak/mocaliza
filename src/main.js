const express = require('express');
const bodyParser = require('body-parser');

const { Database } = require('./configs/sequelize');
const { CategoryController } = require('./controllers/category-controller.js');
const { MarcaController } = require('./controllers/marca-controller.js');

const db = Database.getInstance();

const app = express();
const categoryController = new CategoryController();
const marcaController = new MarcaController();

app.use(bodyParser.json());

app.get('/api/categories', async (req, res) => {
	const categories = await categoryController.index();
	res.json({
		data: categories
	});
});

app.get('/api/marca', async (req, res) => {
	const marcas = await marcaController.index();
	res.json({
		data: marcas
	});
});

app.get('/api/categories/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	const category = await categoryController.show(id);
	res.json({
		data: category,
	});
});

app.get('/api/marca/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	const marca = await marcaController.show(id);
	res.json({
		data: marca,
	});
});

app.post('/api/categories', async (req, res) => {
	const categoryDto = {
		name: req.body.name,
		active: true,
	};
	const category = await categoryController.store(categoryDto);
	res.status(201);
	res.json({
		data: category
	});
});

app.post('/api/marca', async (req, res) => {
	const marcaDto = {
		id: req.body.id,
		nome: req.body.nome,
	};
	const marca = await marcaController.store(marcaDto);
	res.status(201);
	res.json({
		data: marca
	});
});


app.delete('/api/categories/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	try {
		await categoryController.destroy(id);
		res.status(204);
		res.end();
	} catch (e) {
		res.status(404);
		res.json({
			error: e,
		});
	}
});

app.delete('/api/marca/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	try {
		await marcaController.destroy(id);
		res.status(204);
		res.end();
	} catch (e) {
		res.status(404);
		res.json({
			error: e,
		});
	}
});

app.put('/api/categories/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	const categoryDto = {
		name: req.body.name,
		active: req.body.active,
	};
	try {
		const category = await categoryController.update(id, categoryDto);
		res.json({
			data: category,
		});
	} catch (e) {
		res.status(404);
		res.json({
			error: e,
		});
	}
});

app.put('/api/marca/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	const marcaDto = {
		id: req.body.id,
		nome: req.body.nome,
	};
	try {
		const marca = await marcaController.update(id, marcaDto);
		res.json({
			data: marca,
		});
	} catch (e) {
		res.status(404);
		res.json({
			error: e,
		});
	}
});


app.listen(8000, async () => {
	await db.sync();
	console.log('Server is running on port 8000!');
});
