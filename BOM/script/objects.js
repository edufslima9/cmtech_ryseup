let pessoa = {
  nome: 'Bruce Wayne',
  idade: 25,
  pets: ['gato', 'morcego'],
  carros: {
    camaro: {
      ano: 2022,
      placa: 'G0TH4M',
      cor: 'preto'
    }
  },
  andar: function(m) {
    alert(pessoa.nome + " andou " + m + " metros")
  }
}
console.log(pessoa.pets[1])

pessoa.pets[1] = "Cachorro"

console.log(pessoa.pets[1])