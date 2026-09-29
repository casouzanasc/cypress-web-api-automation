# Automação CY

<p align="center">
  <img alt="Cypress" src="https://img.shields.io/badge/Cypress-12.17.2-17202C?style=for-the-badge&logo=cypress" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript" />
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=nodedotjs" />
  <img alt="React" src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react" />
  <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
</p>

Projeto desenvolvido por **Camila Souza Nascimento** durante os estudos de Automação de Testes com Cypress, com foco na aplicação prática de testes automatizados Web e API e na construção de um portfólio técnico de Quality Assurance.

## 🎯 Objetivo

Este projeto tem como objetivo praticar e demonstrar conceitos de automação de testes utilizando Cypress, incluindo:

- testes end-to-end
- automação de fluxos Web
- testes positivos e negativos
- testes de API
- Page Object
- assertions
- execução headless
- geração de relatórios
- integração entre frontend, backend e banco de dados

## 🛠️ Stack utilizada

- Cypress
- JavaScript
- Node.js
- Express
- Sequelize
- PostgreSQL
- React
- Vite
- Mochawesome Reporter
- Git e GitHub

## 📁 Estrutura do projeto

```text
automacao_cy/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── index.js
│
├── frontend/
│   ├── src/
│   ├── vite.config.js
│   └── package.json
│
├── testAutomation/
│   ├── cypress/
│   │   ├── e2e/
│   │   │   ├── api/
│   │   │   └── pages/
│   │   │       ├── login/
│   │   │       ├── home/
│   │   │       ├── cart/
│   │   │       └── checkout/
│   │   ├── fixtures/
│   │   └── support/
│   │
│   ├── cypress_dev.config.js
│   └── package.json
│
├── package.json
├── README.md
└── LICENSE
```

## 🧩 Page Object

Os testes Web utilizam Page Object para separar as responsabilidades entre os cenários de teste, as ações realizadas nas páginas e os elementos utilizados.

```text
Spec
 ↓
Page Object
 ↓
Elements / Seletores
```

Essa organização facilita a leitura, reutilização e manutenção dos testes automatizados.

## 🧪 Cenários automatizados

### SauceDemo

Os testes do SauceDemo incluem:

- login com sucesso
- login com senha inválida
- logout
- adição de produto ao carrinho
- validação do carrinho
- preenchimento dos dados do checkout
- finalização da compra
- validação da confirmação do pedido

### API

O projeto também possui testes de API utilizando `cy.request()`, incluindo:

- requisições GET
- requisições POST
- validação de status HTTP
- validação do body da resposta
- validação de propriedades retornadas pela API
- validação de endpoints locais

## ⚙️ Pré-requisitos

Para executar o projeto localmente:

- Node.js 18+
- npm
- Git
- PostgreSQL

## 📦 Instalação

Clone o repositório e instale as dependências na raiz:

```bash
npm install
```

Depois instale as dependências do projeto de automação:

```bash
cd testAutomation
npm install
```

## 🗄️ Configuração do backend local

Crie o arquivo:

```text
backend/.env
```

Exemplo:

```env
PORT=3001
JWT_KEY=chave-secreta

DEV_DB_USERNAME=postgres
DEV_DB_PASSWORD=SUA_SENHA
DEV_DB_NAME=database_development
DEV_DB_HOSTNAME=127.0.0.1
DEV_DB_DIALECT=postgres
```

> O arquivo `.env` contém configurações locais e não deve ser versionado no Git.

Crie também o banco de desenvolvimento no PostgreSQL:

```sql
CREATE DATABASE database_development;
```

## ▶️ Executando a aplicação local

### Backend

Na raiz do projeto, execute:

```bash
npm run dev -w backend
```

O backend será iniciado em:

```text
http://localhost:3001
```

Mantenha esse terminal aberto.

### Frontend

Abra outro terminal e execute:

```bash
npm run dev -w frontend
```

O frontend será iniciado em:

```text
http://localhost:3000
```

Mantenha esse terminal aberto durante os testes que utilizam a aplicação local.

## 🧪 Executando os testes

Entre na pasta de automação:

```bash
cd testAutomation
```

### Cypress em modo interativo

```bash
npm run open:e2e:local
```

### Executar todos os testes em modo headless

```bash
npm run run:e2e:local
```

### Executar somente os testes de API

```bash
npm run run:api:local
```

### Executar somente o teste de login do SauceDemo

```bash
npm run run:sauce:login
```

Também é possível executar diretamente um spec específico:

```bash
npx cypress run --config-file cypress_dev.config.js --spec "cypress/e2e/pages/login/sauceLogin.cy.js"
```

## 📊 Relatórios

O projeto utiliza o `cypress-mochawesome-reporter`.

Após a execução dos testes, o relatório HTML é gerado em:

```text
testAutomation/cypress/reports/html/index.html
```

O Cypress também gera vídeos das execuções headless em:

```text
testAutomation/cypress/videos/
```

## ✅ Exemplo de execução

```text
Spec                                     Tests   Passing   Failing
cart/sauceCart.cy.js                        1        1         0
checkout/sauceCheckout.cy.js                1        1         0
home/sauceHome.cy.js                        1        1         0
login/sauceLogin.cy.js                      3        3         0

All specs passed!                           6        6         0
```

## 💡 Conhecimentos aplicados

Durante o desenvolvimento deste projeto foram aplicados conceitos de:

- automação de testes end-to-end
- Cypress
- JavaScript
- Page Object
- testes positivos e negativos
- testes de API
- `cy.request()`
- validação de status HTTP
- validação de respostas JSON
- manipulação de dados de teste
- custom commands
- execução headless
- geração de relatórios
- integração entre frontend, backend e PostgreSQL
- análise e manutenção de projetos existentes
- Git e GitHub

## 🚀 Evolução do projeto

O projeto continuará sendo evoluído com novos cenários e práticas de automação.

Algumas evoluções planejadas:

- ampliar os cenários do SauceDemo
- aumentar a cobertura de testes de API
- utilizar fixtures para massa de dados
- ampliar o uso de custom commands
- melhorar a reutilização dos Page Objects
- adicionar execução automática dos testes em CI/CD

## 👩🏽‍💻 Autora

**Camila Souza Nascimento**

Analista de Sistemas / Quality Assurance
