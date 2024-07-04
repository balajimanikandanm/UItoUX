const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('product_db', 'postgres', 'balaji', {
  host: 'localhost',
  dialect: 'postgres', 
});

const ProductList = sequelize.define('ProductList', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ProductName: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  Price: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  TopRated: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  SpecialOffer: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  BestSeller: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  Reviews: {
    type: DataTypes.STRING(50)
  }
}, {
  tableName: 'ProductList',
  timestamps: false 
});

sequelize.sync()
  .then(() => {
    console.log('ProductList table synced');
  })
  .catch(err => {
    console.error('Error syncing ProductList table:', err);
  });

module.exports = ProductList;
