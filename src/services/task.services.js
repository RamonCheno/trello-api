const taskModel = require('./../db/models').Tasks;
const categoryModel = require('./../db/models').Category;

class TaskServices {

    constructor() { }

    async find() {
        const res = await taskModel.findAll({
            include: [{ model: categoryModel, required: true }]
        });
        return res;
    }

    async findOne(id) {
        const res = await taskModel.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await taskModel.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }

    async delete(id) {
        const model = await this.findOne(id);
        await model.destroy();
        return { deleted: true };
    }

}

module.exports = TaskServices;