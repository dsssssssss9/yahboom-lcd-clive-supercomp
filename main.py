LEDBit.led_clear()
LEDBit.led_all_on()

def on_forever():
    basic.show_string("Hello Big Clive")
basic.forever(on_forever)

def on_in_background():
    while True:
        LEDBit.led_draw(randint(0, 15), randint(0, 7), LEDBit.enState.ON)
        LEDBit.led_draw(randint(0, 15), randint(0, 7), LEDBit.enState.OFF)
control.in_background(on_in_background)
