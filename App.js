function getNumber(num1) {
    var result = document.getElementById("result");
    result.value += num1;
}
function clearresult() {
    var result = document.getElementById("result");
    result.value = "";
}
function getresult() {
    var result = document.getElementById("result");
    result.value = eval(result.value);
}
function valueback() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.substr(0, result.length - 1)
}