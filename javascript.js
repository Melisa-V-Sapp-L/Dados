/* Funcion de tirada de dados */
/* Dice 6*/ 
function roll() {
    let n = Math.trunc(Math.random() * (7 - 1) + 1);

    switch (n) {
        case 1:
            document.getElementById("d6").innerHTML = '<img src="image/one.png" class="dice6"></img>';
            break;
        case 2:
            document.getElementById("d6").innerHTML = '<img src="image/2.png" class="dice6"></img>';
            break;
        case 3:
            document.getElementById("d6").innerHTML = '<img src="image/three.png" class="dice6"></img>';
            break;
        case 4:
            document.getElementById("d6").innerHTML = '<img src="image/4.png" class="dice6"></img>';
            break;
        case 5:
            document.getElementById("d6").innerHTML = '<img src="image/five.png" class="dice6"></img>';
            break;
        case 6:
            document.getElementById("d6").innerHTML = '<img src="image/6.png" class="dice6"></img>';
            break;

    }

    return
}
/* Second dice 6 */
function roll0() {
    let n = Math.trunc(Math.random() * (7 - 1) + 1);

    switch (n) {
        case 1:
            document.getElementById("d6_2").innerHTML = '<img src="image/1.png" class="dice6"></img>';
            break;
        case 2:
            document.getElementById("d6_2").innerHTML = '<img src="image/two.png" class="dice6"></img>';
            break;
        case 3:
            document.getElementById("d6_2").innerHTML = '<img src="image/3.png" class="dice6"></img>';
            break;
        case 4:
            document.getElementById("d6_2").innerHTML = '<img src="image/four.png" class="dice6"></img>';
            break;
        case 5:
            document.getElementById("d6_2").innerHTML = '<img src="image/5.png" class="dice6"></img>';
            break;
        case 6:
            document.getElementById("d6_2").innerHTML = '<img src="image/six.png" class="dice6"></img>';
            break;

    }

    return
}
/*Dice eight */
/*Dice ten */
function roll1() {
    let n = Math.trunc(Math.random() * (7 - 1) + 1);

    switch (n) {
        case 1:
            document.getElementById("image1").innerHTML = '<img src="image/one.png" class="dice6"></img>';
            break;
        case 2:
            document.getElementById("image1").innerHTML = '<img src="image/two.png" class="dice6"></img>';
            break;
        case 3:
            document.getElementById("image1").innerHTML = '<img src="image/three.png" class="dice6"></img>';
            break;
        case 4:
            document.getElementById("image1").innerHTML = '<img src="image/four.png" class="dice6"></img>';
            break;
        case 5:
            document.getElementById("image1").innerHTML = '<img src="image/five.png" class="dice6"></img>';
            break;
        case 6:
            document.getElementById("image1").innerHTML = '<img src="image/six.png" class="dice6"></img>';
            break;

    }

    return
}

function roll2() {
    let n = Math.trunc(Math.random() * (21 - 1) + 1);

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
            document.getElementById("image2").innerHTML = '<img src="image/seven20.png" class="dice20"></img>';
            break;
        case 8:
            document.getElementById("image2").innerHTML = '<img src="image/eight20.png" class="dice20"></img>';
            break;
        case 9:
            document.getElementById("image2").innerHTML = '<img src="image/nine20.png" class="dice20"></img>';
            break;
        case 10:
            document.getElementById("image2").innerHTML = '<img src="image/ten20.png" class="dice20"></img>';
            break;
        case 11:
            document.getElementById("image2").innerHTML = '<img src="image/eleven20.png" class="dice20"></img>';
            break;
        case 12:
            document.getElementById("image2").innerHTML = '<img src="image/twelve20.png" class="dice20"></img>';
            break;
        case 13:
            document.getElementById("image2").innerHTML = '<img src="image/thirteen20.png" class="dice20"></img>';
            break;
        case 14:
            document.getElementById("image2").innerHTML = '<img src="image/fourteen20.png" class="dice20"></img>';
            break;
        case 15:
            document.getElementById("image2").innerHTML = '<img src="image/fifteen20.png" class="dice20"></img>';
            break;
        case 16:
            document.getElementById("image2").innerHTML = '<img src="image/sixteen20.png" class="dice20"></img>';
            break;
        case 17:
            document.getElementById("image2").innerHTML = '<img src="image/seventeen20.png" class="dice20"></img>';
            break;
        case 18:
            document.getElementById("image2").innerHTML = '<img src="image/eighteen20.png" class="dice20"></img>';
            break;
        case 19:
            document.getElementById("image2").innerHTML = '<img src="image/nineteen20.png" class="dice20"></img>';
            break;
        case 20:
            document.getElementById("image2").innerHTML = '<img src="image/twenty20.png" class="dice20"></img>';
            break;
    }

    return
}