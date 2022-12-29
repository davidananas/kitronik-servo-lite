input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    kitronik_servo_lite.backward()
})
input.onButtonPressed(Button.A, function () {
    pin.show()
    kitronik_servo_lite.turnRight(50)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onButtonPressed(Button.AB, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    kitronik_servo_lite.forward()
})
input.onButtonPressed(Button.B, function () {
    pin_l.show()
    kitronik_servo_lite.turnLeft(50)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    kitronik_servo_lite.stop()
})
let pin_l: neopixel.Strip = null
let pin: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
pin = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
pin_l = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
pin.setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
pin_l.setPixelColor(4, neopixel.colors(NeoPixelColors.Orange))
strip.showColor(neopixel.colors(NeoPixelColors.Red))
