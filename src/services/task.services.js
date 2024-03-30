const taskModel = require('./../db/models').Tasks;
const categoryModel = require('./../db/models').Category;

class TaskServices {

    constructor() { }

    async find() {
        const res = await taskModel.findAll({
            include: categoryModel
        });
        return res;
    }

    // async findByComplete(value) {
    //     const res = await taskModel.findAll({
    //         where: {
    //             complete: value
    //         },
    //         include: [
    //             {
    //                 model: categoryModel
    //             }
    //         ]
    //     });
    //     return res;
    // }


    async findId(id) {
        const res = await taskModel.findByPk(id, {
            include: categoryModel
        });
        return res;
    }

    async create(data) {
        const res = await taskModel.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findId(id);
        if (model !== null) {
            const res = await model.update(data);
            return {updated: true, res};
        } else {
            return false
        }

    }

    async delete(id) {
        const model = await this.findId(id);
        if (model !== null) {
            await model.destroy();
            return { deleted: true };
        } else {
            return false;
        }

    }

}

module.exports = TaskServices;