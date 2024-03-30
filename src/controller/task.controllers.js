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
        res.status(500).json({ success: false, message: error.message });
    }
};

const getAll = async (req, res) => {
    // #swagger.tags = ["Task"]
    try {
        const response = await services.find();
        if (response.length === 0) {
            res.status(404).json({ success: false, message: "No encontrado" });
            /* #swagger.responses[404] = {
                'description':"registro no encontrado"
            } */
        } else {
            res.status(200).json(response);
            /* #swagger.responses[200] = {
                description: 'Obtencion de todas las tareas con categorias',
                schema: {
                    $ref: '#/definitions/Task'
                }
            } */
        }

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
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
        const response = await services.findId(id);
        if (response !== null) {
            res.status(200).json(response);
            /* #swagger.responses[200] = {
                description: 'Obtencion de todas las tareas con categorias',
                schema: {
                    $ref: '#/definitions/Task'
                }
            } */
        } else {
            res.status(404).json({ success: false, message: "No encontrado" });
            /* #swagger.responses[404] = {
                'description':"registro no encontrado"
            } */
        }

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const update = async (req, res) => {
    // #swagger.tags = ["Task"]
    /* #swagger.parameters['id'] = {
        in: 'path',
        description: 'Busqueda de id para seleccionar tarea a modificar',
        require: true
    } */
    /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Datos para nuevo registro',
        require: true,
        schema:{
            $ref: '#/definitions/AddTask'
        }
    } */
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await services.update(id, body);
        if (response != false) {
            /* #swagger.responses[200] = {
            schema: {
                $ref: '#/definitions/Task'
            }
        } */
            res.status(200).json(response);
        } else {
            res.status(404).json({ success: false, message: "No encontrado" });

            /* #swagger.responses[404] = {
                'description':"registro no encontrado"
            } */
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const _delete = async (req, res) => {
    // #swagger.tags = ["Task"]
    try {
        const { id } = req.params;
        const response = await services.delete(id);
        if (response != false) {
            res.send(response);
        } else {
            res.status(404).json({ success: false, message: "No encontrado" });
            /* #swagger.responses[404] = {
                'description':"registro no encontrado"
            } */
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = {
    create, getAll, getById, update, _delete
};