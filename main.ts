LEDBit.LEDClear()
LEDBit.LEDAllOn()
basic.forever(function () {
    basic.showString("B.C.S.C     B.C.S.C     This is a mini  version of the Big Clive SuperComputer,     Hello Big Clive!!! Hello Big Clive!!! Hello Big Clive!!! Hello Big Clive!!! Hello Big Clive!!! Hello Big Clive!!! Hello Big Clive!!!   Hello Family!   Hello Family!   Hello Family!   Hello Family!   Hello Family!   Hello Family!   Drink Radium Gin!  Drink Radium Gin!  Drink Radium Gin!  Drink Radium Gin!  Drink Radium Gin!  Drink Radium Gin!    ")
})
control.inBackground(function () {
    while (true) {
        LEDBit.LEDDraw(randint(0, 15), randint(0, 7), LEDBit.enState.ON)
        LEDBit.LEDDraw(randint(0, 15), randint(0, 7), LEDBit.enState.OFF)
    }
})
