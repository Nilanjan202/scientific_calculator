function Screen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    try {
        var a = document.getElementById("result").value;
        var b = eval(a);
        document.getElementById("result").value = b;
    } catch (e) {
        alert("Invalid Expression");
    }
}

function octal() {
    var num = parseInt(document.getElementById('result').value);
    var t = num.toString(8);
    document.getElementById("result").value = t;
}

function binary() {
    var num = parseInt(document.getElementById('result').value);
    var t = num.toString(2);
    document.getElementById("result").value = t;
}

function hexa() {
    var num = parseInt(document.getElementById('result').value);
    var t = num.toString(16).toUpperCase();
    document.getElementById("result").value = t;
}

function sin() {
    var a = parseFloat(document.getElementById("result").value);
    var b = Math.sin(a * Math.PI / 180);
    document.getElementById("result").value = b;
}

function cos() {
    var a = parseFloat(document.getElementById("result").value);
    var b = Math.cos(a * Math.PI / 180);
    document.getElementById("result").value = b;
}

function tan() {
    var a = parseFloat(document.getElementById("result").value);
    var b = Math.tan(a * Math.PI / 180);
    document.getElementById("result").value = b;
}

function log() {
    var a = parseFloat(document.getElementById("result").value);
    var b = Math.log10(a);
    document.getElementById("result").value = b;
}

function sq() {
    var a = parseFloat(document.getElementById("result").value);
    var b = Math.sqrt(a);
    document.getElementById("result").value = b;
}

function pi() {
    var a = parseFloat(document.getElementById("result").value || 1);
    var b = a * Math.PI;
    document.getElementById("result").value = b;
}

function percentage() {
    var a = parseFloat(document.getElementById("result").value);
    var b = a / 100;
    document.getElementById("result").value = b;
}
