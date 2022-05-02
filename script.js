const weekday = ["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"];
const d = new Date();
let day = weekday[d.getDay()];

if(day == "Maandag"){
    var clrToday = [
        "Grijs",
        " Rood"
    ]
    var clrTom = [
        "Oranje",
        "Wit",
        "Grijs"
    ]

    var tomorrow = "Dinsdag"
}
if(day == "Dinsdag"){
    var clrToday = [
        "Oranje",
        "Wit",
        "Grijs"
    ]
    var clrTom = [
        "Wit"
    ]

    var tomorrow = "Woensdag"
}
if(day == "Woensdag"){
    var clrToday = [
        "Wit"
    ]
    var clrTom = [
        "Grijs",
        "Wit",
        "Rood",
        "Geschiedenis"
    ]

    var tomorrow = "Donderdag"
}
if(day == "Donderdag"){
    var clrToday = [
        "Grijs",
        "Wit",
        "Rood",
        "Geschiedenis"
    ]
    var clrTom = [
        "Grijs",
        "Blauw",
        "Groen",
        "Geschiedenis"
    ]

    var tomorrow = "Vrijdag"
}
if(day == "Vrijdag"){
    var clrToday = [
        "Grijs",
        "Blauw",
        "Groen",
        "Geschiedenis"
    ]
    var clrTom = []

    var tomorrow = "Zaterdag"
}
if(day == "Zaterdag"){
    var clrToday = []
    var clrTom = []

    var tomorrow = "Zondag"
}
if(day == "Zondag"){
    var clrToday = []
    var clrTom = [
        "Grijs",
        "Rood"
    ]

    var tomorrow = "Maandag"
}






var dayToday = document.getElementById("day");
dayToday.textContent = day;

var dayTomorrow = document.getElementById("dayTom")
dayTom.textContent = tomorrow;



var clr1 = document.getElementById("kleurenVandaag1");
var clr2 = document.getElementById("kleurenVandaag2");
var clr3 = document.getElementById("kleurenVandaag3");
var clr4 = document.getElementById("kleurenVandaag4");

clr1.textContent = clrToday[0];
clr2.textContent = clrToday[1];
clr3.textContent = clrToday[2];
clr4.textContent = clrToday[3];



var clrT1 = document.getElementById("kleurenMorgen1");
var clrT2 = document.getElementById("kleurenMorgen2");
var clrT3 = document.getElementById("kleurenMorgen3");
var clrT4 = document.getElementById("kleurenMorgen");

clrT1.textContent = clrTom[0];
clrT2.textContent = clrTom[1];
clrT3.textContent = clrTom[2];
clrT4.textContent = clrTom[3];