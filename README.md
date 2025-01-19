# Task Manager API

API RESTful para gerenciamento de tarefas, desenvolvida com Node.js, Express e SQLite3. Este projeto foi criado para praticar habilidades em backend, incluindo CRUD completo, validação de dados e documentação com Swagger.

## 🚀 Funcionalidades

- CRUD Completo: Criar, listar, atualizar e excluir tarefas.
- Filtros Personalizados: Busca por título ou status.
- Validação de Dados: Garantia de entrada válida usando Joi.
- Documentação Swagger: Acesso fácil à documentação da API.

## 🛠 Tecnologias

- Node.js: Ambiente de execução JavaScript.
- Express: Framework para criação da API.
- SQLite3: Banco de dados leve para persistência.
- Joi: Biblioteca de validação de entradas.
- Swagger: Ferramenta para documentar a API.

## 📦 Como Usar

1. Clone o Repositório:  
git clone https://github.com/dayana-de-paula/task-manager-api.git  
cd task-manager-api

2. Instale as Dependências:  
```
npm install
```
3. Inicie o Servidor:  
Para iniciar em modo de desenvolvimento (com reinício automático via nodemon):  
npm run dev  
Para iniciar em modo de produção:
```
npm start
```
O servidor estará disponível em http://localhost:3000.

5. Acesse a Documentação Swagger:  
Acesse a documentação interativa da API em http://localhost:3000/api-docs.

## 🌟 Endpoints da API

1. Listar Todas as Tarefas:  
URL: GET /tasks  
Descrição: Retorna todas as tarefas.  

Exemplo de Resposta:
```  
[  
{  
"id": 1,  
"title": "Aprender Node.js",  
"description": "Estudar o framework Node.js para backend",  
"status": "pendente"  
}  
]
```

2. Criar uma Nova Tarefa:  
URL: POST /tasks  
Headers: Content-Type: application/json  
Body:
```
{  
"title": "Aprender Express.js",  
"description": "Estudar o framework Express.js",  
"status": "pendente"  
}
```
Exemplo de Resposta:  
```
{  
"message": "Tarefa criada com sucesso",  
"id": 2  
}
```
3. Atualizar uma Tarefa:  
URL: PUT /tasks/:id  
Headers: Content-Type: application/json  
Body:
```
{  
"title": "Aprender SQLite",  
"description": "Aprofundar no uso de bancos de dados",  
"status": "concluído"  
}
```
Exemplo de Resposta:  
```
{  
"message": "Tarefa atualizada com sucesso"  
}
```
4. Excluir uma Tarefa:  
URL: DELETE /tasks/:id  
Descrição: Exclui uma tarefa pelo ID.  

Exemplo de Resposta:
```
{  
"message": "Tarefa excluída com sucesso"  
}
```
5. Filtrar Tarefas:  
URL: GET /tasks/filter  
Query Params:  
title (opcional): Filtra por título parcial.  
status (opcional): Filtra por status (pendente ou concluído).  

Exemplo de Requisição:  
GET /tasks/filter?status=pendente  

Exemplo de Resposta:
```
[  
{  
"id": 1,  
"title": "Aprender Node.js",  
"description": "Estudar o framework Node.js para backend",  
"status": "pendente"  
}  
]
```

## 📝 Licença

Este projeto está licenciado sob a MIT License.
