import express, { response } from "express";

import "./database";
import {routes} from "./routes"

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333,() => console.log("Server rodando na porta 3333"));


// /**
//  * GET = Buscas
//  * POSTS = Criação
//  * PUT = Alteração
//  * DELETE = Deletar
//  * PATCH = Alterar uma informação específica
//  */

// app.get("/", (request, response) => {
//   return response.json({
//     message: "Olá NLW #5",
//   });
// });

// app.post("/",(request, response) => {
//   return response.json({
//     message: "Usuário cadastrado com sucesso!",
//   });
// });

