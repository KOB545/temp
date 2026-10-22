var a = null
var b = null
var output = null
var state = 0
var operaterText = ['add', 'sub', 'mul', 'div']
/*
0 = NULL
1 = Adddition
2 = Subtraction
3 = Multiply
4 = Division
*/

function show(display) {
    console.log(display)
    document.getElementById('display').innerText = display
}

function len(num) {
    let count = 0
    // num = Math.abs(num)
    while (num != 0) {
        count++
        num /= 10
        if (-1 < num && num < 1)
            break
    }
    return count
}

function decreseSize() {
    if(state === 0){
        if ((len(a) >= 6 && a >= 0) || (len(a) >= 5) && a < 0) {
            let sizeFont = parseInt(window.getComputedStyle(document.getElementById('display')).fontSize);
            console.log("sizeFont : ", sizeFont)
            document.getElementById('display').style.fontSize = (sizeFont - 7) + 'px'
        }
    }
    else{
        if ((len(b) >= 6 && b >= 0) || (len(b) >= 5) && b < 0) {
            let sizeFont = parseInt(window.getComputedStyle(document.getElementById('display')).fontSize);
            console.log("sizeFont : ", sizeFont)
            document.getElementById('display').style.fontSize = (sizeFont - 7) + 'px'
        }
    }
}

function checkDel() {
    let text = ""
    if (a === null && b === null) text = "AC"
    else text = "C"
    document.getElementById('del').innerText = text
}

function bnum(lastDigit) {
    if (state === 0) {
        if (len(a) >= 9)
            return 0
        if (a >= 0)
            a = a * 10 + lastDigit
        else
            a = a * 10 - lastDigit
        show(a)
    }
    else {
        if (len(b) >= 9)
            return 0
        if (b >= 0)
            b = b * 10 + lastDigit
        else
            b = b * 10 - lastDigit
        show(b)
    }

    checkDel()
    decreseSize()
}

function bState(paramSatet) {
    state = paramSatet
    setColor()
}

function bpercent() {
    a /= 100
    show(a)
}

function bsign() {
    a *= -1
    show(a)
}

function bdel() {
    a = null
    b = null
    output = null
    checkDel()
    document.getElementById('display').style.fontSize = '78px'
    show(0)
}

function beql() {
    console.log("A : ", a)
    console.log("B : ", b)
    switch (state) {
        case 1:
            output = a + b
            break
        case 2:
            output = a - b
            break
        case 3:
            output = a * b
            break
        case 4:
            output = a / b
            break
    }
    if (len(output) === 6)
        document.getElementById('display').style.fontSize = '78px'
    else if (len(output) === 7)
        document.getElementById('display').style.fontSize = '71px'
    else if (len(output) === 8)
        document.getElementById('display').style.fontSize = '64px'
    else if (len(output) === 9)
        document.getElementById('display').style.fontSize = '57px'
    show(output)
    state = 0
    setColor()
}

function setColor() {
    for (let i = 0; i < 4; i++) {
        document.getElementById(operaterText[i]).style.background = "#ff9f0a"
        document.getElementById(operaterText[i]).style.color = "white"
    }

    switch (state) {
        case 1:
            document.getElementById(operaterText[0]).style.background = "white"
            document.getElementById(operaterText[0]).style.color = "#ff9f0a"
            break
        case 2:
            document.getElementById(operaterText[1]).style.background = "white"
            document.getElementById(operaterText[1]).style.color = "#ff9f0a"
            break
        case 3:
            document.getElementById(operaterText[2]).style.background = "white"
            document.getElementById(operaterText[2]).style.color = "#ff9f0a"
            break
        case 4:
            document.getElementById(operaterText[3]).style.background = "white"
            document.getElementById(operaterText[3]).style.color = "#ff9f0a"
            break
    }
}