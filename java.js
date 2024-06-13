let Arr = []

let juncao = document.getElementById('Iterar')
const Confirm = document.getElementById('Confirmar')


Confirm.addEventListener('click', function(){

let DataLocal = document.getElementById('Date').value
let Title = document.getElementById('TextTitle').value
let h4 = document.getElementById('Titulo')


h4.innerText = Title + "\n" + DataLocal

h4.style.display = 'block'
h4.style.textAlign = 'center'

let Modelo = document.getElementById('Car').value
let Placa = document.getElementById('CarNum').value
let Estacionamento = document.getElementById('Resultado')



const Veiculo = {

    Carro : Modelo,
    Numero : Placa

  }


if(Modelo && Placa ){

Arr.push(Veiculo)


Adicionar = ""
for(let i = 0; i < Arr.length; i++ ){

      Adicionar += (i + 1) + "-Nome: " + Arr[i].Carro +  " de  N° : " + Arr[i].Numero  + "\n" 

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
 const Veicular = document.getElementById('Carro').value
 let juncao = document.getElementById('Iterar')

let Search = Arr.findIndex(Busca => Busca.Carro === Veicular || Busca.Numero === Veicular )


    if(Search !== -1){

        const Confirmacao = confirm('Deseja mesmo remover o Associado ? ')

    if(Confirmacao === true){

        Arr.splice(Search,1)

        let Adicionar = ""

    for(let i = 0; i < Arr.length; i++){
 
        Adicionar += (i + 1) + "-Nome : " + Arr[i].Carro + " de N° : " + Arr[i].Numero + "\n"
 
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
    console.warn('ASSOCIADONAOENCONTRADO #20702001');
    document.getElementById('Carro').value = ""
    console.log(Arr)
    Estacionamento.innerText = Adicionar
  }
})

