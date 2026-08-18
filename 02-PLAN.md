# 02 - Plano de Construção

## Objetivo

Construir um protótipo web simples de um Painel do Cliente utilizando HTML, CSS, JavaScript e dados fictícios armazenados em JSON.

A implementação será realizada em pequenas etapas para que a evolução do projeto possa ser acompanhada através do histórico de commits.

---

## Unidade 1 - Estruturar os dados fictícios

Criar um arquivo JSON representando um cliente fictício.

O arquivo deverá possuir:

- nome;
- segmento;
- telefone;
- e-mail;
- patrimônio em pelo menos três instituições;
- investimentos separados por categoria;
- histórico das últimas interações.

Resultado esperado:

Ter uma única fonte de dados fictícios para alimentar o painel.

---

## Unidade 2 - Criar as regras de negócio

Criar funções JavaScript responsáveis pelos cálculos do painel.

Inicialmente serão necessárias funções para:

- calcular o patrimônio total;
- calcular o valor investido em cada categoria;
- calcular o percentual de cada categoria;
- identificar uma oportunidade de cross-sell.

As regras de negócio deverão ficar separadas da renderização da página.

Resultado esperado:

Os valores importantes do painel serão calculados a partir dos dados, evitando valores fixos diretamente no HTML.

---

## Unidade 3 - Criar a estrutura visual do painel

Criar o arquivo HTML contendo as principais áreas:

- cabeçalho;
- informações do cliente;
- patrimônio consolidado;
- instituições;
- distribuição da alocação;
- histórico de relacionamento;
- oportunidade de cross-sell.

Resultado esperado:

Ter a estrutura completa da página, ainda sem preocupação principal com aparência.

---

## Unidade 4 - Criar o estilo visual

Criar o CSS da aplicação.

O painel deverá possuir:

- organização em cards;
- boa legibilidade;
- destaque para o patrimônio total;
- representação visual da alocação;
- destaque para a oportunidade de cross-sell;
- adaptação básica para diferentes tamanhos de tela.

Resultado esperado:

Uma interface simples, organizada e adequada para demonstração.

---

## Unidade 5 - Integrar os dados com a interface

Criar o JavaScript responsável por:

- carregar os dados fictícios;
- utilizar as funções de cálculo;
- apresentar os resultados no HTML;
- formatar valores monetários;
- apresentar as interações do cliente;
- apresentar a oportunidade identificada.

Resultado esperado:

Painel funcionando com informações geradas a partir dos dados fictícios.

---

## Unidade 6 - Implementar a oportunidade de cross-sell

Criar uma regra simples e explicável.

A primeira ideia será analisar a distribuição patrimonial do cliente e identificar uma categoria com baixa participação na carteira.

A recomendação deverá informar:

- qual oportunidade foi encontrada;
- por que ela foi encontrada;
- qual tipo de produto o Advisor poderia conversar com o cliente.

A regra poderá ser ajustada durante o desenvolvimento caso produza uma recomendação pouco coerente.

---

## Unidade 7 - Tratamento de erros

Adicionar tratamento para situações como:

- arquivo de dados não encontrado;
- estrutura de dados inválida;
- valores patrimoniais inválidos;
- campos essenciais ausentes.

O usuário deverá receber uma mensagem compreensível caso não seja possível carregar o painel.

---

## Unidade 8 - Testes

Criar testes para as principais regras de negócio, especialmente:

- cálculo do patrimônio total;
- cálculo da alocação;
- cálculo de percentuais;
- regra de cross-sell;
- tratamento de valores inválidos.

---

## Unidade 9 - Documentação final

Ao final do desenvolvimento:

- criar o 03-OPERATIONS.md;
- atualizar o AGENTS.md com a estrutura real do projeto;
- criar o README.md;
- exportar o histórico das conversas com IA;
- revisar todos os requisitos do case.

---

## Estratégia de commits

Pretendo realizar commits incrementais.

Exemplo de evolução:

1. concepção e skill inicial;
2. planejamento da implementação;
3. criação dos dados fictícios;
4. regras de consolidação patrimonial;
5. estrutura inicial da interface;
6. estilização do painel;
7. integração dos dados;
8. oportunidade de cross-sell;
9. testes;
10. documentação e refinamentos.

Os commits deverão representar mudanças reais do projeto e não serão agrupados artificialmente ao final.

---

## Registro de propostas da IA corrigidas ou rejeitadas

Esta seção será atualizada durante o desenvolvimento.

Até o momento, ainda não houve uma proposta técnica de implementação rejeitada após o início da construção.

Sempre que uma sugestão da IA for considerada inadequada, registrarei:

- o que a IA sugeriu;
- qual problema identifiquei;
- qual decisão tomei;
- por que escolhi a alternativa.