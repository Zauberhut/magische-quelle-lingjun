input.onButtonPressed(Button.A, function () {
    if (stop == 1) {
        stop = 0
    } else {
        stop = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (farbig == 1) {
        farbig = 0
    } else {
        farbig = 1
    }
})
input.onPinPressed(TouchPin.P1, function () {
    wasserpumpen = 1
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    if (wassermagie == 1) {
        wassermagie = 0
    } else {
        wassermagie = 1
    }
})
let wassermagie = 0
let wasserpumpen = 0
let farbig = 0
let stop = 0
let strip = neopixel.create(DigitalPin.P14, 600, NeoPixelMode.RGB)
let strip2 = neopixel.create(DigitalPin.P13, 600, NeoPixelMode.RGB)
let farbe = 1
stop = 0
farbig = 1
let Helligkeit = 10
wasserpumpen = 0
wassermagie = 0
basic.forever(function () {
    if (Helligkeit < 200) {
        Helligkeit += 5
    } else {
        Helligkeit += -5
    }
})
basic.forever(function () {
    strip.setBrightness(Helligkeit)
    strip2.setBrightness(Helligkeit)
})
basic.forever(function () {
    if (wassermagie == 1) {
        if (farbig == 1) {
            if (farbe == 1) {
                strip2.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
                farbe = 2
            } else if (farbe == 2) {
                strip2.setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
                farbe = 3
            } else if (farbe == 3) {
                strip2.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
                farbe = 4
            } else if (farbe == 4) {
                strip2.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
                farbe = 5
            } else if (farbe == 5) {
                strip2.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
                farbe = 6
            } else if (farbe == 6) {
                strip2.setPixelColor(0, neopixel.colors(NeoPixelColors.Indigo))
                farbe = 7
            } else if (farbe == 7) {
                strip2.setPixelColor(0, neopixel.colors(NeoPixelColors.Violet))
                farbe = 8
            } else {
                strip2.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
                farbe = 1
            }
            basic.pause(500)
        } else {
            strip2.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
            basic.pause(500)
        }
    } else {
        if (wasserpumpen == 1) {
            strip2.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
            wasserpumpen = 0
        }
    }
})
basic.forever(function () {
    strip2.shift(1)
    strip2.show()
    if (stop == 1) {
        while (stop == 1) {
            basic.pause(100)
        }
    } else {
        basic.pause(10)
    }
})
basic.forever(function () {
    if (wassermagie == 1) {
        if (farbig == 1) {
            if (farbe == 1) {
                strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
                farbe = 2
            } else if (farbe == 2) {
                strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
                farbe = 3
            } else if (farbe == 3) {
                strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
                farbe = 4
            } else if (farbe == 4) {
                strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
                farbe = 5
            } else if (farbe == 5) {
                strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
                farbe = 6
            } else if (farbe == 6) {
                strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Indigo))
                farbe = 7
            } else if (farbe == 7) {
                strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Violet))
                farbe = 8
            } else {
                strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
                farbe = 1
            }
            basic.pause(500)
        } else {
            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
            basic.pause(500)
        }
    } else {
        if (wasserpumpen == 1) {
            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
            wasserpumpen = 0
        }
    }
})
basic.forever(function () {
    strip.shift(1)
    strip.show()
    if (stop == 1) {
        while (stop == 1) {
            basic.pause(100)
        }
    } else {
        basic.pause(10)
    }
})
