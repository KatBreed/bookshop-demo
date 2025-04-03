const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Book = sequelize.define('Book', {
    name: { type: DataTypes.STRING, allowNull: false },
    authors: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
    description: { type: DataTypes.TEXT },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    image: { type: DataTypes.STRING },
    publisher: { type: DataTypes.STRING },
    publish_date: { type: DataTypes.DATE },
    ISBN: { 
        type: DataTypes.STRING,
        field: 'isbn'
    },
    format: { type: DataTypes.STRING },
    pages: { type: DataTypes.INTEGER },
    weight: { type: DataTypes.STRING },
    dimensions: { type: DataTypes.STRING },
    synopsis: { type: DataTypes.TEXT }
  }, {
    tableName: 'books',
    timestamps: false
  });

  return Book;
};
