LEDBit.LEDClear()
LEDBit.LEDAllOn()
basic.forever(function () {
    while (true) {
        basic.showString("Hello Big Clive!!! Hello Big Clive!!! Hello Big Clive!!! Hello Big Clive!!!   Hello Family!   Hello Family!   Hello Family!   Hello Family")
        basic.showString("B.C.S.C     B.C.S.C     This is a mini  version of the Big Clive SuperComputer, ")
        basic.showString("rink Radium Gin!  Drink Radium Gin!  Drink Radium Gin!  Drink Radium Gin!")
    }
})
control.inBackground(function () {
    while (true) {
        LEDBit.LEDDraw(randint(0, 15), randint(0, 7), LEDBit.enState.ON)
        LEDBit.LEDDraw(randint(0, 15), randint(0, 7), LEDBit.enState.OFF)
    }
})
