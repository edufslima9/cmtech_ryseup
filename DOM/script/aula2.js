console.log(
  document.querySelector("#p2")
)

// 1 -- acessar elementos pela Tag -> document.getElementsByTagName("div")
// 2 -- conteúdo do elemento -> document.getElementsByTagName("div")[0].innerHTML
// 3 -- mesmo se existir apenas um elemento, ele irá retornar um HTMLCollection, apenas com um item -> document.getElementsByTagName("br")

// 4 -- retonar o primeiro elemento que encontrar (busca o elemento pela tag, id, classe) -> document.querySelector("div")
// 5 -- document.querySelector(".div2")
// 6 -- document.querySelector("p")
// 7 -- document.querySelector("#p2")