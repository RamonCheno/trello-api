import express from "express";
import { readFile } from "fs/promises";
import { serve, setup } from 'swagger-ui-express';
const swaggerDocs = express();
const swaggerDocument = JSON.parse(await readFile(new URL("../swagger.json", import.meta.url)));
swaggerDocs.use('/api-docs', serve, setup(swaggerDocument));
export default swaggerDocs;