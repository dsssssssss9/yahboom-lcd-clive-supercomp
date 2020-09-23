def on_button_pressed_a():
    LEDBit.led_clear()
    for index in range(8):
        for index2 in range(16):
            LEDBit.led_draw(index2, index, LEDBit.enState.ON)
            basic.pause(100)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    LEDBit.led_clear()
    for index3 in range(8):
        for index22 in range(16):
            LEDBit.led_draw(index22, index3, LEDBit.enState.ON)
            basic.pause(100)
input.on_button_pressed(Button.B, on_button_pressed_b)

LEDBit.led_clear()
LEDBit.led_all_on()

def on_forever():
    pass
basic.forever(on_forever)
