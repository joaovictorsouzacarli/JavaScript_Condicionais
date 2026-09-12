# Praticando JavaScript: Condicionais

Exercícios introdutórios de JavaScript para praticar estruturas condicionais, operadores lógicos e tomada de decisão.

## Conteúdos praticados

- `if`, `else if` e `else`;
- operador ternário;
- `switch` e `case`;
- operadores de comparação (`===`, `>=`, `<`, `!==`);
- operadores lógicos (`&&` e `||`);
- operador módulo (`%`);
- template literals;
- validação de faixas e regras de negócio.

## Exercícios

| Arquivo | Descrição | Conceitos principais |
| --- | --- | --- |
| [`001.js`](./001.js) | Soma dois números quando a operação escolhida é `soma`; caso contrário, multiplica os valores. | `if/else`, comparação e operadores aritméticos |
| [`002.js`](./002.js) | Identifica o percentual de bônus de acordo com a faixa salarial. | `if/else if/else`, comparação e faixas de valores |
| [`003.js`](./003.js) | Exibe uma saudação personalizada quando um nome é informado ou uma saudação para visitante. | operador ternário e template literal |
| [`004.js`](./004.js) | Verifica se um ano é bissexto. | operador módulo, `&&` e `||` |
| [`005.js`](./005.js) | Verifica se uma pessoa estudante recebe bônus com base na nota e no número de faltas. | `if/else` e `&&` |
| [`006.js`](./006.js) | Classifica uma temperatura como fria, agradável ou quente. | `switch(true)` e condições |
| [`007.js`](./007.js) | Verifica o horário de funcionamento da loja de acordo com o dia da semana. | `if/else`, `||` e regras de horário |
| [`008.js`](./008.js) | Classifica uma pessoa como infantil, juvenil ou adulta de acordo com a idade. | `switch(true)` e faixas etárias |
| [`009.js`](./009.js) | Informa o nível de acesso de acordo com o tipo de usuário. | `switch/case` e `default` |
| [`010.js`](./010.js) | Verifica se o usuário informado é `admin` e exibe a mensagem de login correspondente. | `if/else` e comparação de strings |

> **Observação:** o enunciado do exercício 010 sugere o uso do operador ternário, mas a implementação atual utiliza `if/else`.

## Como executar

É necessário ter o [Node.js](https://nodejs.org/) instalado.

No terminal, entre nesta pasta e execute qualquer exercício:

```bash
node 001.js
```

Para executar outro arquivo, substitua o número:

```bash
node 004.js
node 009.js
```

## Exemplos de saída

```text
O resultado da soma é: 15
O bônus é de 10%
Olá, João!
O 2022 não é bissexto
Quente
Você tem acesso limitado ao app!
```

Os valores de entrada estão definidos diretamente em cada arquivo. Para testar outros cenários, altere as constantes e execute o arquivo novamente.

## Objetivo

Este material faz parte da prática de lógica de programação com JavaScript, com foco em transformar regras descritas em linguagem natural em condições executáveis.
