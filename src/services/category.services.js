const categoryModel = require('./../db/models').Category;

class CategoryServices {

    constructor() { }

    async find() {
        const res = await categoryModel.findAll();
        return res;
    }

    async findOne(id) {
        const res = await categoryModel.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await categoryModel.create(data);
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

module.exports = CategoryServices;