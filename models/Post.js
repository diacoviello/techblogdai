const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// TODO: YOUR CODE HERE
class Post extends Model {

}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: false
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: false
        }
    },
    {
        sequelize
    }
)

module.exports = Post;
