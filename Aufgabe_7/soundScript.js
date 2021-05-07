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
;
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
var beats = [mp3audios[4], mp3audios[8], mp3audios[4]];
document.querySelector(".playButton").addEventListener("click", function () {
    var index = 0;
    setInterval(function () {
        playSample(beats[index]);
        index = index + 1;
        if (index == 3) {
            index = 0;
        }
        ;
    }, 500);
});
//# sourceMappingURL=soundScript.js.map