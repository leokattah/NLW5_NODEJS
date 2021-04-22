import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
import { MessagesController} from "./controllers/MessagesController"

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
const usersController = new UsersController();
const messagesController = new MessagesController();


routes.post('/settings', settingsController.create);

routes.get('/settings/:username', settingsController.findByUsername);

routes.put('/settings/:username', settingsController.update);

routes.post('/users', usersController.create)

routes.post('/messages', messagesController.create)

routes.get('/messages/:id', messagesController.showByUser)

export { routes }