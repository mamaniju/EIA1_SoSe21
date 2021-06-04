var Aufgabe_10;
(function (Aufgabe_10) {
    var inputDOMElement = document.querySelector("#inputTodo");
    var addButtonDOMElement = document.querySelector("#addButton");
    var todosDOMElement = document.querySelector("#todos");
    var counterDOMElement = document.querySelector("#counter");
    var zahlDoneDOMElement = document.querySelector("#zahlDone");
    var zahlOpenDomElement = document.querySelector("#zahlOpen");
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
        var artyom = new Artyom();
        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i, wildcard) {
                todosText.unshift({
                    text: wildcard,
                    check: false
                });
                drawListToDOM(); //Funktion wird angerufen//
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
                artyom.say("Die Aufgabe" + wildcard + "wurde deiner Liste hinzugefügt");
            }
        });
        function startContinuousArtyom() {
            artyom.fatality();
            setTimeout(function () {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function () {
                    artyom.say("Sage erstelle Aufgabe");
                    console.log("Ready!");
                });
            }, 250);
        }
        document.querySelector("#microphone").addEventListener("click", function () {
            startContinuousArtyom();
        });
    });
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
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
        doneCounter(); //für done (erledigte) function//
        openCounter(); //für open (offene)  function//
    }
    function updateCounter() {
        counterDOMElement.innerHTML = todosText.length + " in total";
    }
    //Zähler für erledigte Aufgaben//
    function doneCounter() {
        var zahlNummerDone = 0;
        for (var index = 0; index < todosText.length; index++) {
            if (todosText[index].check == true)
                zahlNummerDone++;
        }
        zahlDoneDOMElement.innerHTML = zahlNummerDone + " done";
    }
    //Zähler für offene Aufgaben//
    function openCounter() {
        var zahlNummerOpen = 0;
        for (var index = 0; index < todosText.length; index++) {
            if (todosText[index].check == false)
                zahlNummerOpen++;
        }
        zahlOpenDomElement.innerHTML = zahlNummerOpen + " open";
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
        todosText[index].check = !todosText[index].check;
        drawListToDOM();
    }
    function deleteTodo(index) {
        todosText.splice(index, 1);
        drawListToDOM();
    }
})(Aufgabe_10 || (Aufgabe_10 = {}));
//# sourceMappingURL=script.js.map