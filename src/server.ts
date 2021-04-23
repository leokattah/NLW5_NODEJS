import {http} from "./http"
import "./websocket/client"
import "./websocket/admin"

//criando o servidor
http.listen(3333, () => {
  console.log("Server in running on port 3333")
});




