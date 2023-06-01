const button = document.querySelector(".list__header-btn");
const ul = document.querySelector(".list");

const inputValue = document.querySelector(".list__header-input");


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

function insertText(p){

        p.innerHTML = inputValue.value;
        inputValue.value = "";
        inputValue.focus();

}


ul.addEventListener("click", (e)=>{

    const el = e.target;

    if(el.classList.contains("fa-trash-can")){

        el.parentElement.parentElement.parentElement.remove();
        verifyInputValueForDelete(el)
        inputValue.focus();



    } else if(el.classList.contains("fa-pen")){

        if(!inputValue.value == " "){

            alert("Edite a tarefa selecionada");

        }else{
            
        const text = e.target.parentElement.parentElement.parentElement.querySelector(".list__item__text");

        inputValue.value = text.innerHTML;
        }

    }
});


function verifyInputValueForDelete(el){

    const text = el.parentElement.parentElement.parentElement.querySelector(".list__item__text");

    if(inputValue.value === text.innerHTML){

        inputValue.value = "";

    }
}


