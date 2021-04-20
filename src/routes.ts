import { Router } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { SettingsRepository } from "./repositories/SettingsRepository";




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

routes.post("/settings", async (request, response) => {
  const { chat, username } = request.body;
  const settingsRepository = getCustomRepository(SettingsRepository);

  const settings = settingsRepository.create({
    chat,
    username
  })

await settingsRepository.save(settings)

return response.json(settings)
})

export { routes }