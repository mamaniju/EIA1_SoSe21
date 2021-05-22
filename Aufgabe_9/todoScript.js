var Aufgabe_9;
(function (Aufgabe_9) {
    //Selector// 
    var todoInput = document.querySelector(".todoInput");
    var todoButton = document.querySelector(".todoButton");
    var todoList = document.querySelector(".todoList");
    var aufgaben = [
        {
            check: true,
            texto: "Deutsch üben"
        },
        {
            check: false,
            texto: "MKB Hausaufgaben"
        }
    ];
    //EventListener in todoButton//
    todoButton.addEventListener("click", function () {
        addTodo(false, todoInput.value);
    });
    var zahl = 0;
    for (var i = 0; i < aufgaben.length; i++) {
        var todo = aufgaben[i];
        addTodo(todo.check, todo.texto);
    }
    //Function addTodo//
    function addTodo(check, texto) {
        //Neu List (lista en ul)//
        var neuLiTodo = document.createElement("li");
        neuLiTodo.classList.add("todoLiTochter");
        zahl = zahl + 1;
        document.querySelector("#zahlAufgaben").innerHTML = zahl.toString();
        //Check Button//
        var checkBtn1 = document.createElement("i");
        checkBtn1.className = "far fa-calendar";
        var checkBtn2 = document.createElement("i");
        checkBtn2.className = "fas fa-check is-hidden";
        neuLiTodo.appendChild(checkBtn1);
        neuLiTodo.appendChild(checkBtn2);
        var txt = new Text(texto);
        neuLiTodo.appendChild(txt);
        if (check === true)
            checkBtn2.classList.add("is-hidden");
        checkBtn1.addEventListener("click", function () {
            checkBtn2.classList.remove("is-hidden");
        });
        checkBtn2.addEventListener("click", function () {
            checkBtn2.classList.add("is-hidden");
        });
        //Löschen Button//
        var deleteBtn = document.createElement("i");
        deleteBtn.className = "fas fa-trash-alt";
        neuLiTodo.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", function () {
            neuLiTodo.remove();
            zahl--;
            document.querySelector("#zahlAufgaben").innerHTML = zahl.toString();
        });
        todoList.appendChild(neuLiTodo);
        todoInput.value = ""; //el texto escrito no aparece//
        console.log(todoList);
    }
})(Aufgabe_9 || (Aufgabe_9 = {}));
//# sourceMappingURL=todoScript.js.map