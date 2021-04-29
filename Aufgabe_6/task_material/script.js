//Europa
var europe2018 = 4209.3;
var europe2008 = 4965.7;
//Nordamerika
var namerica2018 = 6035.6;
var namerica2008 = 6600.4;
//Südamerika
var samerica2018 = 1261.5;
var samerica2008 = 1132.6;
//Afrika
var africa2018 = 1235.5;
var africa2008 = 1028;
//Asien
var asia2018 = 16274.1;
var asia2008 = 12954.7;
//Australien
var australia2018 = 2100.5;
var australia2008 = 1993;
//Gesamt Emission (alle Länder 2018)
var gesamtEmission = europe2018 + namerica2018 + samerica2018 + africa2018 + asia2018 + australia2018;
//Selector/EventListener/DOM Manipulation
window.addEventListener("load", function () {
    document.querySelector(".europe").addEventListener("click", function () {
        myFunction("Europe", europe2018, europe2008);
    });
    document.querySelector(".northamerica").addEventListener("click", function () {
        myFunction("Northamerica", namerica2018, namerica2008);
    });
    document.querySelector(".southamerica").addEventListener("click", function () {
        myFunction("Southamerica", samerica2018, samerica2008);
    });
    document.querySelector(".africa").addEventListener("click", function () {
        myFunction("Africa", africa2018, africa2008);
    });
    document.querySelector(".asia").addEventListener("click", function () {
        myFunction("Asia", asia2018, asia2008);
    });
    document.querySelector(".australia").addEventListener("click", function () {
        myFunction("Australia", australia2018, australia2008);
    });
});
//Funktion 
function myFunction(nombreContinente, valorEmissionContinente2018, valorEmissionContinente2008) {
    document.querySelector("#titleRegion").innerHTML = nombreContinente;
    document.querySelector("#nameKontinetAbsolut2018").innerHTML = nombreContinente;
    document.querySelector("#emissionAbsolute2018").innerHTML = valorEmissionContinente2018.toFixed(1); //ich wusste nicht wie soll ich hier "parseFloat benutzen :(
    document.querySelector("#relativeEmission").innerHTML = ((valorEmissionContinente2018 / gesamtEmission) * 100).toFixed(1) + " % ";
    document.querySelector("#growthRateProzent").innerHTML = (((valorEmissionContinente2018 / valorEmissionContinente2008) - 1) * 100).toFixed(1) + " % ";
    document.querySelector("#growthRateAbsolute").innerHTML = (valorEmissionContinente2018 - valorEmissionContinente2008).toFixed(1);
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height:" + ((valorEmissionContinente2018 / gesamtEmission) * 100) + " % "); // :( Miene Grafik bewegt sie nicht!
}
//# sourceMappingURL=script.js.map