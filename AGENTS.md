# AGENTS.md

## Contexto e propósito do projeto

Este repositório contém um protótipo de um Painel do Cliente para um Advisor de uma gestora de investimentos.

O objetivo da aplicação é reunir em uma única tela informações fictícias de um cliente, incluindo:

- dados pessoais e de contato;
- patrimônio distribuído entre diferentes instituições;
- patrimônio total consolidado;
- distribuição da carteira por categoria;
- histórico de relacionamento;
- oportunidade de cross-sell.

O projeto foi desenvolvido como parte de um case técnico e deve permanecer simples, legível e fácil de explicar em uma entrevista.

---

## Stack utilizada

O projeto utiliza:

- HTML;
- CSS;
- JavaScript puro;
- JSON para os dados fictícios;
- Node.js apenas para execução dos testes automatizados;
- `node:test` para os testes.

Não utilizar frameworks de frontend neste projeto.

Não adicionar dependências externas sem uma necessidade clara.

---

## Estrutura atual do projeto

```text
/
├── data/
│   └── client.json
│
├── src/
│   ├── app.js
│   └── domain.js
│
├── tests/
│   └── domain.test.js
│
├── index.html
├── styles.css
├── package.json
├── 01-INCEPTION.md
├── 02-PLAN.md
├── 03-OPERATIONS.md
├── AGENTS.md
├── README.md
└── historico/