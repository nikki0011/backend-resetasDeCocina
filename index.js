import router from "./src/routes/index.routes.js";
import Server from "./src/server/config.js";

// Instanciar la clase server
const server = new Server()
// acceder a las rutas http://localhost:3000/api/servicios
server.app.use('/api', router)

server.listen()