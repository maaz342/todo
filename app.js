/* var a = document.getElementById('center');
console.log(a.parentNode);
console.log(a.lastChild);
console.log(a.previousSibling, a.nextSibling);
var b = document.getElementById('ab')
console.log(b.childNodes[0].nodeValue);
b.childNodes[0].nodeValue = "that ";
console.log(b.childNodes[0].nodeValue);*/
var c = document.getElementById('app')

function createElem() {
    var r = document.getElementById('myinput')
    var a = document.createElement('li');
    var txt = document.createTextNode(r.value);
    a.appendChild(txt)

    c.appendChild(a);
    var d = document.createElement('button');
    d.setAttribute("onclick", "removeIt(this)");
    var text = document.createTextNode('Delete')
    d.appendChild(text);
    a.appendChild(d);

}
function removeIt(elem) {
    // elem.parentElement.parentElement.removeChild(elem.parentElement);
    var parent = elem.parentNode
    parent.remove();

}
function deletea() {
    var r = document.getElementById('myinput')
    r.value = "";
    c.innerHTML = "";

}
