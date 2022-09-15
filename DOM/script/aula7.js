// Como vimos, o objeto document é o responsável por todo acesso a arvore doom do navegador
// Então todas as páginas web, são de alguma forma uma árvore
// Tudo o que está na árvore DOM, é um nó: textos, elementos, atributos

console.log(document.documentElement)
console.log(document.documentElement.firstChild)
console.log(document.documentElement.lastChild)

// document.documentElement -> Retorna o Nó raiz (elemento raiz) da página
// document.documentElement.firstChild -> Retorna o primeiro nó filho, do nó raiz (o primeiro elemento filho do elemento raiz)
// document.documentElement.lastChild -> Retorna o ultimo nó filho, do nó raiz (o ultimo elemento filho do elemento raiz)

console.log(document.body.childNodes)

// document.body.childNodes -> Retornna os nós filhos do nó body (dentro de um NodeList)
// um NodeList é uma lista ordenada de nós

let lista = document.body.childNodes
console.log(lista.length)

// Se eu quiser acessar o conteúdo do nó de índice 5
console.log(lista[5].innerHTML)

// Retornar o nome do nó
console.log(lista[5].nodeName)

// Retornar o tipo do nó
console.log(lista[5].nodeType)
/* Retorna 1, 2, 3 ou 8
  1 -> Nó de elemento
  2 -> Nó de atributo
  3 -> Nó de texto
  4 -> Nó de comentário
*/

// Retornar o valor do nó
console.log(lista[1].nodeValue)
// Sempre retorna nulo para nó de elemento
// Retorna o atributo para nó de atributo
// Retorna o conteúdo para nó de texto ou comentário

console.log(lista[5].childNodes)

console.log(lista[5].childNodes[3])
// Observe que dentro do parágrafo, temos um nó de texto
console.log(lista[5].childNodes[3].childNodes[0].nodeValue)

// Acessamos as propriedades e exibimos os valores

// Se eu quiser retornar o elemento pai do botão btn

console.log(document.getElementById("btn").parentNode)
console.log(document.getElementById("btn").parentNode.parentNode)