# MyPharma API 

Esta api é utilizada para gerenciar um estoque de produtos disponíveis em uma farmácia. Para seu desenvolvimento
foi utilizado Node.JS com Express.JS e MongoDB.


------------------------------------------------------------------------------

### (Público) POST /register

Este endpoint é utilizado para realizar o processo de cadastro do usuário.

#### PARÂMETROS

Nome, e-mail e senha do respectivo usuário.

Exemplo:

```bash

{
    "name" : "usuário teste",
    "email": "teste@gmail.com",
    "password": "senhateste"
}

```

#### RESPOSTAS

##### OK! 

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

### (Público) POST /login

Este endpoint é utilizado para realizar o processo de login do usuário.

#### PARÂMETROS

E-mail e senha do respectivo usuário cadastrado no sistema.

Exemplo:

```bash

{
    "email": "teste@gmail.com",
    "password": "senhateste"
}

```

#### RESPOSTAS

##### OK! 

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

##### FALHA NA AUTENTICAÇÃO!

Caso essa seja a resposta, significa que ocorreu uma falha durante o processo de autenticação da requisição. Motivos: Senha ou e-mail incorretos.

Exemplo de resposta:

```bash

{
    "error": "E-mail and/or password incorrects! "
}

```

-------------------------------------------------------------------------------------------


### (Privado) GET /brands

Este endpoint é utilizado para retornar a listagem de todos as marcas cadastradas no banco de dados.

#### RESPOSTAS

##### OK!

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

##### FALHA NA AUTENTICAÇÃO! 

Caso essa seja a resposta, significa que ocorreu uma falha durante o processo de autenticação da requisição. Motivos: Token inválido, expirado ou inexistente.

Exemplo de resposta:

```bash

{
    "error": "Não autorizado!"
}

```

-----------------------------------------------------------------------------------------------------------

### (Privado) GET /category

Este endpoint é utilizado para retornar a listagem de todos as categorias cadastradas no banco de dados.

#### RESPOSTAS

##### OK!

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

##### FALHA NA AUTENTICAÇÃO! 

Caso essa seja a resposta, significa que ocorreu uma falha durante o processo de autenticação da requisição. Motivos: Token inválido, expirado ou inexistente.

Exemplo de resposta:

```bash

{
    "error": "Não autorizado!"
}

```

----------------------------------------------------------------------------------------


### (Privado) GET /products

Este endpoint é utilizado para retornar a listagem de todos as marcas cadastradas no banco de dados.

#### RESPOSTAS

##### OK!

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

##### FALHA NA AUTENTICAÇÃO! 

Caso essa seja a resposta, significa que ocorreu uma falha durante o processo de autenticação da requisição. Motivos: Token inválido, expirado ou inexistente.

Exemplo de resposta:

```bash

{
    "error": "Não autorizado!"
}

```



