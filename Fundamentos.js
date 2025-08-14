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