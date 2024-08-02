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


let Modelo = document.getElementById('Nome').value.trim()
let Placa = document.getElementById('Numero').value
let Estacionamento = document.getElementById('Resultado')



const Veiculo = {

    Nome : Modelo,
    Numero : Placa

  }


if(Modelo && Numero && h4 ){


    Arr.push(Veiculo)

  let Adicionar = ""
        for(let i = 0; i < Arr.length; i++ ){

          Adicionar += (i + 1) + "- Nome: " + Arr[i].Nome + " N°: " + Arr[i].Numero + "\n" 

        }


console.log(Adicionar)
console.log(Arr)

Iterar.innerText = 'Contingente : ' + Arr.length
Estacionamento.style.textDecoration = 'Underline'
Estacionamento.innerText = Adicionar

document.getElementById('Nome').value = ""
 document.getElementById('Numero').value = ""

    }else{
        alert("Um ou mais campos não foram prenchidos !")
        console.error('ERROR #27072001')
        document.getElementById('Nome').value = ""
        document.getElementById('Numero').value = ""
    }
 }) 


     const Remove = document.getElementById('Remove')

// Botão para Remover alguem //

Remove.addEventListener('click', function(){
    let Reset = document.getElementById('Excluir')
    let Estacionamento = document.getElementById('Resultado')
    const Veicular = document.getElementById('NomeX').value
    let juncao = document.getElementById('Iterar')
//
    const Icon = document.createElement('i')
    Icon.className = "bi bi-person-fill"

// Botão para Limpar o Array Trash(Excluido) // 

    let BtX = document.createElement('button')
    BtX.type = "reset"
    BtX.className = 'Btx'
    BtX.style.width = '25%'
    BtX.style.borderRadius = '10%'
    BtX.style.margin = '0.1rem'
    BtX.style.fontWeight = '500'
    BtX.style.backgroundColor = 'orange'
    BtX.style.BoxShadow = '0.1rem 0.1rem 0.1rem black'
    BtX.style.fontSize = 'monospace'
    BtX.innerText = 'Clear'

BtX.addEventListener('click',function(){
const Permissao = confirm("ATENÇÃO, O Campo inteiro será Limpo deseja continuar ? ")

    if(Permissao === true){
        
        Reset.innerText = ""
        alert("O Campo Foi Limpo .")
        Trash = []
        console.log(Trash)
    }else{
      
        alert("O Campo não foi Limpo")
    
    }

})

    
let Search = Arr.findIndex(Busca => Busca.Nome.toLowerCase() === Veicular.trim() || Busca.Numero === Veicular.trim() )


    if(Search !== -1){

        const Confirmacao = confirm('Deseja mesmo remover o/a Participante ? ' ) 
        document.getElementById('NomeX').value = ""


    if(Confirmacao === true){

     let PessoaRemovida = Arr.splice(Search,1)[0]
     document.getElementById('NomeX').value = ""


 let Adicionar = ""

    for(let i = 0; i < Arr.length; i++){
 
        Adicionar += (i + 1) +"-  Nome : " + Arr[i].Nome + " de N° : " + Arr[i].Numero + "\n"
 
    }    
    Estacionamento.style.textDecoration = 'Underline'
    Estacionamento.innerText = Adicionar

    juncao.innerText = 'Contingente : ' + Arr.length
    document.getElementById('Nome').value = ""
    console.log(Arr)

    Trash.push(PessoaRemovida)

    let remocao = ""

        for(let i = 0; i < Trash.length; i++){
            
             remocao += (i + 1) +"-Exluido ( " + " Nome : " + Trash[i].Nome + " N° : " +  Trash[i].Numero + " ) " +  "\n" 

        }

        Reset.innerText = remocao
        Reset.appendChild(BtX)
        Reset.style.display = 'none'
        Reset.style.FlexDirection = 'Column'
        
    
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
    Two.style.flexDirection = 'column'
    First.style.display = 'none'

}
