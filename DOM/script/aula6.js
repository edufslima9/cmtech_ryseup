let p = document.createElement("p")
p.innerHTML = "Olá pessoal"

let img = document.createElement("img")
img.src = "html.svg.png"
img.width = 100

// Qual a função do appendChild? Inserir um elemento filho no elemento pai

document.getElementById("conteudo").appendChild(p)
document.getElementById("conteudo").appendChild(img)

// removeChild
//document.getElementById("conteudo").removeChild(img)