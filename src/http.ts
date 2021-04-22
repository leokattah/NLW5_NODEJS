import express from "express"; //importanto o pacote express
import {createServer} from "http"
import {Server, Socket} from "socket.io"
import path from "path"

import './database' // Esta linha está importando o arquivo index.ts que está dentro da pasta database. O javascript consegue identificar os arquivos index.js dentro das pastas quando a questão é importação. Isso é o padrão do javascript. Neste caso, na pasta database. 
import { routes } from "./routes"

const app = express(); //colocando o pacote exress na variável app

app.use(express.static(path.join(__dirname, ".." , "public"))) // Para usar o HTML dentro das rotas
app.set("views", path.join(__dirname, ".." , "public")) // Para usar o HTML dentro das rotas
app.engine("html", require("ejs").renderFile) // Para usar o HTML dentro das rotas
app.set("view engine", "html") // Para usar o HTML dentro das rotas

app.get("/pages/client", (req, res) => {
  return res.render("html/client.html")
})

const http = createServer(app) // Criando protocolo http

const io = new Server(http) //criando protocolo websocket

io.on("connection", (socket: Socket) => {
  console.log("Conectou", socket.id) //socket.id é default do websocket
})

app.use(express.json());
app.use(routes);

export {http, io}