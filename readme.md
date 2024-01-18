[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![technology - Node](https://img.shields.io/badge/Node-orange) ![technology - JS](https://img.shields.io/badge/JavaScript-yellow) ![technology - MongoDB](https://img.shields.io/badge/MongoDB-green) ![technology - Mongoose](https://img.shields.io/badge/Mongoose-red)

# Forum RPG - Back

Back End do meu projeto de Fórum para mesas de RPG

## Tecnologias

- MongoDB
- Mongoose
- JavaScript
- Node

## Escopo do projeto

### Forum

Rota onde o usuário recebe os posts de uma determinada mesa, e também pode fazer novas postagens

#### Rotas

- /api/forum

> Método: GET

Nessa rota, você consegue pegar todos os posts da categoria "forum" de uma vez só. É mais uma rota de teste do que qualquer coisa, pois ela acaba não tendo muito uso prático nessa aplicação.

---

- /api/forum/:id

> Método: GET

Com essa rota você pega um único post específico da categoria "forum". Outra rota feita mais pra testes, pois não tem tanta aplicação real no meu projeto(mas talvez você consiga fazer algo único!).

> Método: DELETE

Essa rota serve para apagar um post específico. O ID que deve ser passado nesta rota é o do post.

> Método: PUT

Essa rota serve pra editar um post específico. Assim como na rota de deleção, a rota de edição também espera receber um ID de post.

---

- /api/forum/posts/:id?offset=X&limit=Y

> Método : GET

Uma das rotas mais importantes do projeto, ela também pega os posts da categoria "forum", mas somente os posts que contém o ID passado(o ID deve ser de um grupo, e não de um post, como nos outros casos), e já devolve os posts paginados, com base no que for passado nos parâmetros offset(quantidade de posts que deve ser pulada), e limit(quantidade de posts que deve ser retornada), assim como retorna a quantidade máxima de páginas, pra deixar fácil a exibição no front.

A rota também conta com um tratamento de erro, que verifica se o offset é menor que a quantidade de posts pedida, antes de puxar e devolver os mesmos.

### GM

Todas as rotas são como as de Fórum. Para usar essas rotas, basta trocar "forum" por "gm" nas URLs

### Further Reading

Todas as rotas são como as de Fórum. Para usar essas rotas, basta trocar "forum" por "reading" nas URLs

### User

#### Rotas

- /api/auth/register

> Método : POST

Rota de criação de usuários.

> Método : GET

Rota para pegar todos os users cadastrados.

---

- /api/auth/login

> Método : POST

Rota para fazer o login de um usuário.

---

- /api/user/:id

> Método : GET

Rota que pega a informação de um único usuário(reconhecido pelo ID). Essa é uma rota privada, que precisa de token para ser acessada. Essa rota é bem importante, pois é com ela que pegamos os grupos de um determinado usuário.

---

- api/auth/update/:id

> Método : PUT

Rota para atualizar as informações de um dado usuário.

### Groups/Mesas

#### Rotas

- /api/group

> Método : POST

Rota que cria um grupo novo.

> Método: GET

Rota que pega todas as mesas cadastradas na DB.

---

- api/group/:id

> Método : GET

Rota que pega uma única mesa, com base no ID passado.

> Método : DELETE

Rota que deleta uma única mesa, com base no ID passado.

> Método : PUT

Rota que altera as informações da mesa, com base no ID passado.

---

- /api/group/user

> Método : POST

Rota que pega todos os grupos que de um usuário. A rota recebe um array de ID de grupos, faz uma busca na DB, e retorna os grupos encontrados com os IDs informados.

## Licença

Feito com a licença MIT

MIT License

Copyright (c) 2023 Vitor Bulbovas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
