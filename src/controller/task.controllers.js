const taskServices = require("../services/task.services");

const services = new taskServices();

const create = async (req, res) => {
    // #swagger.tags = ["Task"]
    /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Datos para nuevo registro',
        schema:{
            $ref: '#/definitions/AddTask'
        }
    } */

    try {
        const response = await services.create(req.body);
        res.status(201).json({ success: true, data: response });
        /* #swagger.responses[201] = {
            description: 'Registro de nueva tarea',
            schema: {
                $ref: '#/definitions/AddTask'
            }
        } */
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

const getAll = async (req, res) => {
    // #swagger.tags = ["Task"]
    try {
        const response = await services.find();
        res.json(response);
        /* #swagger.responses[200] = {
            description: 'Obtencion de todas las tareas con categorias',
            schema: {
                $ref: '#/definitions/Task'
            }
        } */
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

const getById = async (req, res) => {
    // #swagger.tags = ["Task"]
    /* #swagger.parameters['id'] = {
        in: 'path',
        description: 'Busqueda de la tarea por id'
    } */

    try {
        const { id } = req.params;
        const response = await services.findOne(id);
        res.json(response);
        /* #swagger.responses[200] = {
            description: 'Obtencion de todas las tareas con categorias',
            schema: {
                $ref: '#/definitions/Task'
            }
        } */
    } catch (error) {
        res.status(500).send({ success: false, message: error.messagge });
    }
};

const update = async (req, res) => {
    // #swagger.tags = ["Task"]
    /* #swagger.parameters['id'] = {
        in: 'path',
        description: 'Busqueda de id para seleccionar tarea a modificar',
    } */
    /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Datos para nuevo registro',
        schema:{
            $ref: '#/definitions/AddTask'
        }
    } */
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
    // #swagger.tags = ["Task"]
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