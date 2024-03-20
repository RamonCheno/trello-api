const { Model, DataTypes } = require('sequelize');

const CATEGORY_TABLE = 'category';

class Category extends Model{
    static config(sequelize){
        return {
            sequelize,
            tableName: CATEGORY_TABLE,
            modelName: 'Category',
            timestamps: false
        }
    }
    
}

const CategorySchema = {

    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name'
    }
};

module.exports = { Category, CategorySchema };

