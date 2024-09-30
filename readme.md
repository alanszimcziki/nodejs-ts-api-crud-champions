# Gerenciador de Clubes e Jogadores da Champions League

Este é um projeto de gerenciamento de clubes de futebol e jogadores, desenvolvido utilizando Node.js e Express. A API permite realizar operações de CRUD (Create, Read, Update, Delete) para jogadores e clubes, fornecendo estatísticas e informações detalhadas de jogadores.

### Funcionalidades

* **Gerenciar Clubes:** Obtenha a lista de clubes disponíveis no sistema.
* **Gerenciar Jogadores:** CRUD completo para jogadores, incluindo estatísticas detalhadas como Passe, Finalização, Drible e Defensiva.
* **Consultar Jogadores por ID:** Consulte informações e estatísticas de um jogador específico pelo ID.

## Endpoints
### Clubs
* **GET /clubs** - Retorna a lista de clubes disponíveis no sistema.
* **GET /players/:id** - Retorna os dados e estatísticas de um jogador específico pelo seu ID.
* **POST /players** - Adiciona um novo jogador. 
* **PUT /players/:id** - Atualiza as informações de um jogador específico pelo ID. O corpo da requisição deve conter as mesmas informações do POST /players.
* **DELETE /players/:id** - Remove um jogador específico pelo ID.

### Tecnologias Utilizadas
* Node.js
* Express
* TypeScript