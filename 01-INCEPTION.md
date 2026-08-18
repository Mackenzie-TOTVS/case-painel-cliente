# 01 - Concepção

## Minha interpretação do problema

O objetivo do projeto é criar um protótipo de um Painel do Cliente para ajudar um Advisor de uma gestora de investimentos.

Atualmente, as informações de um cliente podem estar espalhadas em diferentes instituições e sistemas. Por isso, antes de uma reunião, o Advisor precisa procurar essas informações manualmente.

A proposta do painel é reunir as principais informações do cliente em uma única tela.

O painel deverá apresentar:

- dados básicos do cliente;
- patrimônio distribuído em pelo menos três instituições;
- patrimônio total consolidado;
- distribuição dos investimentos por categoria;
- histórico recente de relacionamento;
- uma oportunidade de cross-sell para auxiliar o Advisor.

Também entendi que o objetivo do case não é somente avaliar o resultado final, mas principalmente avaliar como conduzi o desenvolvimento utilizando uma ferramenta de inteligência artificial.

## Premissas assumidas

Para manter o protótipo simples, assumi que:

- haverá apenas um cliente fictício;
- todos os dados serão fictícios;
- os dados ficarão armazenados em um arquivo JSON;
- os valores serão apresentados em reais;
- não será necessário banco de dados;
- não será necessário sistema de login;
- não haverá integração com instituições financeiras reais;
- o painel será somente para visualização;
- o patrimônio total será calculado a partir dos valores das instituições;
- a distribuição da carteira será calculada a partir dos dados;
- a oportunidade de cross-sell será baseada em uma regra simples e explicável.

## Perguntas que eu faria ao solicitante

Caso pudesse conversar com o solicitante antes do desenvolvimento, faria algumas perguntas:

1. O Advisor precisa visualizar apenas um cliente ou vários clientes?
2. O painel será utilizado principalmente em computadores ou também em celulares?
3. Os valores precisam considerar investimentos em moedas diferentes?
4. O Advisor precisa apenas visualizar informações ou também poderá editá-las?
5. Existe alguma identidade visual que deveria ser seguida?
6. Como as oportunidades de cross-sell são definidas atualmente?
7. Existe alguma regra de negócio específica para recomendar produtos?
8. O histórico de relacionamento precisa mostrar quem realizou cada interação?
9. Existe necessidade de mostrar a evolução histórica do patrimônio?
10. O protótipo precisa ser publicado na internet ou somente executado localmente?

## Decisão inicial de tecnologia

Para o protótipo, escolhi utilizar HTML, CSS e JavaScript.

Os dados fictícios serão armazenados em um arquivo JSON.

Escolhi essa solução porque quero manter o projeto simples, fácil de executar e principalmente fácil de explicar durante uma entrevista técnica.

Evitei utilizar frameworks ou uma arquitetura mais complexa porque não considero que sejam necessários para atender ao objetivo deste protótipo.