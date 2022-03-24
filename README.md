# MyPharma API 

Esta api é utilizada para gerenciar um estoque de produtos disponíveis em uma farmácia. Para seu desenvolvimento
foi utilizado Node.JS com Express.JS e MongoDB.

![Node](https://img.shields.io/badge/Node-v16.14%20(LTS)-brightgreen)
![Npm](https://img.shields.io/badge/Npm-v8.3.1-blue) 
![License](https://img.shields.io/badge/License-MIT-red)

-------------------------------------------------------------------------------

<h2 align="center">
 <a href="#Status">Status</a> •
 <a href="#Features">Features</a> •
 <a href="#Pré-requisitos">Pré-requisitos</a> • 
 <a href="#Rodando-a-aplicação">Rodando a aplicação</a> • 
 <a href="#Testes">Testes</a> • 
 <a href="#Rotas">Rotas</a> • 
 <a href="#Tecnologias">Tecnologias</a> • 
 <a href="#Autor">Autor </a>
</h2>

--------------------------------------------------------------------------------

# Status

:heavy_check_mark: Finalizado

------------------------------------------------------------------------------

# Features

- [x] Cadastrar novos usuários.
- [x] Logar com usuário existente.
- [x] Visualizar/Cadastrar/Editar/Deletar produtos no estoque.
- [x] Visualizar/Cadastrar/Editar/Deletar categorias de produtos.
- [x] Visualizar/Cadastrar/Editar/Deletar marcas de produtos.


# Pré-requisitos

Será necessário ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). Também é 
aconselhável ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/).
O banco de dados desta aplicação se encontra na nuvem, porém se desejar roda-lo em sua máquina local, é aconselhável instalar o [MongoDB](https://www.mongodb.com/try/download/community) e [MongoCompass](https://www.mongodb.com/try/download/compass).

```bash

# Versão Node utilizada nesta aplicação: v16.14 (LTS)

```

# Rodando a aplicação

```bash

# Clone este repositório
$ git clone <https://github.com/matheuskeidygomes/mypharma-back-end-api.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd mypharma-back-end-api

# O banco de dados desta aplicação se encontra na nuvem, caso deseje rodar com banco local,  
# acesse o arquivo ".env" na raiz do projeto, e altere o valor da variável de ambiente "MONGO_URL" 
# para "mongodb://localhost:27017/mypharma".

# Instale as dependências
$ npm install

# Antes de executar a aplicação, caso esteja rodando com banco local, certifique se o 
# serviço do MongoDB se encontra ativo. 

# Execute a aplicação 
$ npm start

# O servidor iniciará na porta:3333 - acesse <http://localhost:3333>

```

------------------------------------------------------------------------------

# Testes

Para os testes da aplicação, foi utilizado Jest. Para rodar os testes, siga as seguintes instruções:

```bash

# Clone este repositório
$ git clone <https://github.com/matheuskeidygomes/mypharma-back-end-api.git>

# Acesse a pasta do projeto no terminal/cmd 
$ cd mypharma-back-end-api

# Execute o comando
$ npm run test

# Aguarde a execução dos testes

```

# Rotas

## (Público) POST /register

Este endpoint é utilizado para realizar o processo de cadastro do usuário.

### PARÂMETROS

Nome, e-mail e senha do respectivo usuário.

Exemplo:

```bash

{
    "name" : "usuário teste",
    "email": "teste@gmail.com",
    "password": "senhateste"
}

```

### RESPOSTAS

#### OK! 

Caso essa seja a resposta, você vai receber o token JWT para acessar endpoints protegidos da api.

Exemplo de resposta:

```bash

{
    "response": {
        "status": true,
        "name": "usuário teste",
        "email": "teste@gmail.com",
        "token": "eyJhskjGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzUwOTNiMzRjYzVlOTMzNDVhYmUzNCIsImVtYWlsIjoiYW5hQGdtYWlsLmNvbSIsImlhdCI6MTY0NzY1MDYzMn0.eP2zogD6-b2bWdLyVB8weT7PiwzR0273XQh7hG8mkK0"
    }
}

```


----------------------------------------------------------------------------------------------

## (Público) POST /login

Este endpoint é utilizado para realizar o processo de login do usuário.

### PARÂMETROS

E-mail e senha do respectivo usuário cadastrado no sistema.

Exemplo:

```bash

{
    "email": "teste@gmail.com",
    "password": "senhateste"
}

```

### RESPOSTAS

#### OK! 

Caso essa seja a resposta, você vai receber o token JWT para acessar endpoints protegidos da api.

Exemplo de resposta:

```bash

{
    "response": {
        "status": true,
        "name": "usuário teste",
        "email": "teste@gmail.com",
        "token": "eyJhskjGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzUwOTNiMzRjYzVlOTMzNDVhYmUzNCIsImVtYWlsIjoiYW5hQGdtYWlsLmNvbSIsImlhdCI6MTY0NzY1MDYzMn0.eP2zogD6-b2bWdLyVB8weT7PiwzR0273XQh7hG8mkK0"
    }
}

```

#### FALHA NA AUTENTICAÇÃO!

Caso essa seja a resposta, significa que ocorreu uma falha durante o processo de autenticação da requisição. Motivos: Senha ou e-mail incorretos.

Exemplo de resposta:

```bash

{
    "error": "E-mail and/or password incorrects! "
}

```


-------------------------------------------------------------------------------------------


## (Privado) POST /product

Este endpoint é utilizado para realizar o processo de cadastro de produtos no banco de dados.

### PARÂMETROS

Nome, descrição, preço, estoque, categoria e marca do produto.

Exemplo:

```bash

{
    "name": "Produto Teste",
    "description": "Descrição do produto",
    "price": 12,00,
    "inventory": 20,
    "category": "Categoria Teste",
    "brand": "Marca teste
}

```

### RESPOSTAS

#### OK! 

Caso essa seja a resposta, você vai receber os dados do produto cadastrado.

Exemplo de resposta:

```bash

{
    "id": "6235328e498deef01afbad0e",
    "name": "Produto Teste",
    "description": "Descrição do produto",
    "price": 12,
    "inventory": 20,
    "category": "Categoria Teste",
    "brand": "Marca teste"
}   

```

#### FALHA NA AUTENTICAÇÃO!

Caso essa seja a resposta, significa que ocorreu uma falha durante o processo de autenticação da requisição. Motivos: Token inválido, expirado ou inexistente

Exemplo de resposta:

```bash

{
    "error": "Unauthorized!"
}

```


------------------------------------------------------------------------------------------


## (Privado) POST /category

Este endpoint é utilizado para realizar o processo de cadastro de categorias no banco de dados.

### PARÂMETROS

Nome e descrição da categoria.

Exemplo:

```bash

{
    "name": "Categoria Teste",
    "description": "Descrição da categoria",
}

```

### RESPOSTAS

#### OK! 

Caso essa seja a resposta, você vai receber os dados da categoria cadastrado.

Exemplo de resposta:

```bash

{
    "id": "6235328e498deef01afbad0e",
    "name": "Categoria Teste",
    "description": "Descrição da categoria"
}

```

#### FALHA NA AUTENTICAÇÃO!

Caso essa seja a resposta, significa que ocorreu uma falha durante o processo de autenticação da requisição. Motivos: Token inválido, expirado ou inexistente

Exemplo de resposta:

```bash

{
    "error": "Unauthorized!"
}

```

-------------------------------------------------------------------------------------------


## (Privado) POST /brand

Este endpoint é utilizado para realizar o processo de cadastro de marcas no banco de dados.

### PARÂMETROS

Nome da marca.

Exemplo:

```bash

{
    "name": "Marca Teste",
}

```

### RESPOSTAS

#### OK! 

Caso essa seja a resposta, você vai receber os dados da marca cadastrada.

Exemplo de resposta:

```bash

{
    "id": "62353327498deef01afbad10",
    "name": "Marca Teste"
}

```

#### FALHA NA AUTENTICAÇÃO!

Caso essa seja a resposta, significa que ocorreu uma falha durante o processo de autenticação da requisição. Motivos: Token inválido, expirado ou inexistente

Exemplo de resposta:

```bash

{
    "error": "Unauthorized!"
}

```

-----------------------------------------------------------------------------------------------


## (Privado) GET /brands

Este endpoint é utilizado para retornar a listagem de todos as marcas cadastradas no banco de dados.

### RESPOSTAS

#### OK!

Caso essa seja a resposta, você vai receber uma listagem das marcas cadastradas no banco de dados.

Exemplo de resposta:

```bash

{
    "list": [
        {
            "_id": "62350d9a4f73da1e8720ed4b",
            "UUID": "056d1ed6-61ce-4665-815e-5438ff6d8ac1",
            "name": "Medley",
            "__v": 0
        },
        {
            "_id": "62350da14f73da1e8720ed4e",
            "UUID": "9c0ccf9b-42bd-42fa-b889-3d61625e6ad9",
            "name": "Eurofarma",
            "__v": 0
        }
    ]
}

```

#### FALHA NA AUTENTICAÇÃO! 

Caso essa seja a resposta, significa que ocorreu uma falha durante o processo de autenticação da requisição. Motivos: Token inválido, expirado ou inexistente.

Exemplo de resposta:

```bash

{
    "error": "Unauthorized!"
}

```

-----------------------------------------------------------------------------------------------------------

## (Privado) GET /category

Este endpoint é utilizado para retornar a listagem de todos as categorias cadastradas no banco de dados.

### RESPOSTAS

#### OK!

Caso essa seja a resposta, você vai receber uma listagem das marcas cadastradas no banco de dados.

Exemplo de resposta:

```bash

{
    "list": [
        {
            "_id": "62350cc24f73da1e8720ed39",
            "UUID": "2c9ede0b-eec8-45ea-be3c-5aaaffdfe722",
            "name": "Higiene Pessoal",
            "description": "Produtos de higiene pessoal.",
            "__v": 0
        },
        {
            "_id": "62350cf44f73da1e8720ed3c",
            "UUID": "beb16b04-42fb-4c3d-9c0f-abed3cae5eee",
            "name": "Vitaminas",
            "description": "Complexos vitamínicos",
            "__v": 0
        }
    ]
}

```

#### FALHA NA AUTENTICAÇÃO! 

Caso essa seja a resposta, significa que ocorreu uma falha durante o processo de autenticação da requisição. Motivos: Token inválido, expirado ou inexistente.

Exemplo de resposta:

```bash

{
    "error": "Unauthorized!"
}

```

----------------------------------------------------------------------------------------


## (Privado) GET /products

Este endpoint é utilizado para retornar a listagem de todos as marcas cadastradas no banco de dados.

### RESPOSTAS

#### OK!

Caso essa seja a resposta, você vai receber uma listagem dos produtos cadastradas no banco de dados.

Exemplo de resposta:

```bash

{

    "list": [
        {
            "_id": "62350e054f73da1e8720ed5d",
            "UUID": "569733c4-9455-4ca8-bea5-9335839477af",
            "name": "Sabonete ",
            "description": "Sabonete Líquido 300ml",
            "price": 12,
            "inventory": 200,
            "category": "Higiene Pessoal",
            "brand": "Unilever",
            "__v": 0
        },
        {
            "_id": "62350e9c4f73da1e8720ed6d",
            "UUID": "f60be284-27df-479a-8cae-de38d3b7dcb9",
            "name": "Vit. C + Zinco",
            "description": "100 cápsulas",
            "price": 20,
            "inventory": 120,
            "category": "Vitaminas",
            "brand": "Eurofarma",
            "__v": 0
        }
    ]
}

```

#### FALHA NA AUTENTICAÇÃO! 

Caso essa seja a resposta, significa que ocorreu uma falha durante o processo de autenticação da requisição. Motivos: Token inválido, expirado ou inexistente.

Exemplo de resposta:

```bash

{
    "error": "Unauthorized!"
}

```

------------------------------------------------------------------------------------------------------------


## (Privado) PUT /brand/:_id

Este endpoint é utilizado para realizar o processo de edição de marcas no banco de dados.

### PARÂMETROS

Nome da marca.

Exemplo:

```bash

{
    "name": "Marca Teste Editada",
}

```

### RESPOSTAS

#### OK! 

Caso essa seja a resposta, você vai receber os dados da marca editada.

Exemplo de resposta:

```bash

{

    "response": {
        "_id": "62353327498deef01afbad10",
        "UUID": "b65b0f9a-dcfd-4667-94ff-f9ce5fcd88a1",
        "name": "Marca Teste Editada",
        "__v": 0
    }

}

```

#### FALHA NA AUTENTICAÇÃO!

Caso essa seja a resposta, significa que ocorreu uma falha durante o processo de autenticação da requisição. Motivos: Token inválido, expirado ou inexistente

Exemplo de resposta:

```bash

{
    "error": "Unauthorized!"
}

```


------------------------------------------------------------------------------------------------------------


## (Privado) PUT /product/:_id

Este endpoint é utilizado para realizar o processo de edição de produtos no banco de dados.

### PARÂMETROS

Nome, descrição, preço, estoque, categoria e marca do produto.

Exemplo:

```bash

{
    "name": "Produto Editado",
    "description": "Descrição Editada",
    "price": 15,
    "inventory": 20,
    "category": "Categoria Editada",
    "brand": "Marca Editada"
}

```

### RESPOSTAS

#### OK! 

Caso essa seja a resposta, você vai receber os dados do produto editado.

Exemplo de resposta:

```bash

{
    "response": {
        "_id": "623531e2498deef01afbad0c",
        "UUID": "96d5ea3d-e8a9-4103-b857-db5489317060",
        "name": "Produto Editado",
        "description": "Descrição Editada",
        "price": 15,
        "inventory": 20,
        "category": "Categoria Editada",
        "brand": "Marca Editada",
        "__v": 0
    }
}

```

#### FALHA NA AUTENTICAÇÃO!

Caso essa seja a resposta, significa que ocorreu uma falha durante o processo de autenticação da requisição. Motivos: Token inválido, expirado ou inexistente

Exemplo de resposta:

```bash

{
    "error": "Unauthorized!"
}

```

------------------------------------------------------------------------------------------------------------


## (Privado) PUT /category/:_id

Este endpoint é utilizado para realizar o processo de edição de categorias no banco de dados.

### PARÂMETROS

Nome e descrição da categoria.

Exemplo:

```bash

{
    "name": "Categoria Teste Editada",
    "description": "Descrição Teste Editada"
}

```

### RESPOSTAS

#### OK! 

Caso essa seja a resposta, você vai receber os dados da categoria editada.

Exemplo de resposta:

```bash

{
    "response": {
        "_id": "6235328e498deef01afbad0e",
        "UUID": "c059184f-345c-46ee-8c7d-f52922d54cb9",
        "name": "Categoria Teste Editada",
        "description": "Descrição Teste Editada",
        "__v": 0
    }
}

```

#### FALHA NA AUTENTICAÇÃO!

Caso essa seja a resposta, significa que ocorreu uma falha durante o processo de autenticação da requisição. Motivos: Token inválido, expirado ou inexistente

Exemplo de resposta:

```bash

{
    "error": "Unauthorized!"
}

```


------------------------------------------------------------------------------------------------------------


## (Privado) DEL /brand/:_id

Este endpoint é utilizado para realizar o processo de deletar uma marca no banco de dados.

### RESPOSTAS

#### OK! 

Caso essa seja a resposta, você vai receber uma mensagem de operação realizada com sucesso.

Exemplo de resposta:

```bash

{
    "response": "Deleted with success!"
}

```

#### FALHA NA AUTENTICAÇÃO!

Caso essa seja a resposta, significa que ocorreu uma falha durante o processo de autenticação da requisição. Motivos: Token inválido, expirado ou inexistente

Exemplo de resposta:

```bash

{
    "error": "Unauthorized!"
}

```

------------------------------------------------------------------------------------------------------------


## (Privado) DEL /product/:_id

Este endpoint é utilizado para realizar o processo de deletar um produto no banco de dados.

### RESPOSTAS

#### OK! 

Caso essa seja a resposta, você vai receber uma mensagem de operação realizada com sucesso.

Exemplo de resposta:

```bash

{
    "response": "Deleted with success!"
}

```

#### FALHA NA AUTENTICAÇÃO!

Caso essa seja a resposta, significa que ocorreu uma falha durante o processo de autenticação da requisição. Motivos: Token inválido, expirado ou inexistente

Exemplo de resposta:

```bash

{
    "error": "Unauthorized!"
}

```

------------------------------------------------------------------------------------------------------------


## (Privado) DEL /category/:_id

Este endpoint é utilizado para realizar o processo de deletar uma categoria no banco de dados.

### RESPOSTAS

#### OK! 

Caso essa seja a resposta, você vai receber uma mensagem de operação realizada com sucesso.

Exemplo de resposta:

```bash

{
    "response": "Deleted with success!"
}

```

#### FALHA NA AUTENTICAÇÃO!

Caso essa seja a resposta, significa que ocorreu uma falha durante o processo de autenticação da requisição. Motivos: Token inválido, expirado ou inexistente

Exemplo de resposta:

```bash

{
    "error": "Unauthorized!"
}

```

-------------------------------------------------------------------------------------------------------

# Tecnologias 

![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

-------------------------------------------------------------------------------------------------------

# Autor

Desenvolvido por <a href="https://github.com/matheuskeidygomes"> Matheus Keidy </a>. Entre em contato!  
  
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/matheus-keidy-7b9886190/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:matheuskeidygomes@gmail.com)











