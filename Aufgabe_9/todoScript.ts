namespace Aufgabe_9 {
    //Selector// 
    const todoInput: HTMLInputElement = document.querySelector(".todoInput");
    const todoButton: HTMLElement = document.querySelector(".todoButton");
    const todoList: HTMLLIElement = document.querySelector(".todoList");

    interface ToDoItem {
        check: boolean; //true, false//
        texto: string;
    }
    let aufgaben: ToDoItem[] = [
        {
            check: true,
            texto: "Deutsch üben"
        }
        , {
            check: false,
            texto: "MKB Hausaufgaben"
        }
    ];
    //EventListener in todoButton//
    todoButton.addEventListener("click", function (): void { 
        addTodo (false, todoInput.value); 
    }); 
    let zahl: number = 0;
    for (let i: number = 0; i < aufgaben.length; i++) {
        let todo: ToDoItem = aufgaben[i];
        addTodo (todo.check, todo.texto); 
    }
    //Function addTodo//
    function addTodo(check: boolean, texto: string): void {
        //Neu List (lista en ul)//
        let neuLiTodo: HTMLLIElement = document.createElement("li");
        neuLiTodo.classList.add("todoLiTochter");
        zahl = zahl + 1;
        document.querySelector ("#zahlAufgaben").innerHTML = zahl.toString();
        
        //Check Button//
        let checkBtn1: HTMLElement = document.createElement("i");
        checkBtn1.className = "far fa-calendar";
        let checkBtn2: HTMLElement = document.createElement("i");
        checkBtn2.className = "fas fa-check is-hidden";
        neuLiTodo.appendChild(checkBtn1);
        neuLiTodo.appendChild(checkBtn2);
        let txt: Text = new Text(texto); 
        neuLiTodo.appendChild(txt); 

        if (check === true)
        checkBtn2.classList.add ("is-hidden");
        

        checkBtn1.addEventListener ("click", function (): void {
            checkBtn2.classList.remove ("is-hidden"); 
        }); 

        checkBtn2.addEventListener ("click", function (): void {
            checkBtn2.classList.add ("is-hidden"); 
        }); 
        //Löschen Button//
        let deleteBtn: HTMLElement = document.createElement("i");
        deleteBtn.className = "fas fa-trash-alt";
        neuLiTodo.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", function (): void {
            neuLiTodo.remove ();
            zahl--;
            document.querySelector ("#zahlAufgaben").innerHTML = zahl.toString();
        });

        todoList.appendChild(neuLiTodo);
        todoInput.value = ""; //el texto escrito no aparece//

        console.log(todoList);
    }


}