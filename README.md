<p align="center">
 <img src="images/ValorizaCover.png" alt="Project logo">
</p>

<h3 align="center">valoriza-api</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
![Issues](https://img.shields.io/github/issues/jessicacastro/valoriza-api)
![Forks](https://img.shields.io/github/forks/jessicacastro/valoriza-api)
![Stars](https://img.shields.io/github/stars/jessicacastro/valoriza-api)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
![Top Language](https://img.shields.io/github/languages/top/jessicacastro/valoriza-api)
![Last Commit](https://img.shields.io/github/last-commit/jessicacastro/valoriza-api)
![Tweet](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Fjessicacastro%2Fvaloriza-api)
</div>

---

<p align="center"> 
  Cadastre elogios para outros usuários por meio de tags.
  <br> 
</p>

## 📝 Tabela de Conteúdo

- [Regras de Negócio](#rules)
- [Iniciando o Projeto](#getting_started)
- [Ferramentas Utilizadas](#built_using)
- [Aprendizados](#acknowledgement)

## 🏁 Iniciando o Projeto <a name = "getting_started"></a>
Aqui são algumas instruções para que você consiga rodar o projeto localmente e consiga utilizá-lo.

### Pré-Requisitos
Certifique-se de que você possui a versão LTS do node e um dos gerenciadores de pacote (yarn ou NPM) instalados.

Eu utilizei yarn, mas o processo é bem parecido para o NPM.

```
node -v
yarn -valoriza-api
npm -v
```

### Instalando

Faça o download do projeto em sua máquina e rode o comando com yarn para instalar as dependências

```
yarn
npm i
```
Aguarde até que todas as dependências sejam instaladas e a pasta node_modules apareça.
### Running
Para rodar a aplicação na porta 3000, utilize o comando:
```
yarn dev 
```

## 🧐 Regras de Negócio <a name = "rules"></a>

#### Cadastro de Usuários
  - [x] Não é permitido cadastrar mais de um usuário com o mesmo email
  - [x] Não é permitido cadastrar um usuário sem email


#### Cadastro de tags
  - [x] Não é permitido cadastrar mais de uma tag com o mesmo nome
  - [x] Não é permitido cadastrar uma tag sem nome
  - [x] Não é permitido cadastro de tags por usuários que não sejam administradores
#### Cadastro de Elogios
  - [x] Não é permitido que o usuário cadastre um elogio para si
  - [x] Não é permitido cadastrar elogios para usuários inexistentes ou inválidos
  - [x] Usuário precisa estar autenticado na aplicação para cadastrar elogios

## ⛏️ Ferramentas Utilizadas <a name = "built_using"></a>

- [SQLite](https://www.sqlite.org/index.html) - SQLite
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment (Versão LTS)
- [TypeORM](https://typeorm.io/#/) - TypeORM
- [Yarn](https://yarnpkg.com/) - Yarn
- [Typescript](https://www.npmjs.com/package/typescript) - Typescript


## 🎉 Aprendizados <a name = "acknowledgement"></a>

- Princípios de Solid
- Autenticação com JWT
- Utilização do typeorm
- Construção de API Node com Typescript
- Utilização de SQLite

<p align="center">Made by 👩🏾‍💻 <a href="https://linkedin.com/in/jessicacastros">Jessica Castro</a> with 💙</p>
