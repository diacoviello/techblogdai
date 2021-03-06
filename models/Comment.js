const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// TODO: YOUR CODE HERE


class Comment extends Model {}

Comment.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: false,
  },
},
    {
        sequelize
    }
);

module.exports = Comment;
