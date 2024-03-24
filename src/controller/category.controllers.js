const CategoryServices = require("../services/category.services");

const services = new CategoryServices();

const create = async (req, res) => {
    // #swagger.tags = ["Category"]
    /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Datos para nuevo registro',
        schema:{
            $ref: '#/definitions/AddCategory'
        }
    } */
    try {
        const response = await services.create(req.body);
        res.status(201).json({ success: true, data: response });
        /* #swagger.responses[201] = {
            description: 'Registro de nueva categoria',
            schema: {
                $ref: '#/definitions/AddCategory'
            }
        } */
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

const getAll = async (req, res) => {
    // #swagger.tags = ["Category"]
    try {
        const response = await services.find();
        res.json(response);
        /* #swagger.responses[200] = {
            description: 'Obtencion de todas las categorias',
            schema: {
                $ref: '#/definitions/Category'
            }
        } */
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

const getById = async (req, res) => {
    // #swagger.tags = ["Category"]
    try {
        const { id } = req.params;
        const response = await services.findOne(id);
        res.json(response);
        /* #swagger.responses[200] = {
            description: 'Obtencion de una categoria por id',
            schema: { 
                $ref: '#/definitions/Category'
            }
        } */
    } catch (error) {
        res.status(500).send({ success: false, message: error.messagge });
    }
};

const update = async (req, res) => {
    // #swagger.tags = ["Category"]
    /* #swagger.parameters['id'] = {
        in: 'path',
        description: 'Busqueda de id para seleccionar categoria a modificar',
    } */
    /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Datos para nuevo registro',
        schema:{
            $ref: '#/definitions/Category'
        }
    } */
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await services.update(id, body);
        res.json(response);
        /* #swagger.responses[200] = {
            description: 'Resultado de la categoria modificada',
            schema: { 
                $ref: '#/definitions/Category'
            }
        } */
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

const _delete = async (req, res) => {
    // #swagger.tags = ["Category"]
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