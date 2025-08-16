/* Variáveis são elementos que armazenam valores na memória que podem 
ser utilizados no futuro
   - var: antigo e pouco utilizado atualmente
   - let: pode ser modificada
   - const: valor constante (não pode ser alterada)
*/

let nome = "Alex"; // let + string (texto)
const idade = 25; // const + int (Número inteiro)
let ativo = true; // let + boolean (true)

/*Tipo de dados:
   - String = Texto ('Alex'; "Alex"; `Alex`)
   - Number = Int (1; 2; 3...) ou Float (1.5; 2.7; 3.3...) 
   - Boolean = Verdadeiro (True) / Falso (False)
   - Null = Nulo
   - Undefined = Valor indefinido
   - Array = Lista de valors [1, 2, 3, 4, 5, ...] 
*/

console.log("Nome: " + nome); // console.log = exibir informações no console
console.log("idade: " + idade);
console.log("Ativo? " + ativo);

/*Operadores: Servem para realizar operações e manipular objetos
   - Aritméticos: +(Somar); -(Subtrair); *(Multiplicar); /(Dividir); %(Resto)
   - Comparação: ==(igual à); ===(igual à(tipo/valor)); !=(Diferente de); !==(Diferente de(Tipo/valor)); ><(Menor/Maior que); >=(Maior ou igual à); <= (Menor ou igual à)
   - Lógico: &&(E); ||(ou); !(Negação) */

let a = 10;
let b = 5;
const c = "Alex";

console.log(a + b) // Somando os valores das variáveis (10+5 = 15)
console.log(a < b) // Output: False, a(10) não é menor que b(5)
console.log(a == 10) // Output: True, comparando valores a = 10
console.log(a === c) // Output: False, comparando valores e tipos (a = 5(Number) e c = Alex(String))

// Condições: Permite rodar trechos de códigos específicos baseado em condições (If e Else/ Switch) 

/*If e Else: Executa códigos com base em uma condição ou não (Se e senão) 
   - If: Se condição for verdadeira, execute código 1
   - Else: Senão, execute código 2 
*/

let saldo = 50;

if (saldo > 0) { // Compara o valor da variável, se a condição for verdadeira
   console.log("Seu saldo é positivo!") // Executa trecho de código
} 
else { // Se a condição não for verdadeira
   console.log("Seu saldo está negativo.") // Executa trecho de código
}

/*Switch/case: Estrutura condicional que permite comparar mais de uma vez um valor com outros valores */


let sinal = "Verde";

switch(sinal){ // expressão/variável
   case "Vermelho": // Primeira comparação, se verdadeira
      console.log("Pare! O sinal está vermelho"); // Executa
      break; // Encerra
   
   case "Verde": // Segunda comparação, se verdadeira
      console.log("Prossiga! O sinal está verde");
      break;
   
   case "Amarelo": // Terceira comparação, se verdadeira
      console.log("Atenção! O sinal está amarelo");
      break;
   
   default: // Caso nenhuma condição seja atendida
      console.log("Cor não reconhecida") // Executa e encerra
}

/*Loops: Usados para repetir um mesmo trecho de código em quanto uma condição for
verdadeira ou até percorrer todos os elementos de um lista/coleção */

/*For(Tradicional): Usado sempre que souber quantas vezes o código precisará se repetir
  - For(Inicialização; Condição; Incremento)*/

for(let i = 1; i < 5; i++){ // (i = 1) = inicia a contagem; (i < 5) = Condição exigida; (i++) = incrementa o i a cada iteração(Repetição)
   console.log(i) // Executado em quanto a condição for verdadeira
}

/*While: Executa o código repetidas vezes em quanto a condição for verdadeira
   - Útil quando não se sabe quantas vezes o código precisará se repetir*/

let contador = 0;

while(contador < 5){ // Condição exigida
   console.log(contador); // código executado em quanto a condição for verdadeira
   contador++; // incremento na variável para evitar um loop infinito
}

/*Do/While: Executa uma vez o código antes de verificar. Depois, repete em quanto a condição for verdadeira 
   - Comparação com o While: While - Primeiro VERIFICA / Do/While - Primeiro EXECUTA*/

let num = 10;

do{ // Primeiro executa o trecho de código
   console.log(num) 
   num++; // incremento, evitar loop infinito
} while(num < 15); // Depois verifica

/*Uso: 
   - Atualmente é pouco utilizado
   - Bom quando precisa que o código rode pelo menos uma vez, mesmo se a condição for falsa, antes de fazer a verificação
   - Execução mínima é necessária */

let senhaCorreta = "12345";
let tentativa;

do{ // Dá uma oportunidade de digitar sua senha, antes de fazer a verificação
   tentativa = prompt("Digite sua senha:") 
} while(tentativa != senhaCorreta); // Em quanto a senha permanecer incorreta, ele executa o trecho acima

console.log("Acesso liberado!") // Caso a senha esteja correta, libera o acesso

/*For/of: Percorre diretamente os valores de uma coleçao iteravel.
  - Iteravel: Algo que pode ser percorrido elemento por elemento (arrays, strings, map, set...) */

  let frutas = ["Maça, Banana, Uva, Melancia"];

  for(let fruta of frutas){
   console.log(fruta)
  }

  /*Logica:
   - Pega o objeto iteravel(Frutas) 
   - Cria um iterador (Fruta) que vai pegar sempre o proximo valor
   - Executa o trecho uma vez para cada valor
   - Encerra quando a lista acabar, sem precisar determinar um tamanho (length) */

  /*Diferença entre For(tradicional) e o For/of:
   - No for(trad) o indice e controlado manualmente, no for/of ele e automatico
   - No for(trad) o tamanho precisa ser determinado previamente, no for/of ele e pego automaticamente */

  /*Uso recomendado:
   - Quando o indice nao importar
   - Deixar o codigo mais limpo e legivel
   - Quando trabalha com coleçoes mais modernas (map, set) */

  /*O for/of pega um elemento de cada vez, direto do valor, e para sozinho no final. 
    Usar quando somento os valores forem necessarios, nao indices*/

// Funçoes

/*Funçao e um bloco de codigo reutilizavel que executa uma tarefa especifica. Pode ser chamado em outras partes do codigo
sem precisar reescrever o codigo repetidas vezes */

function nomeFuncao (parametro1, parametro2){ 
   // codigo a ser executado
   return resultado; // opcional
}

/*Por que VOCE deve usar funçoes:
 - Evita a repetiçao do mesmo codigo
 - Deixa o codigo mais limpo
 - Facilita na manutençao
 - Torna o codigo mais legivel */

function somar(a, b){ // a e b = parametro 1 e 2
   return a + b; // retorna o resultado para a chamada
}

console.log(somar(3, 4)); // output: 7

// Tipos de funcoes:

/*Funçao declarada: A mais tradicional, pode ser chamada ANTES de ser declarada */

console.log(nameFunction(Alex)); // chamada da funçao

function saudacao(nome) { // funçao declarada
   return `Bem vindo, ${nome}`;
}

/*Funçao anonima: E armazenada em uma variavel, precisa ser declarada ANTES de ser chamada */

const divisao = function(c, d) { // funçao declarada dentro de uma variavel (const)
   return c / d;
}

console.log(divisao(10, 2)); // chamada da funçao

/*Funçao sem retorno: Somente exucuta algo, sem dar um retorno(return) */

function menos(e, f){
   console.log("O resultado e: ", e - f); // sem retorno, so execuçao do codigo
}

menos(5, 2); // output: 3

// callbacks: E uma funçao passada como argumento para outra funçao que e executada em um momento posterior 


// Manipulaçao do DOM(Document Object Model)

/*Ele e uma representa seu codigo HTML baseado em uma grande arvore de obejtos, onde cada elemento(tags, textos, atributos) e
tratado com um objeto em que o Javascript consegue acessar e manipular */

/*O navegador pega o HTML, transforma ele em uma grande arvore com objetos e o Javascript consegue acessar e 
mudar essa arvore */

Document
 └── html
      ├── head
      │     └── title ("Meu Site")
      └── body
            ├── h1 ("Olá Mundo")
            └── p ("Seja bem-vindo!")

/*O DOM e importante:
  - E a unica forma do JS ler e manipular o HTML
  - Permite alterar textos, estilos e imagens/ Adicionar ou remover elementos
    Responder a interaçoes do usuario
  - Sem o DOM, JS nao poderia manipular elementos Web */

// Selecionando Elementos do DOM:

document.getElementById() // Seleciona elementos pelo ID

document.getElementsByClassName() // Pega todos os elementos de mesma classe

document.getElementsByTagName() // Pega todos os elementos pela tag

// Forma moderna com seletor CSS
document.querySelector() // Primeiro que encontrar com esse parametro
document.querySelectorAll() // Seleciona todos os elementos com esse parametro


// Eventos

/*Eventos sao açoes que acontecem no navegador que o JS pode detectar e responder 

   Exemplos de eventos:
     - Clique em um botao (Click)
     - Digitar em um campo (Input)
     - Enviar um formulario (Form)
     - Carregar uma pagina (load)
     - Passar o mouse sobre um elemento */

// Algo acontece = Codigo executado

// Principais Eventos:
/* - click: Usuario clica em algum elemento / enviar form, trocar cor
   - input: Digita algo / Validaçao em tempo real 
   - change: mudar valor do elemento / Seleçao de opçoes
   - submit: enviar um formulario / Tratar dados
   - mouseover: Mouse entra na area do elemento / adicionar destaque visual
   - mouseout: Sai da area do elemento / remover destaque
   - keydown: Tecla pressionada / atalhos do teclado
   - load: Pagina ou recurso carregado / iniciar scripts apos carregar */

// Como adicionar eventos a elementos: addEventListener.evento

const btn = document.getElementById("Id"); // Variavel "btn" armazenando a elemento selecionado (getElementById)

btn.addEventListener("click", () => { // adicionando um evento (click) ao pressionar o botao
   alert("Voce clicou no botao!") // cria um alerta na pagina quando o botao for pressionado
});


// Evitando comportamentos padrao

/*Alguns eventos tem um comportamento padrao definido pelo navegador e para evitar isso usamos o event/event.preventDefault() */

// Por padrao, ao enviar um formulario o navegador recarrega a pagina
document.getElementById("Form").addEventListener("submit", (event) => {
   event.preventDefault() // impede o reload da pagina
   alert("Enviou o formulario!")
})

// Trabalhando com o Event(Objeto)

/*Toda funçao de evento recebe um objeto de evento contendo as informaçoes do que aconteceu */

event.target // elemento que disparou o evento
event.type // tipo de evento
event.key // tecla pressionada, usada em eventos com o teclado

// Adendos:

/*innerHtml vs textContent:
  - Explicando de maneira rapida e superficial cada um, innerHtml e usado para manipular elementos em HTML. Seja pra adicionar, alterar
  ou apenas ler o elemento html. Nao e recomendado o uso, pois e lento e contem riscos de segurança dependendo da origem dos dados.
  Ja o textContent consegue ler e manipular apenas elementos de textos, ignorando completamente qualquer tag em HTML. Mas e mais rapido
  e seguro de utilizar.
  
  -Use o innerHtml apenas se precisar alterar a estrutura do HTML ou ter um HTML dinamico, se nao for o caso, de preferencia para o 
  textContent.*/

// innerHtml estrutura:

const elemento = document.getElementById('meuElemento');

// Obtendo o conteúdo HTML
const conteudoAtual = elemento.innerHTML;
console.log(conteudoAtual);
// Output: <p>Este é um parágrafo.</p><a href="#">Clique aqui</a>

// Definindo um novo conteúdo HTML
elemento.innerHTML = '<p>Novo conteúdo!</p>';
console.log(elemento.innerHTML);
// Output: <p>Novo conteúdo!</p>