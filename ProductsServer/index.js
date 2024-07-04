const express = require('express');
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser');
const productListRoutes = require('./routes/productList');
require('dotenv').config(); 


const sequelize = new Sequelize('product_db', 'postgres', 'balaji', {
  host: 'localhost',
  dialect: 'postgres',
});

const app = express();

app.use(bodyParser.json());

app.use('/api', productListRoutes);

const PORT = process.env.DB_PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Connected to the database');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
