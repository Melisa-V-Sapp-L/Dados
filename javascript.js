/* Funcion de tirada de dados */
let n, n2;
/* Dice 6*/
function roll() {
    n = 0;
    n = Math.trunc(Math.random() * (7 - 1) + 1);

    switch (n) {
        case 1:
            document.getElementById("d6").innerHTML = '<img src="image/one.png" class="dice6"></img>';
            break;
        case 2:
            document.getElementById("d6").innerHTML = '<img src="image/two.png" class="dice6"></img>';
            break;
        case 3:
            document.getElementById("d6").innerHTML = '<img src="image/three.png" class="dice6"></img>';
            break;
        case 4:
            document.getElementById("d6").innerHTML = '<img src="image/four.png" class="dice6"></img>';
            break;
        case 5:
            document.getElementById("d6").innerHTML = '<img src="image/five.png" class="dice6"></img>';
            break;
        case 6:
            document.getElementById("d6").innerHTML = '<img src="image/six.png" class="dice6"></img>';
            break;

    }

    return
}
/* Second dice 6 */
function roll0() {
    n = 0;
    n2 = 0;
    n = Math.trunc(Math.random() * (7 - 1) + 1);
    n2 = Math.trunc(Math.random() * (7 - 1) + 1);

    switch (n) {
        case 1:
            document.getElementById("d6_2").innerHTML = '<img src="image/one.png" class="dice6"></img>';
            break;
        case 2:
            document.getElementById("d6_2").innerHTML = '<img src="image/two.png" class="dice6"></img>';
            break;
        case 3:
            document.getElementById("d6_2").innerHTML = '<img src="image/three.png" class="dice6"></img>';
            break;
        case 4:
            document.getElementById("d6_2").innerHTML = '<img src="image/four.png" class="dice6"></img>';
            break;
        case 5:
            document.getElementById("d6_2").innerHTML = '<img src="image/five.png" class="dice6"></img>';
            break;
        case 6:
            document.getElementById("d6_2").innerHTML = '<img src="image/six.png" class="dice6"></img>';
            break;

    }

    switch (n2) {
        case 1:
            document.getElementById("d6").innerHTML = '<img src="image/one.png" class="dice6"></img>';
            break;
        case 2:
            document.getElementById("d6").innerHTML = '<img src="image/two.png" class="dice6"></img>';
            break;
        case 3:
            document.getElementById("d6").innerHTML = '<img src="image/three.png" class="dice6"></img>';
            break;
        case 4:
            document.getElementById("d6").innerHTML = '<img src="image/four.png" class="dice6"></img>';
            break;
        case 5:
            document.getElementById("d6").innerHTML = '<img src="image/five.png" class="dice6"></img>';
            break;
        case 6:
            document.getElementById("d6").innerHTML = '<img src="image/six.png" class="dice6"></img>';
            break;

    }


    return
}
/*Dice eight */
/*Dice ten */
function roll1() {
    n = 0;
    n = Math.trunc(Math.random() * (11 - 1) + 1);

    switch (n) {
        case 1:
            document.getElementById("d10").innerHTML = '<img src="image/d1.png" class="dice10"></img>';
            break;
        case 2:
            document.getElementById("d10").innerHTML = '<img src="image/d2.png" class="dice10"></img>';
            break;
        case 3:
            document.getElementById("d10").innerHTML = '<img src="image/d3.png" class="dice10"></img>';
            break;
        case 4:
            document.getElementById("d10").innerHTML = '<img src="image/d4.png" class="dice10"></img>';
            break;
        case 5:
            document.getElementById("d10").innerHTML = '<img src="image/d5.png" class="dice10"></img>';
            break;
        case 6:
            document.getElementById("d10").innerHTML = '<img src="image/d6.png" class="dice10"></img>';
            break;
        case 7:
            document.getElementById("d10").innerHTML = '<img src="image/d7.png" class="dice10"></img>';
            break;
        case 8:
            document.getElementById("d10").innerHTML = '<img src="image/d8.png" class="dice10"></img>';
            break;
        case 9:
            document.getElementById("d10").innerHTML = '<img src="image/d9.png" class="dice10"></img>';
            break;
        case 10:
            document.getElementById("d10").innerHTML = '<img src="image/d10.png" class="dice10"></img>';
            break;

    }

    return
}

function roll2() {
    n = 0;
    n = Math.trunc(Math.random() * (21 - 1) + 1);

    switch (n) {
        case 1:
            document.getElementById("d20").innerHTML = '<img src="image/one20.png" class="dice20"></img>';
            break;
        case 2:
            document.getElementById("d20").innerHTML = '<img src="image/two20.png" class="dice20"></img>';
            break;
        case 3:
            document.getElementById("d20").innerHTML = '<img src="image/three20.png" class="dice20"></img>';
            break;
        case 4:
            document.getElementById("d20").innerHTML = '<img src="image/four20.png" class="dice20"></img>';
            break;
        case 5:
            document.getElementById("d20").innerHTML = '<img src="image/five20.png" class="dice20"></img>';
            break;
        case 6:
            document.getElementById("d20").innerHTML = '<img src="image/six20.png" class="dice20"></img>';
            break;
        case 7:
            document.getElementById("d20").innerHTML = '<img src="image/seven20.png" class="dice20"></img>';
            break;
        case 8:
            document.getElementById("d20").innerHTML = '<img src="image/eight20.png" class="dice20"></img>';
            break;
        case 9:
            document.getElementById("d20").innerHTML = '<img src="image/nine20.png" class="dice20"></img>';
            break;
        case 10:
            document.getElementById("d20").innerHTML = '<img src="image/ten20.png" class="dice20"></img>';
            break;
        case 11:
            document.getElementById("d20").innerHTML = '<img src="image/eleven20.png" class="dice20"></img>';
            break;
        case 12:
            document.getElementById("d20").innerHTML = '<img src="image/twelve20.png" class="dice20"></img>';
            break;
        case 13:
            document.getElementById("d20").innerHTML = '<img src="image/thirteen20.png" class="dice20"></img>';
            break;
        case 14:
            document.getElementById("d20").innerHTML = '<img src="image/fourteen20.png" class="dice20"></img>';
            break;
        case 15:
            document.getElementById("d20").innerHTML = '<img src="image/fifteen20.png" class="dice20"></img>';
            break;
        case 16:
            document.getElementById("d20").innerHTML = '<img src="image/sixteen20.png" class="dice20"></img>';
            break;
        case 17:
            document.getElementById("d20").innerHTML = '<img src="image/seventeen20.png" class="dice20"></img>';
            break;
        case 18:
            document.getElementById("d20").innerHTML = '<img src="image/eighteen20.png" class="dice20"></img>';
            break;
        case 19:
            document.getElementById("d20").innerHTML = '<img src="image/nineteen20.png" class="dice20"></img>';
            break;
        case 20:
            document.getElementById("d20").innerHTML = '<img src="image/twenty20.png" class="dice20"></img>';
            break;
    }

    return
}