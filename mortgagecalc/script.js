function reset() {
    var p = document.getElementById("out");
    p.innerText = "";
}
function price() {
    var n = 12
    var p = Number(document.getElementById("p").value)
    var r = Number(document.getElementById("r").value)
     var t = Number(document.getElementById("t").value)
    var m= Number(document.getElementById("m").value)
    var B = p * (1 + r / n)** (n * t) - (m * ((1+ r/n)** (n * t)- 1)/ (r / n));
    document.getElementById("out").innerHTML="$" + B.toFixed(2);
    

}