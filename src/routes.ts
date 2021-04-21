import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { Userscontroller } from "./controllers/UsersController";

/*
Tipos de rotas
GET = Buscar
POST = Criação
PUT = Alteração
DELETE = Deletar
PATCH = Alterar uma informação específica 
*/
/*
Tipos de Parâmetros
Routes Params => Parâmetros de rotas. Exemplo: https://localhost:3333/settings/1
Query Params => Filtros de buscas. Exemplo: https://localhost:3333/settings/1?search=algumacoisa
Body Params => São objetos passados dentro das nossas requisições. Exemplo: { name: "Leonardo" }
*/
const routes = Router();

const settingsController = new SettingsController();

const usersController = new Userscontroller();


routes.post('/settings', settingsController.create);
routes.post('/users', usersController.create)

export { routes }