//query selector para selecionar como consts os elementos utilizados nos eventos
const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const telefone = document.querySelector("#telefone");
const btn = document.querySelector("button");
const lista = document.querySelector(".lista");

//evento do botao Btn(Cadastrar)
btn.addEventListener("click", (e) => {
  e.preventDefault(); //previne que página atualize ao clicar
  //consts que puxam os valores od inputs
  const inputNameValue = nome.value;
  const inputIdadeValue = idade.value;
  const inputTelefoneValue = telefone.value;

  //Const que guarda a estrutura da div que exibira as informações cadastradas
  const InputsLi = `
  <div class="list-item">
<<<<<<< HEAD
    Nome: ${inputNameValue}<br> 
    Telefone: ${inputTelefoneValue}<br> 
    Idade: ${inputIdadeValue}<br>
=======
    Nome: ${inputNameValue} 
    Telefone: ${inputTelefoneValue} 
    Idade: ${inputIdadeValue}
>>>>>>> 69da1302971b8ce0d11c37ba717421c459786719
      <button class="DeleteBtn" type="button">Deletar</button>
  </div>
`;

<<<<<<< HEAD

    // Validando valores nulos
    if(inputNameValue ===""){
        alert("Digite alguma coisa")
        return false;
    }
    else if(inputIdadeValue === ""){
        alert("Digite alguma coisa")
        return false;
    } else if(inputTelefoneValue === ""){
=======
//escrevendo a InputsLi no html
lista.innerHTML += InputsLi;


    if(inputNameValue == ""){
>>>>>>> 69da1302971b8ce0d11c37ba717421c459786719
        alert("Digite alguma coisa")
        return false;
    }

<<<<<<< HEAD
    // escrevendo a InputsLi no html
    lista.innerHTML += InputsLi;


    nome.value = "";
    idade.value = "";
    telefone.value = "";

    lista.innerHTML += InputsLi + DeleteBtn ;
   
    
=======
    if(inputIdadeValue == ""){
        alert("Digite alguma coisa")
        return false;

    } if(inputTelefoneValue == ""){
        alert("Digite alguma coisa")
        return false;
    }

    lista.innerHTML += InputsLi + DeleteBtn ;
   
    nome.value = "";
    idade.value = "";
    telefone.value = "";
>>>>>>> 69da1302971b8ce0d11c37ba717421c459786719
});

lista.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("DeleteBtn")) {
        e.target.parentElement.remove();
    }
});