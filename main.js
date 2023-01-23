var nameOfPeople = [];

function submit() {
    var GuestName = document.getElementById("name1").value;
    nameOfPeople.push(GuestName);
    var lenghtOfName = nameOfPeople.length;
    document.getElementById("displayName").innerHTML = nameOfPeople.toString();
}

function sorting() {
    nameOfPeople.sort(); // é para colocar em ordem alfabética
    var i = nameOfPeople.join("<br>"); // colocar os nomes com um break (deixando um nome em baixo do outro)
    document.getElementById("sorted").innerHTML = i.toString();
}

function show() {
    var i = nameOfPeople.join("<br>");
    document.getElementById("p1").innerHTML = i.toString();
    document.getElementById("sortButton").style.display = "block";
}

function searching() {
    var s = document.getElementById("s1").value;
    var found = 0;
    var j;
    for (j = 0; j < nameOfPeople.length; j++) {
        if (s == nameOfPeople[j]) {
            found = found + 1;
        }
    }
    document.getElementById("p2").innerHTML = 
    "Nome encontrado " + found + " vez(es)";
}
