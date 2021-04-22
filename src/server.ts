import {http} from "./http"
import "./websocket/client"

//criando o servidor
http.listen(3333, () => {
  console.log("Server in running on port 3333")
});




