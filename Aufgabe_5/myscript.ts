
//Europa
var europe: string = "Europa";
var europe2008: number = 4865.7;
var europe2018: number = 4209.3;
//Nordamerika
var Namerica: string = "Nordamerika";
var Namerica2018: number = 6035.6;
var Namerica2008: number = 6600.4;
//Südamerika 
var Samerica: string = "Südamerika ";
var Samerica2018: number = 1261.5;
var Samerica2008: number = 1132.6;
//Afrika
var africa: string = "Afrika";
var africa2018: number = 1235.5;
var africa2008: number = 1028;
//Asien
var asia: string = "Asien";
var asia2018: number = 16274.1;
var asia2008: number = 12954.7;
//Australien
var australia: String = "Australien";
var australia2018: number = 2100.5;
var australia2008: number = 1993;

//Gesamtemission (alle Länder 2018)
var gesamtemission: number = europe2018 + Namerica2018 + Samerica2018 + africa2018 + asia2018 + australia2018;

//Berechnung
//Europa
var euroProzentGes = ((europe2018 / gesamtemission) * 100).toFixed (1);
var euroProzentVergl = (((europe2018 / europe2008) - 1) * 100).toFixed(1);
var euroCO2vergleich = (europe2018 - europe2008).toFixed(1);
//Nordamerika
var NamericaProzentGes = ((Namerica2018 / gesamtemission) * 100).toFixed(1);
var NamericaProzentVergl = (((Namerica2018 / Namerica2008) - 1) * 100).toFixed(1);
var NamericaCO2vergleich = (Namerica2018 - Namerica2008).toFixed(1);
//Südamerika
var SamericaProzentGes = ((Samerica2018 / gesamtemission) * 100).toFixed(1);
var SamericaProzentVergl = (((Samerica2018 / Samerica2008) - 1) * 100).toFixed(1);
var SamericaCO2vergleich = (Samerica2018 - Samerica2008).toFixed(1);
//Afrika
var africaProzentGes = ((africa2018 / gesamtemission) * 100).toFixed(1);
var africaProzentVergl = (((africa2018 / africa2008) - 1) * 100).toFixed(1);
var africaCO2vergleich = (africa2018 - africa2008).toFixed(1);
//Asien
var asiaProzentGes = ((asia2018 / gesamtemission) * 100).toFixed(1);
var asiaProzentVergl = (((asia2018 / asia2008) - 1) * 100).toFixed(1);
var asiaCO2vergleich = (asia2018 - asia2008).toFixed(1);
//Australien
var austraProzentGes = ((australia2018 / gesamtemission) * 100).toFixed(1);
var austraProzentVergl = (((australia2018 / australia2008) - 1) * 100).toFixed(1);
var austraCO2vergleich = (australia2018 - australia2008).toFixed(1);


//Europa
console.log("Die Emission von " + europe + " ist: " + europe2018 + " kg CO2. ");
console.log("Relativ zu Gesamtemission der Welt verursacht " + europe + " damit " + euroProzentGes + " %. ");
console.log("Für " + europe + " hat sich 2018 im Vergleich zu 2008 die Emission um " + euroProzentVergl + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + euroCO2vergleich + " kg CO2.");
//Nordamerika
console.log("Die Emission von " + Namerica + " ist: " + Namerica2018 + " kg CO2.");
console.log("Relative zu Gesamtemission der Welt verursacht " + Namerica + " damit " + NamericaProzentGes + " %. ");
console.log("Für " + Namerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + NamericaProzentVergl + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + NamericaCO2vergleich + " kg CO2.");
//Südamrika 
console.log("Die Emission von " + Samerica + " ist: " + Samerica2018 + " kg CO2");
console.log("Relative zu Gesamtemission der Welt verursacht " + Samerica + " damit " + SamericaProzentGes + " %.")
console.log("Für " + Samerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + SamericaCO2vergleich + " % veräandert.");
console.log("2018 im Vergleich zu 2008 sind das " + SamericaCO2vergleich + " kg CO2.");
//Afrika
console.log("Die Emission von " + africa + " ist: " + africa2018 + " kg CO2");
console.log("Relative zu Gesamtemission der Welt verursacht " + africa + " damit " + africaProzentGes + " %.");
console.log("Für " + africa + " hat sich 2018 im Vergleich zu 2008 die Emission um " + africaProzentVergl + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + africaCO2vergleich + " kg CO2.");
//Asien
console.log("Die Emission von " + asia + " ist: " + asia2018 + " kg CO2");
console.log("Relative zu Gesamtemission der Welt verursacht " + asia + " damit " + asiaProzentGes + " %.");
console.log("Für " + asia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + asiaProzentVergl + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + asiaCO2vergleich + " kg CO2.");
//Australien 
console.log("Die Emission von " + australia + " ist: " + australia2018 + " kg CO2");
console.log("Relative zu Gesamtemission der Welt verursacht " + australia + " damit " + austraProzentGes + " %.");
console.log("Für " + australia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + austraProzentVergl + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + austraCO2vergleich + " kg CO2.");
