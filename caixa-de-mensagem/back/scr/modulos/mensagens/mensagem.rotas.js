import { Router } from "express";
import { testarAPI } from "./mensagem.controlador.js";

const rotas = Router();

rotas.get("/teste", testarAPI);

export default rotas;
