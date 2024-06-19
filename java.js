let Arr = []
let Trash = []

let juncao = document.getElementById('Iterar')
const Confirm = document.getElementById('Confirmar')

Confirm.addEventListener('click', function(){

let  DataLocal = document.getElementById('Date').value
let Title = document.getElementById('TextTitle').value
let h4 = document.getElementById('Titulo')


    h4.innerText = Title + "\n" + DataLocal
    if(Title && DataLocal ){
        h4.style.display = 'block'
        h4.style.textAlign = 'center'
    }


let Modelo = document.getElementById('Car').value.trim()
let Placa = document.getElementById('CarNum').value
let Estacionamento = document.getElementById('Resultado')



const Veiculo = {

    Carro : Modelo,
    Numero : Placa

  }


if(Modelo && Placa && h4 ){


    Arr.push(Veiculo)

    Adicionar = ""
        for(let i = 0; i < Arr.length; i++ ){

          Adicionar += (i + 1) + "- Nome: " + Arr[i].Carro + " N° : " + Arr[i].Numero + "\n" 

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
    let Reset = document.getElementById('Excluir')
    let Estacionamento = document.getElementById('Resultado')
    const Veicular = document.getElementById('Carro').value
    let juncao = document.getElementById('Iterar')

    const Icon = document.createElement('i')
    Icon.className = "bi bi-person-fill"

let Search = Arr.findIndex(Busca => Busca.Carro === Veicular.trim() || Busca.Numero === Veicular.trim() )


    if(Search !== -1){

        const Confirmacao = confirm('Deseja mesmo remover o/a Participante ? ' ) 

    if(Confirmacao === true){

     let PessoaRemovida = Arr.splice(Search,1)[0]


 let Adicionar = ""

    for(let i = 0; i < Arr.length; i++){
 
        Adicionar += (i + 1) +"-  Nome : " + Arr[i].Carro + " de N° : " + Arr[i].Numero + "\n"
 
    }    
     
    Estacionamento.innerText = Adicionar

    juncao.innerText = 'Contingente : ' + Arr.length
    document.getElementById('Carro').value = ""
    console.log(Arr)

    Trash.push(PessoaRemovida)

    let remocao = ""

        for(let i = 0; i < Trash.length; i++){
            
             remocao += (i + 1) +"-Exluido : " + " Nome : " + Trash[i].Carro + " N° : " +  Trash[i].Numero  +  "\n" 

        }

        Reset.innerText = remocao
        Reset.style.display = 'none'
    
   }else{

     alert("O PARTICIPANTE CONTINUARÁ ! ")
     document.getElementById('Carro').value = ""
   
}
  }else{

     alert("PARTICIPANTE NÃO ENCONTRADO ! ")
     console.warn('PARTICIPANTENAOENCONTRADO #20702001');
     document.getElementById('Carro').value = ""
     console.log(Arr)
     Estacionamento.innerText = Adicionar
  }
})






function Atual(){
    const Segundo = document.getElementById('Excluir')
  const Primeiro = document.getElementById('Resultado')
    Primeiro.style.display = 'flex'
    Segundo.style.display = 'none'
}

function Exit(){
 const Two =  document.getElementById('Excluir')
  const First = document.getElementById('Resultado')
    Two.style.display = 'flex'
    First.style.display = 'none'

}
