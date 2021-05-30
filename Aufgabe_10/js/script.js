var Aufgabe_10;
(function (Aufgabe_10) {
    var inputDOMElement = document.querySelector("#inputTodo");
    var addButtonDOMElement = document.querySelector("#addButton");
    var todosDOMElement = document.querySelector("#todos");
    var counterDOMElement = document.querySelector("#counter");
    var todosText = [
        {
            check: true,
            text: "Lorem"
        },
        {
            check: false,
            text: "Ipsum"
        },
        {
            check: false,
            text: "Dolor"
        }
    ];
    window.addEventListener("load", function () {
        addButtonDOMElement.addEventListener("click", addTodo);
        drawListToDOM();
    });
    function drawListToDOM() {
        todosDOMElement.innerHTML = "";
        var _loop_1 = function (index) {
            var todo = document.createElement("div");
            todo.classList.add("todo");
            todo.innerHTML = "<span class='check " + todosText[index].check + "'><i class='fas fa-check'></i></span>"
                + todosText[index].text +
                "<span class='trash fas fa-trash-alt'></span>";
            todo.querySelector(".check").addEventListener("click", function () {
                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function () {
                deleteTodo(index);
            });
            todosDOMElement.appendChild(todo);
        };
        for (var index = 0; index < todosText.length; index++) {
            _loop_1(index);
        }
        updateCounter();
    }
    function updateCounter() {
        counterDOMElement.innerHTML = todosText.length + " in total";
    }
    function addTodo() {
        if (inputDOMElement.value != "") {
            todosText.unshift({
                text: inputDOMElement.value,
                check: false
            });
            inputDOMElement.value = "";
            drawListToDOM();
        }
    }
    function toggleCheckState(index) {
        drawListToDOM();
    }
    function deleteTodo(index) {
        todosText.splice(index, 1);
        drawListToDOM();
    }
})(Aufgabe_10 || (Aufgabe_10 = {}));
//# sourceMappingURL=script.js.map