import express from "express"; //importanto o pacote express


const app = express(); //colocando o pacote exress na variável app


/*
GET = Buscar
POST = Criação
PUT = Alteração
DELETE = Deletar
PATCH = Alterar uma informação específica 
*/

//criando rotas no servidor
app.get('/', (request, response) => {
return response.json({
  message: 'Olá NLW05'
})
})

app.post('/', (request, response) => {
  return response.json({
    message: 'Usuário salvo com sucesso'
  })
})

//criando o servidor
app.listen(3333, () => {
  console.log("Server in running on port 3333")
});




