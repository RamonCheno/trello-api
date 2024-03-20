const { Model, DataTypes } = require('sequelize');

const TASK_TABLE = 'task';

class Task extends Model{
    static config(sequelize){
        return {
            sequelize,
            tableName: TASK_TABLE,
            modelName: 'Task',
            timestamps: false
        }
    }
}

const TaskSchema = {

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
    },
    categoryId:{
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'category',
            key: 'id'
        }
    }
};

module.exports = { Task, TaskSchema };

