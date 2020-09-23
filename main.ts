input.onButtonPressed(Button.A, function () {
    LEDBit.LEDClear()
    for (let index = 0; index <= 7; index++) {
        for (let index2 = 0; index2 <= 15; index2++) {
            LEDBit.LEDDraw(index2, index, LEDBit.enState.ON)
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index3 = 7; index3 > -1; index3--) {
        for (let index22 = 15; index22 > -1; index22--) {
            LEDBit.LEDDraw(index22, index3, LEDBit.enState.OFF)
            basic.pause(100)
        }
    }
})
LEDBit.LEDClear()
LEDBit.LEDAllOn()
basic.forever(function () {
	
})
