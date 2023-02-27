![Screenshot_1](https://user-images.githubusercontent.com/45580434/79641791-06e1c100-8170-11ea-8ecf-b6c889805d55.png)
<br>


# Projeto: Cookenu

### Projeto desenvolvido por:
| [<img src="https://avatars.githubusercontent.com/u/102339228?v=4" width=115><br><sub>Ricardo Barros</sub>](https://github.com/Ricardoteleco) |   
| :---: |
### Documentação da API:

<br>

## Sobre o projeto: 
Desenvolvido e inspirado em uma rede social, na qual os usuários podem dividir informações sobre receitas. Possui todas as funcionalidades mais comuns que vemos diariamente, tais como:

### CADASTRO
O usuário precisa preencher os campos: nome, email, password e role(ADMIN OU NORMAL) para realizar o cadastro. É necessário o preenchimento de todos os campos para a finalização da função. Aqui, o id é gerado automático e a senha é criptografada.

### LOGIN
O usuário precisa preencher os campos email e password para realizar o login. O email precisa ter o formato correto, contendo um @, e o password informado no momento do login precisa ser o mesmo que foi informado ao realizar o cadastro, caso contrário, não conseguirá realizar o login.
<br>
### BUSCAR PRÓPRIO PERFIL
O usuário tem a opção de fazer uma busca pelo próprio perfil. Para isso, é necessário passar por headers Authorization o token que recebeu no momento em que realizou o login.


## Tecnologias utilizadas:
- Node.js
- Typescript
- MYSQL
- Programação Orientada à Objetos
- Postman
- Git
<br>
<br>

## Linguagens e libs utilizadas:
- Typescript
- mysql
- dotenv
- express
- knex
- bcryptjs
- uuid
- jsonwebtoken
<br>
<br>

### Como rodar a aplicação:
- Clone o projeto no terminal utilizando o git clone;
- Na pasta do projeto, instale as dependências com o comando npm install;
- Crie um arquivo .env com as configurações do seu banco de dados(preferencialmente MySQL, que foi o banco de dados utilizado no projeto);
- No arquivo .env, deverá ficar dessa forma:

```
DB_HOST = seu_endereço_host
DB_USER = seu_usuário
DB_PASSWORD = sua_senha
DB_SCHEMA = seu_banco_de_dados
JWT_KEY = chave_jwt
```
- Por fim, execute a aplicação rodando o comando npm start, ou npm run start para deixar o projeto rodando o tempo todo.
<br>

