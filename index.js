// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./db');
const Product = require('./models/product'); 
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port' ${PORT}`);
});

const insertProducts = async () => {
const productList = [
    { id: 1, name: 'Dog Food', description: 'sample dog product', price: 25, category: 'petfood', rating : 1, availability: 10, imageUrl: 'dog-food.jpg' },
    { id: 2, name: 'Cat Food',  description: 'sample cat product', price: 15, category: 'petfood' ,  rating : 2, availability: 12, imageUrl: 'cat-food.jpeg'},
    { id: 3, name: 'Fish Food',  description: 'sample fish product', price: 50, category: 'petfood' ,   rating : 3, availability: 20,imageUrl: 'fishfood.jpg'},
    { id: 4, name: 'Bird Food',  description: 'sample bird product', price: 25, category: 'petfood' ,  rating : 4, availability: 5, imageUrl: 'birdfood.jpeg'},
    { id: 5, name: 'Dog Medicine', description: 'sample dog product', price: 25, category: 'petmedicine', rating :1, availability: 10, imageUrl: 'dogmedi.jpeg' },
    { id: 6, name: 'Dog Syrup Medicine',  description: 'sample dog product', price: 15, category: 'petmedicine' ,  rating : 2, availability: 20, imageUrl: 'dogmedipowder.jpg'},
    { id: 7, name: 'Bird Medicine',  description: 'sample bird product', price: 50, category: 'petmedicine' ,   rating : 3, availability: 40,imageUrl: 'birdmedicine.jpg'},
    { id: 8, name: 'Fish Medicine',  description: 'sample fish product', price: 25, category: 'petmedicine' ,  rating : 4, availability: 20, imageUrl: 'fishmedi1.jpeg'},
    { id: 9, name: 'Bird Cage', description: 'sample bird product', price: 25, category: 'petaccessories', rating : 1, availability: 30, imageUrl: 'bird-cage.jpeg' },
    { id: 10, name: 'Dog Cannel',  description: 'sample dog product', price: 15, category: 'petaccessories' ,  rating : 2, availability: 15, imageUrl: 'dogcannel.jpg'},
    { id: 11, name: 'Small Dog Cannel',  description: 'sample bird product', price: 50, category: 'petaccessories' ,   rating : 3, availability: 12,imageUrl: 'petcomb.jpg'},
    { id: 12, name: 'Cat Bed',  description: 'sample cat bed product', price: 25, category: 'petaccessories' ,  rating : 4, availability: 18, imageUrl: 'catbed.jpg'},
    { id: 13, name: 'Dog Toy', description: 'sample dog product', price: 25, category: 'pettoys', rating : 1, availability: 12, imageUrl: 'dogtoy.jpeg' },
    { id: 14, name: 'Cat Toy',  description: 'sample cat product', price: 15, category: 'pettoys' ,  rating : 2, availability: 10, imageUrl: 'cattoy.jpeg'},
    { id: 15, name: 'Bird Toy',  description: 'sample bird product', price: 50, category: 'pettoys' ,   rating : 3, availability: 19,imageUrl: 'birdtoy.jpeg'},
    { id: 16, name: 'Fish Toy',  description: 'sample fish product', price: 25, category: 'pettoys' ,  rating : 4, availability: 21, imageUrl: 'fishtoy.jpeg'}
];

for (let product of productList) {
    const { id } = product;
    const existingProduct = await Product.findOne({ id });

    if (!existingProduct) {
        await Product.create(product);
    }
}
};

connectDB().then(insertProducts);

module.exports = connectDB;