const button = document.querySelector(".creat");

const ul = document.querySelector(".list");

const inputValue = document.querySelector(".list__header-input");

const buttonEdit = document.querySelector(".edit");

const btnCancel = document.querySelector(".cancel");

let holText = "";

const itens = JSON.parse(localStorage.getItem("itens")) || [];


itens.forEach((element)=>{
    
    creatItem(element);

})


inputValue.focus();

/* This event calls the function that creates the item when the enter key is pressed. */
/* Begining */
inputValue.addEventListener("keypress", (e)=>{

    if(e.keyCode === 13 && inputValue.value != "" && buttonEdit.style.display != "block" && buttonEdit.style.display != "block"){

        const currentItem = {
            "nome": inputValue.value
        
        }

        creatItem(currentItem);    
        itens.push(currentItem)
    
        localStorage.setItem("itens", JSON.stringify(itens));
        clearInput();

    }
});
/* End */

/* This event calls the function that creates the item when the button is clicked. */
/* Begining */
button.addEventListener("click", () =>{

    if(inputValue.value === ""){

        alert("Preencha o campo por favor");
        inputValue.focus();

    }else{

        const currentItem = {
            "nome": inputValue.value
        
        }

        creatItem(currentItem);    
        itens.push(currentItem)
    
        localStorage.setItem("itens", JSON.stringify(itens));
        clearInput();



    };
});
/* End */

/* This function creates the item and inserts it into the HTML body */
/* Begining */
function creatItem(currentItem){

    
    const li = document.createElement("li");
    li.classList.add("list__item");

    const p = document.createElement("p");
    p.classList.add("list__item__text");

    p.innerHTML = currentItem.nome;

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
    ul.appendChild(li);

    inputValue.focus();

}
/* End */

/* This function inserts the input text into the paragraph and prints it to the screen with the item */
/* Begining */
/* function insertText(p){

    const currentItem = {
        "nome": inputValue.value

    }
    clearInput();

    itens.push(currentItem)

    localStorage.setItem("itens", JSON.stringify(itens));
    p.innerHTML = itens.nome;

    inputValue.focus();

} */
/* End */

/* This event lets you know which item was clicked within the ul and thus remove the element or insert it into the input for editing */
/* Begining */
ul.addEventListener("click", (e)=>{

    const el = e.target;

    const text = e.target.parentElement.parentElement.parentElement.querySelector(".list__item__text");

    /* Checks if the clicked element is the trash can icon */
    if(el.classList.contains("fa-trash-can")){

        verifyInputValueForDelete(el);

        for (let i = 0; i < itens.length; i++) {
            const element = itens[i];
            
            if(element.nome === text.innerHTML){

                itens.splice(i, 1);
                localStorage.setItem("itens", JSON.stringify(itens));

            }
            
        }

        el.parentElement.parentElement.parentElement.remove();
        inputValue.focus();

    /* Checks if the clicked element is the pencil icon */
    } else if(el.classList.contains("fa-pen")){

        if(!inputValue.value == ""){

            alert("Edite a tarefa selecionada");

        }else{

            inputValue.value = text.innerHTML;
            holText = inputValue.value;
            btnCancel.style.display = "block";
            buttonEdit.style.display = "block";
            inputValue.focus();

        }

    }
    
});
/* End */

/* This function clears the input and removes the edit and cancel buttons from the screen. */
/* Begining */

function clearInput(){

    btnCancel.style.display = "none";
    buttonEdit.style.display = "none";
    inputValue.value = "";

}
/* End */

/* This function checks if the element being deleted has been called for editing and if so removes both the element and the content in the input */
/* Begining */
function verifyInputValueForDelete(el){

    const text = el.parentElement.parentElement.parentElement.querySelector(".list__item__text");

    if(inputValue.value === text.innerHTML){

        clearInput();
    }
}
/* End */

/* This function checks if the input value inserted in the act of editing is the same as that of some element in the list and if the new input value is different from the elements in the list and edits */
/* Begining */
function editText(){

    const originalText = ul.querySelectorAll(".list__item__text");

    for (let i = 0; i < itens.length; i++) {

        const element = itens[i];

        if(element.nome === holText && inputValue.value != element.nome){

            element.nome = inputValue.value

            localStorage.setItem("itens", JSON.stringify(itens));

            //Falta adicionar o nome editado no parãgrafo dinamicamente

            clearInput();
            inputValue.focus();

        }
        
    }
}
/* End */

/* This event cancels editing */
/* Begining */
btnCancel.addEventListener("click",()=>{

    clearInput();
    inputValue.focus();
    
});
/* End */

/* This event calls the previously described editing function */
/* Begining */
buttonEdit.addEventListener("click", ()=>{
    
    editText();
    
});
/* End */

