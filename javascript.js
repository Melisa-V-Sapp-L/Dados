/* Funcion de tirada de dados */

function roll() {
    let n = Math.trunc(Math.random() * (7 - 1) + 1);

    document.getElementById("number").innerHTML = n;

    switch (n) {
        case 1:
            document.getElementById("image").innerHTML = '<img src="image/one.png" class="dice"></img>';
            break;
        case 2:
            document.getElementById("image").innerHTML = '<img src="image/two.png" class="dice"></img>';
            break;
        case 3:
            document.getElementById("image").innerHTML = '<img src="image/three.png" class="dice"></img>';
            break;
        case 4:
            document.getElementById("image").innerHTML = '<img src="image/four.png" class="dice"></img>';
            break;
        case 5:
            document.getElementById("image").innerHTML = '<img src="image/five.png" class="dice"></img>';
            break;
        case 6:
            document.getElementById("image").innerHTML = '<img src="image/six.png" class="dice"></img>';
            break;

    }

    return
}