# Desafio técnico NZN - Busca ao Alvo

Este desafio consiste em implementar uma função para realizar uma busca em um array ordenado de inteiros. Dado um array `nums` ordenado em ordem crescente e um inteiro `target`, a função deve retornar o índice do elemento `target` no array `nums`, se ele existir. Caso contrário, deve retornar -1.

## Solução

A solução proposta utiliza o algoritmo de busca binária para encontrar o índice do elemento `target` no array `nums`. Este algoritmo tem uma complexidade de tempo de O(log n), onde n é o número de elementos no array.

A função `searchTarget` foi implementada em **JavaScript** e está contida no arquivo `searchTarget.js`. Junto a função, também foi implementado os testes unitários para verificar se a função está funcionando corretamente.

## Instalação

Clone este repositório:

```bash
git clone https://github.com/amand4/test-nzn.git
```

## Como rodar os testes

No terminal, execute os comandos:

```bash
cd test-nzn
yarn
yarn test
```

Ou usando o NPM:

```bash
cd test-nzn
npm install
npm test
```
