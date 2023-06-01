const button = document.querySelector(".creat");

const ul = document.querySelector(".list");

const inputValue = document.querySelector(".list__header-input");

const iconPlus = document.querySelector(".fa-plus")

const btnCancel = document.querySelector(".btn-cancel");


inputValue.focus();

inputValue.addEventListener("keypress", (e)=>{

    if(e.keyCode === 13) creatItem();
});


button.addEventListener("click", () =>{

    if(inputValue.value === ""){

        alert("Preencha o campo por favor");

        inputValue.focus();

    }else{

        creatItem();

    };
});

/* ESTA FUNCÃO CRIA OS ELEMENTOS HTML E OS INSERE NA TELA */
/* INOCIO */
function creatItem(){

    
    const li = document.createElement("li");
    li.classList.add("list__item");

    const p = document.createElement("p");
    p.classList.add("list__item__text");

    insertText(p);

    const divIcons = document.createElement("div");
    divIcons.classList.add("icons");


    const divIcon1 = document.createElement("div");
    divIcon1.classList.add("icon");

    const icon1 = document.createElement("i");
    icon1.classList = "fa-solid";
    icon1.classList.add("fa-pen");

    const divIcon2 = document.createElement("div");
    divIcon2.classList.add("icon");

    const icon2 = document.createElement("i");
    icon2.classList = "fa-trash-can";
    icon2.classList.add("fa-solid");

    divIcon1.appendChild(icon1);
    divIcon2.appendChild(icon2);

    divIcons.appendChild(divIcon1);
    divIcons.appendChild(divIcon2);

    li.appendChild(divIcons);
    li.insertBefore(p, divIcons);
    ul.appendChild(li)

}
/* FIM */

/* ESTA FUNÇÃO PEGA PARAGRAFO E INSERE O TEXTO DENTRO DO PARAGRAFO PARA EM SEGUIDA IMPRIMI-LO */
/* INICIO */
function insertText(p){

        p.innerHTML = inputValue.value;
        clearInput();
        inputValue.focus();

}
/* FIM */


ul.addEventListener("click", (e)=>{

    const el = e.target;

    if(el.classList.contains("fa-trash-can")){

        verifyInputValueForDelete(el);

        el.parentElement.parentElement.parentElement.remove();

        btnCancel.style.display = "none";
    
        if(iconPlus.classList == "fa-solid fa-check-double"){

            iconPlus.classList = "fa-solid fa-plus";

            inputValue.focus();

        }

        inputValue.focus();



    } else if(el.classList.contains("fa-pen")){

        if(!inputValue.value == " "){

            alert("Edite a tarefa selecionada");

        }else{
            
            const text = e.target.parentElement.parentElement.parentElement.querySelector(".list__item__text");

            inputValue.value = text.innerHTML;
            
            inputValue.focus();



            if(iconPlus.classList == "fa-solid fa-plus"){
                
                iconPlus.classList = "fa-solid fa-check-double";

                button.classList.remove("creat")
                button.classList = "edit";
                btnCancel.style.display = "block"
            } 
            

        };

    }
});

btnCancel.addEventListener("click",()=>{

    btnCancel.style.display = "none";
    
    if(iconPlus.classList == "fa-solid fa-check-double"){

        iconPlus.classList = "fa-solid fa-plus";

        clearInput();
        inputValue.focus();

    }
    
})


function verifyInputValueForDelete(el){

    const text = el.parentElement.parentElement.parentElement.querySelector(".list__item__text");

    if(inputValue.value === text.innerHTML){

        clearInput();
    }
}

function clearInput(){

    inputValue.value = "";

}

/* const iconCorect = document.querySelector(".fa-check-double");

iconCorect.addEventListener("click", (e)=>{
    console.log(e)
})
 */

