const taskServices = require("../services/task.services");

const services = new taskServices();

const create = async (req, res) => {
    try {
        const response = await services.create(req.body);
        res.json({ success: true, data: response });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

const getAll = async (req, res) => {
    try {
        const response = await services.find();
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await services.findOne(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.messagge });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await services.update(id, body);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

const _delete = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await services.delete(id);

        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports = {
    create, getAll, getById, update, _delete
};