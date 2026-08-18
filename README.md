# Painel do Cliente

**Case Técnico — Estágio em Technology | Galapagos Capital**

Protótipo funcional de um painel para apoiar o Advisor na visualização consolidada das principais informações de um cliente.

A aplicação reúne dados pessoais, patrimônio distribuído entre diferentes instituições, alocação da carteira, histórico de relacionamento e uma oportunidade de cross-sell em uma única interface.

---

## Visão geral

Em uma gestora de investimentos, as informações de um cliente podem estar distribuídas entre diferentes instituições e sistemas.

O objetivo deste protótipo é centralizar essas informações em uma única tela, permitindo que o Advisor tenha uma visão rápida do cliente antes e durante uma conversa.

O projeto utiliza somente dados fictícios.

---

## Funcionalidades

| Requisito | Implementação |
|---|---|
| Dados do cliente | Nome, segmento, e-mail e telefone |
| Patrimônio consolidado | Soma automática das posições das instituições |
| Múltiplas instituições | Itaú, BTG Pactual e XP Investimentos |
| Distribuição da alocação | Percentuais e barras visuais por categoria |
| Histórico de relacionamento | Últimas quatro interações registradas |
| Cross-sell | Oportunidade identificada através de regra determinística |
| Tratamento de erros | Validação dos dados e mensagem de erro na interface |
| Testes | Testes automatizados das principais regras de negócio |

---

## Demonstração dos dados atuais

O cliente fictício utilizado no protótipo é:

**Mariana Costa**

Segmento:

**Private**

Patrimônio total consolidado:

**R$ 2.350.000,00**

Distribuição entre instituições:

| Instituição | Patrimônio |
|---|---:|
| Itaú | R$ 800.000,00 |
| BTG Pactual | R$ 950.000,00 |
| XP Investimentos | R$ 600.000,00 |

---

## Distribuição da carteira

A alocação é calculada automaticamente a partir das posições existentes no arquivo JSON.

| Categoria | Percentual aproximado |
|---|---:|
| Renda Fixa | 45,53% |
| Fundos | 29,79% |
| Renda Variável | 16,17% |
| Câmbio | 8,51% |

Os percentuais não são escritos diretamente no HTML.

Eles são calculados pelas regras existentes em `src/domain.js`.

---

## Oportunidade de cross-sell

A aplicação possui uma regra simples e explicável para demonstrar uma oportunidade comercial.

Quando a participação da categoria **Câmbio** é inferior a **10% do patrimônio**, o painel sinaliza:

**Diversificação internacional**

Produto sugerido:

**Produtos com exposição internacional**

Com os dados atuais, a participação da categoria Câmbio é de aproximadamente **8,51%**, portanto a oportunidade é apresentada ao Advisor.

Essa regra foi mantida propositalmente simples para que seu funcionamento seja determinístico, testável e fácil de explicar.

---

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- JSON
- Node.js
- `node:test`
- Git
- GitHub

O projeto não utiliza framework de frontend, banco de dados ou backend.

---

## Arquitetura

O protótipo mantém as responsabilidades separadas:

```text
data/client.json
      │
      │ dados fictícios
      ▼
src/app.js
      │
      ├── carrega os dados
      ├── chama as regras
      └── atualiza a interface
      │
      ▼
src/domain.js
      │
      ├── valida dados
      ├── calcula patrimônio
      ├── calcula alocação
      └── identifica cross-sell
      │
      ▼
index.html + styles.css
      │
      ▼
Painel do Cliente
```

As regras de negócio permanecem separadas da manipulação do HTML.

---

## Estrutura do projeto

```text
case-painel-cliente/
│
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
├── 01-INCEPTION.md
├── 02-PLAN.md
├── 03-OPERATIONS.md
├── AGENTS.md
├── README.md
├── index.html
├── package.json
└── styles.css
```

Antes da entrega final também será incluída a pasta:

```text
historico/
```

contendo o histórico das interações utilizadas durante o desenvolvimento com IA.

---

## Responsabilidade dos principais arquivos

### `data/client.json`

Fonte dos dados fictícios do cliente, instituições, posições patrimoniais e histórico de relacionamento.

### `src/domain.js`

Contém as regras de negócio.

Responsável por:

- validação das instituições;
- cálculo do patrimônio total;
- cálculo por instituição;
- cálculo da alocação;
- cálculo dos percentuais;
- identificação da oportunidade de cross-sell.

### `src/app.js`

Responsável por conectar dados, regras de negócio e interface.

Também realiza:

- carregamento do JSON;
- formatação de moeda;
- formatação de datas;
- renderização das informações;
- tratamento de erros da interface.

### `index.html`

Estrutura semântica da interface.

### `styles.css`

Apresentação visual, responsividade, cards e barras de alocação.

### `tests/domain.test.js`

Testes automatizados das principais regras de negócio.

---

## Como executar

Na raiz do projeto, execute:

```bash
python3 -m http.server 5500
```

Depois acesse:

```text
http://localhost:5500
```

A aplicação precisa ser executada através de um servidor HTTP local porque utiliza `fetch` para carregar o arquivo JSON.

Para encerrar o servidor:

```text
Control + C
```

Mais detalhes estão disponíveis em:

[`03-OPERATIONS.md`](./03-OPERATIONS.md)

---

## Como executar os testes

Na raiz do projeto:

```bash
npm test
```

Resultado atual esperado:

```text
tests 6
pass 6
fail 0
```

Os testes verificam:

- patrimônio total;
- patrimônio por instituição;
- percentuais de alocação;
- regra de cross-sell;
- rejeição de patrimônio negativo;
- rejeição de lista vazia de instituições.

---

## Artefatos do case

Os documentos solicitados durante o processo de desenvolvimento estão organizados na raiz do repositório.

| Artefato | Local | Finalidade |
|---|---|---|
| Concepção | [`01-INCEPTION.md`](./01-INCEPTION.md) | Interpretação do problema, premissas e perguntas |
| Planejamento | [`02-PLAN.md`](./02-PLAN.md) | Decomposição da solução e decisões tomadas durante o desenvolvimento |
| Operação | [`03-OPERATIONS.md`](./03-OPERATIONS.md) | Execução, testes e considerações para produção |
| Skill da IA | [`AGENTS.md`](./AGENTS.md) | Instruções específicas para agentes trabalharem neste projeto |
| Histórico de IA | `historico/` | Histórico cronológico das interações com ferramentas de IA |

---

## Processo de desenvolvimento com IA

A IA foi utilizada como ferramenta de apoio durante o desenvolvimento.

O processo foi conduzido de maneira incremental:

```text
Concepção
    ↓
Planejamento
    ↓
Dados fictícios
    ↓
Regras de negócio
    ↓
Interface
    ↓
Estilização
    ↓
Integração
    ↓
Testes
    ↓
Refinamento da skill
    ↓
Documentação
```

As sugestões da IA foram analisadas antes de serem incorporadas.

Decisões ou propostas modificadas durante o processo estão registradas em:

[`02-PLAN.md`](./02-PLAN.md)

A evolução das instruções utilizadas pelo agente está registrada no histórico do:

[`AGENTS.md`](./AGENTS.md)

---

## Testes atuais

Atualmente o projeto possui **6 testes automatizados**.

```text
✔ calcula o patrimônio total corretamente

✔ calcula o patrimônio de cada instituição

✔ calcula os percentuais de alocação

✔ identifica oportunidade de diversificação internacional

✔ rejeita valor patrimonial negativo

✔ rejeita lista vazia de instituições
```

Resultado esperado:

```text
6 testes
6 passando
0 falhando
```

---

## Limitações do protótipo

Este projeto foi desenvolvido como protótipo e possui limitações intencionais.

Atualmente:

- existe apenas um cliente fictício;
- os dados são estáticos;
- não existe autenticação;
- não existe backend;
- não existe banco de dados;
- não existe integração com instituições reais;
- o painel é somente de leitura;
- a regra de cross-sell é demonstrativa.

As possíveis evoluções para produção estão detalhadas em:

[`03-OPERATIONS.md`](./03-OPERATIONS.md)

---

## Status do projeto

**Protótipo funcional**

Funcionalidades principais implementadas:

```text
[OK] Dados do cliente
[OK] Patrimônio consolidado
[OK] Três instituições
[OK] Distribuição da alocação
[OK] Representação visual
[OK] Histórico de relacionamento
[OK] Cross-sell
[OK] Tratamento de erros
[OK] Testes automatizados
[OK] Documentação de concepção
[OK] Documentação de planejamento
[OK] Documentação operacional
[OK] Skill específica do projeto
```

Etapa restante antes da entrega:

```text
[ ] Exportação e inclusão do histórico das conversas com IA
[ ] Revisão final do repositório
```

---

## Autor

Desenvolvido para o processo seletivo de **Estágio em Technology — Galapagos Capital**.