function clickMe(obj) {
    if (obj.innerHTML == "Haz click") {
    obj.innerHTML = "De nuevo haz click";
    return;
    }
    if (obj.innerHTML == "De nuevo haz click") {
    obj.innerHTML = "Con eso basta"; 
    return; 
    }
    if (obj.innerHTML == "Con eso basta") {
    obj.innerHTML = "Cortala"; 
    return; 
    }
    if (obj.innerHTML == "Cortala") {
    obj.style.display = "none";
    return;
    }
    }