﻿var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
//context.font = "14px Arial";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//var symbols = "QWERTZUIOPŐÚASDFGHJKLÉÁŰÍYXCVBNM1234567890+!%/=()\\|Ä€Í÷×đĐ[]íłŁ$ß¤<>#&@{};>*"
var symbols = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝMATRIX"
var symbolArray = symbols.split("");
var fontSize = 12;
var columns = canvas.width / fontSize;
console.log(columns);

var columnData = [];
for (var x = 0; x < columns; x++) {
    columnData[x] = 1;
}

function followTheWhiteRabbit() {
    context.fillStyle = "rgba(0, 0, 0, 0.09)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#00E61F";

    for (var i = 0; i < columnData.length; i++) {
        var symbol = symbolArray[Math.floor(Math.random() * symbolArray.length)];
        var xCoord = i * fontSize;
        var yCoord = columnData[i] * fontSize;
        context.fillText(symbol, xCoord, yCoord);
        console.log(symbolArray[i]);

        if (yCoord > canvas.height && Math.random() > 0.98) {
            columnData[i] = 0;
        }

        columnData[i]++;
    } 
}

setInterval(followTheWhiteRabbit, 40);
