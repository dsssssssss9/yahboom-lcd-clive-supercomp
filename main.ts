LEDBit.LEDClear()
LEDBit.LEDAllOn()
basic.forever(function () {
    basic.showString("Hello Big Clive")
})
control.inBackground(function () {
    while (true) {
        LEDBit.LEDDraw(randint(0, 15), randint(0, 7), LEDBit.enState.ON)
        LEDBit.LEDDraw(randint(0, 15), randint(0, 7), LEDBit.enState.OFF)
    }
})
