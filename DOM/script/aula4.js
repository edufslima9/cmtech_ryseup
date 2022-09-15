let paragrafo = document.getElementById("p1")

console.log(paragrafo.innerHTML)

paragrafo.innerHTML = "Novo conteúdo"

console.log(paragrafo.innerHTML)

paragrafo.style.color = "red"
paragrafo.style.backgroundColor = "#333"
paragrafo.style.height = "100px"
//document.getElementById("p1").style

// 1 -- usamos o innerHTML para exibir o conteúdo
// 2 -- mas podemos atribuir um novo conteúdo

// 3 -- Alterar o estilo dos elementos através do objeto style -> paragrafo.style
// 4 -- paragrafo.style.backgroundColor = "#333"
// 5 -- paragrafo.style.height = "100px"

// 6 -- Podemos acessar também os atributos do nosso elemento

let imagem = document.getElementById("imagem")
imagem.src = "html.svg.png"
imagem.alt = "teste de imagem"
imagem.width = 100