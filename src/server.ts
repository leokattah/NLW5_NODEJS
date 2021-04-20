import express from "express"; //importanto o pacote express
import './database' // Esta linha está importando o arquivo index.ts que está dentro da pasta database. O javascript consegue identificar os arquivos index.js dentro das pastas quando a questão é importação. Isso é o padrão do javascript. Neste caso, na pasta database. 
import { routes } from "./routes"

const app = express(); //colocando o pacote exress na variável app

app.use(express.json());
app.use(routes);

//criando o servidor
app.listen(3333, () => {
  console.log("Server in running on port 3333")
});




