# Ranking-Nomes-BR
Uma aplicação Web que faz a leitura de um arquivo Json com dados sobre a nomes no Brasil e Tocantins e exibe duas tabelas com dados até hoje e até o ano 2000 através de HTML, JavaScript e CSS.

## JSON
JSON ou JavaScript Object Notation é um formato de dados aberto independente de linguagem que usa texto legível por humanos para expressar objetos de dados que consistem em pares atributo-valor.

## Principais funções
* startApp: Carrega o JSON com os nomes, trasforma em um Array contendo os objetos, executa as outras funções e renderiza no HTML
* unifyNames: Unifica os nomes iguais mas que divergem o local, executa getRanking() e retorna um Array com as alterações
* getRanking: Atribui uim rank para cada nome beseado no local, e retorna um Array com as alterações

## Demonstação
Abri no <a href="https://s1lviuz.github.io/Ranking-Nomes-BR/">GitHub Pages</a> 🚀
