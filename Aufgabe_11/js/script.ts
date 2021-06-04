namespace Aufgabe_10 {

    let inputDOMElement: HTMLInputElement = document.querySelector("#inputTodo");
    let addButtonDOMElement: HTMLElement = document.querySelector("#addButton");
    let todosDOMElement: HTMLElement = document.querySelector("#todos");
    let counterDOMElement: HTMLElement = document.querySelector("#counter");
    let zahlDoneDOMElement: HTMLElement = document.querySelector("#zahlDone");
    let zahlOpenDomElement: HTMLElement = document.querySelector("#zahlOpen");
    declare var Artyom: any;

    interface ToDos {
        check: boolean;
        text: string;
    }
    let todosText: ToDos[] = [
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

    window.addEventListener("load", function (): void {
        const artyom: any = new Artyom();

        function startContinuousArtyom(): void {
            artyom.fatality();

            setTimeout(
                function (): void {
                    artyom.initialize({
                        lang: "de-DE",
                        continuous: true,
                        listen: true,
                        interimResults: true,
                        debug: true
                    }).then(function (): void {
                        console.log("Ready!");
                    });
                },
                250);
        }

        //startContinuousArtyom(); //anrufen die Funktion//

        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i: any, wildcard: string): void {
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
                todosText.unshift ({
                    text: wildcard, 
                    check: false

                });
        
            }   
        });
    
        document.querySelector ("#microphone").addEventListener ("click", function (): void {
            startContinuousArtyom(); 
        })



        addButtonDOMElement.addEventListener("click", addTodo);
        drawListToDOM();
    });

    function drawListToDOM(): void {
        todosDOMElement.innerHTML = "";

        for (let index: number = 0; index < todosText.length; index++) {

            let todo: HTMLElement = document.createElement("div");
            todo.classList.add("todo");

            todo.innerHTML = "<span class='check " + todosText[index].check + "'><i class='fas fa-check'></i></span>"
                + todosText[index].text +
                "<span class='trash fas fa-trash-alt'></span>";

            todo.querySelector(".check").addEventListener("click", function (): void {
                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function (): void {
                deleteTodo(index);
            });
            todosDOMElement.appendChild(todo);
        }

        updateCounter();
        doneCounter(); //für done (erledigte) function//
        openCounter(); //für open (offene)  function//
    }

    function updateCounter(): void {
        counterDOMElement.innerHTML = todosText.length + " in total";
    }
    //Zähler für erledigte Aufgaben//
    function doneCounter(): void {
        let zahlNummerDone: number = 0;
        for (let index: number = 0; index < todosText.length; index++) {
            if (todosText[index].check == true) zahlNummerDone++;
        }
        zahlDoneDOMElement.innerHTML = zahlNummerDone + " done";
    }
    //Zähler für offene Aufgaben//
    function openCounter(): void {
        let zahlNummerOpen: number = 0;
        for (let index: number = 0; index < todosText.length; index++) {
            if (todosText[index].check == false) zahlNummerOpen++;
        }
        zahlOpenDomElement.innerHTML = zahlNummerOpen + " open";
    }

    function addTodo(): void {

        if (inputDOMElement.value != "") {

            todosText.unshift(
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
        todosText[index].check = !todosText[index].check;
        drawListToDOM();
    }

    function deleteTodo(index: number): void {
        todosText.splice(index, 1);
        drawListToDOM();
    }
}
