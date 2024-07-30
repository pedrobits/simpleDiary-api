# SimpleDiary API

### API simples para criar um módulo de guardar mensagens baseadas em diários

Esta é uma API simples para gerenciar diários e entradas de diários. Foi desenvolvida usando TypeScript, uma tecnologia nova para mim, como parte de um projeto para explorar e praticar TypeScript antes de completar uma tarefa subsequente.

## Requisitos

- **NodeJS**: v20.15.0
- **MongoDB**: Um servidor MongoDB. Coloque a string de conexão no arquivo `.env` com a chave: `mongoDB_String`.

## Funcionalidades

Esta API permite realizar as seguintes operações CRUD para diários e entradas de diários:

### Endpoints

#### Health Check
- **GET** `/check-health`
  - **Descrição**: Verifica o status da API e retorna a versão da API.

#### Diary Endpoints

- **GET** `/diary`
  - **Descrição**: Retorna todos os diários para um usuário específico.
  - **Parâmetros**: `iduser` (query parameter)

- **POST** `/diary`
  - **Descrição**: Cria um novo diário.
  - **Body**: `{ "title": string, "description": string, "idUser": string }`

- **PUT** `/diary`
  - **Descrição**: Atualiza um diário existente.
  - **Body**: `{ "id": string, "title": string, "description": string }`

- **DELETE** `/diary`
  - **Descrição**: Remove um diário.
  - **Body**: `{ "id": string }`

#### Diary Entries Endpoints

- **GET** `/diary/entry`
  - **Descrição**: Retorna todas as entradas de um diário específico.
  - **Parâmetros**: `idDiary` (query parameter)

- **POST** `/diary/entry`
  - **Descrição**: Cria uma nova entrada em um diário.
  - **Body**: `{ "entry": string }`
  - **Parâmetros**: `idDiary` (query parameter)


Nota
Este é um projeto de aprendizado e estou aberto a qualquer ajuda ou feedback para melhorar meu código. Estou ainda aprendendo e agradeço qualquer sugestão ou dica para aprimorar o projeto.
