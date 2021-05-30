namespace Aufgabe_10 {

let inputDOMElement: HTMLInputElement = document.querySelector("#inputTodo");
let addButtonDOMElement: HTMLElement = document.querySelector("#addButton");
let todosDOMElement: HTMLElement = document.querySelector("#todos");
let counterDOMElement: HTMLElement = document.querySelector("#counter");

interface ToDos {
    check: boolean; 
    text: string; 
}
let todosText: ToDos [] =  [
    {
        check: true, 
        text: "Lorem"
    }
    , {
        check: false, 
        text: "Ipsum"
    }
    , {
        check: false, 
        text: "Dolor"
    }
]; 

window.addEventListener("load", function(): void {

    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});

function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < todosText.length; index++) {

        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check " + todosText[index].check + "'><i class='fas fa-check'></i></span>"
                            + todosText[index].text +
                            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function(): void {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}

function updateCounter(): void {
    counterDOMElement.innerHTML = todosText.length + " in total";
}

function addTodo(): void {

    if (inputDOMElement.value != "") {

        todosText.unshift (
            {
            text: inputDOMElement.value, 
            check: false 
            }
        ); 
        
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index: number): void {
    drawListToDOM();
}
function deleteTodo(index: number): void {
    todosText.splice(index, 1);
    drawListToDOM();
}
}
