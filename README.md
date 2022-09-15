# Browser Object Model (BOM)

- Trata dos objetos que são relacionados com o navegador em si​
- É formado por uma hierarquia de objetos, cada um em seu nível, acessíveis por um objeto pai de nível superior​
- O objeto mais acima de todos os outros é o window​
- Não há um padrão oficial que possa ser referenciado, algumas funções são suportadas por todos os navegadores, outras não​
- Vamos aprender algumas das funções que funcionam em todos os navegadores


![](https://github.com/edufslima9/cmtech_ryseup/blob/master/res/bom-tree.PNG)
> Árvore BOM


####Objetos BOM

- window: Engloba todo o BOM e Javascript, incluindo os eventos, alertas, outras janelas que possam ser abertas através da janela principal (pop-ups), o endereço da página, nome da página, e etc.​
- alert: apresenta uma caixa de diálogo mostrando a mensagem inserida.​
- confirm: apresenta uma caixa de diálogo, mostrando a mensagem inserida, mas também exibe os botões OK e Cancelar. Se o usuário clicar em "OK" retorna true, e se clicar em "Cancelar" retorna false.​
- prompt: É a mesma coisa da janela de confirmação, porém, tem um campo onde o usuário pode digitar algo. Se ele digitar e pressionar "OK", o valor que ele digitou é retornado, se ele clicar em "Cancelar", um valor null é retornado.​
- location: É bastante utilizado para obter ou manipular o endereço da página em que estamos trabalhando
- history: Assim que você entra em uma página, o JavaScript ativa o objeto history e registra todas as URLs que você acessou, assim como os botões de página anterior e posterior do navegador fazem​
- screen: O objeto screen contém informações sobre a tela do navegador do usuário que está acessando o site
- navigator: Contém informações sobre o navegador do usuário, como: nome, versão, se os cookies estão ativos e etc.​
- screen: O objeto screen contém informações sobre a tela do navegador do usuário que está acessando o site

# Document Object Model (DOM)

- É um dos objetos mais importantes para a manipulação de elementos da página, na verdade, todos elementos HTML de uma página estão dentro desse objeto

![](https://github.com/edufslima9/cmtech_ryseup/blob/master/res/dom-tree.jpeg)
> Árvore DOM