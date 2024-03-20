const { Category, CategorySchema } = require("./category.model");
const { Task, TaskSchema } = require("./task.model");

function setUpModels(sequelize) {
    Category.init(CategorySchema, Category.config(sequelize));
    Task.init(TaskSchema, Task.config(sequelize));
    Task.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
    Category.hasMany(Task, { foreignKey: 'categoryId', as: 'tasks' });
}


module.exports = setUpModels;