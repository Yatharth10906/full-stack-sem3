const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const filePath = path.join(__dirname, 'products.json');

app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to Inventory System');
});

// GET
app.get('/products', (req, res) => {
    const data = fs.readFileSync(filePath, 'utf8');
    res.send(data);
});

// POST
app.post('/products', (req, res) => {
    const products = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    products.push(req.body);

    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
    res.send('Product added successfully');
});

// PUT
app.put('/products/:id', (req, res) => {
    const products = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const id = Number(req.params.id);
    const index = products.findIndex(p => p.id === id);

    if (index === -1) return res.send('Product not found');

    products[index] = req.body;

    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
    res.send('Product updated successfully');
});

// DELETE
app.delete('/products/:id', (req, res) => {
    let products = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const id = Number(req.params.id);
    products = products.filter(p => p.id !== id);

    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
    res.send('Product deleted successfully');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});