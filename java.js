let Arr = []

let juncao = document.getElementById('Iterar')
const Confirm = document.getElementById('Confirmar')


Confirm.addEventListener('click', function(){

let Modelo = document.getElementById('Car').value
let ID = document.getElementById('CarNum').value
let Estacionamento = document.getElementById('Resultado')



const People = {

    Nome : Modelo,
    Numero : ID

  }


if(Modelo && ID ){

Arr.push(People)


Adicionar = ""
for(let i = 0; i < Arr.length; i++ ){

    Adicionar += (i + 1) + "- " + "Associado: " + Arr[i].Nome +  " de Numero : " + Arr[i].Numero + "\n" 

}
console.log(Adicionar)
console.log(Arr)

Iterar.innerText = 'Contingente : ' + Arr.length
Estacionamento.innerText = Adicionar

 document.getElementById('Car').value = ""
 document.getElementById('CarNum').value = ""

}else{
    alert("Um ou mais campos não foram prenchidos !")
    console.error('ERROR #27072001')
    document.getElementById('Car').value = ""
    document.getElementById('CarNum').value = ""
}
})

const Remove = document.getElementById('Remove')

Remove.addEventListener('click', function(){

let Estacionamento = document.getElementById('Resultado')
 const PessoaFisica = document.getElementById('Carro').value
 let juncao = document.getElementById('Iterar')

let Search = Arr.findIndex(Busca => Busca.Carro === PessoaFisica || Busca.Numero === PessoaFisica )


    if(Search !== -1){

        const Confirmacao = confirm('Deseja mesmo remover o Associado ? ')

    if(Confirmacao === true){

        Arr.splice(Search,1)

        let Adicionar = ""

    for(let i = 0; i < Arr.length; i++){
 
        Adicionar += (i + 1) +("- ") + "Associado : " + Arr[i].Nome + " de Numero : " + Arr[i].Numero + "\n"
 
    }
    Estacionamento.innerText = Adicionar
    juncao.innerText = 'Contingente : ' + Arr.length
    document.getElementById('Carro').value = ""
    console.log(Arr)
   }else{

    alert("O ASSOCIADO CONTINUARÁ ! ")
   
}
  }else{

    alert("ASSOCIADO NÃO ENCONTRADO ! ")
    console.warn('VEICULONAOENCONTRADO #20702001');
    document.getElementById('Carro').value = ""
    console.log(Arr)
    Estacionamento.innerText = Adicionar
  }
})

