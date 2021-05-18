var Aufgabe8;
(function (Aufgabe8) {
    //Aufgabe 7.1//
    var mp3audios = [
        "./task_material/assets/A.mp3",
        "./task_material/assets/C.mp3",
        "./task_material/assets/F.mp3",
        "./task_material/assets/G.mp3",
        "./task_material/assets/hihat.mp3",
        "./task_material/assets/kick.mp3",
        "./task_material/assets/laugh-1.mp3",
        "./task_material/assets/laugh-2.mp3",
        "./task_material/assets/snare.mp3"
    ];
    //Funktion "playSample"//
    function playSample(pfad) {
        var sound = new Audio(pfad);
        sound.play();
    }
    //En toda esta sección enlazo mi SelectorHTML con EventListener (click)// 
    //El usuario al hacer clik en mis cuadros (trabajados en HTML y CSS) recibe un tono (PlaySample(mp3Audios [el numero index correspondiente]))
    document.querySelector("#eins").addEventListener("click", function () {
        playSample(mp3audios[0]);
    });
    document.querySelector("#zwei").addEventListener("click", function () {
        playSample(mp3audios[1]);
    });
    document.querySelector("#drei").addEventListener("click", function () {
        playSample(mp3audios[2]);
    });
    document.querySelector("#vier").addEventListener("click", function () {
        playSample(mp3audios[3]);
    });
    document.querySelector("#fuenf").addEventListener("click", function () {
        playSample(mp3audios[4]);
    });
    document.querySelector("#sechs").addEventListener("click", function () {
        playSample(mp3audios[5]);
    });
    document.querySelector("#sieben").addEventListener("click", function () {
        playSample(mp3audios[6]);
    });
    document.querySelector("#acht").addEventListener("click", function () {
        playSample(mp3audios[7]);
    });
    document.querySelector("#neun").addEventListener("click", function () {
        playSample(mp3audios[8]);
    });
    //Aufgabe 7.2 (Play Button - Beats)//
    //Aufgabe 8 (Play-Stop/ Ton abspielen und aufhören )
    var beats = [mp3audios[4], mp3audios[8], mp3audios[5]];
    var index = 0;
    //playButton Abspilen
    document.querySelector("#play").addEventListener("click", function () {
        var myVarSetInterval = setInterval(function () {
            playSample(beats[index]);
            index++;
            if (index == 3) {
                index = 0;
            }
            //stopButton Aufhören        
            document.querySelector("#stop").addEventListener("click", function () {
                clearInterval(myVarSetInterval);
            });
        }, 400);
    });
    //deleteButton löschen 
    document.querySelector("#delete").addEventListener("click", function () {
        beats = [];
    });
    //Remix// 
    document.querySelector("#remix").addEventListener("click", function () {
        beats = [];
        for (var i = 0; i < 4; i++) {
            var zufaelligZahl = Math.floor(Math.random() * 9);
            var zufaelligAudio = mp3audios[zufaelligZahl]; //Zufällig Zahl (index)
            beats.push(zufaelligAudio);
            console.log(zufaelligAudio);
        }
    });
    //Aufgabe 8//
    //Play-Stop Buttons verwandeln (is-hidden)// 
    var playButton = document.querySelector("#play");
    var pauseButton = document.querySelector("#stop");
    playButton.addEventListener("click", function () {
        this.classList.add("is-hidden"); //playButton bekommt die ClasseElement//
        pauseButton.classList.remove("is-hidden"); //playButton verliert die ClasseElement//
    });
    pauseButton.addEventListener("click", function () {
        this.classList.add("is-hidden"); //pauseButton bekommt die ClasseElement//
        playButton.classList.remove("is-hidden"); //pauseButton verliert die ClasseElement//
    });
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=soundScript.js.map