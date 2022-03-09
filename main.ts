input.onButtonPressed(Button.A, function () {
    encender = 1
    music.playMelody("C5 - - - - - - - ", 120)
})
input.onButtonPressed(Button.B, function () {
    encender = 0
    music.playMelody("C - - - - - - - ", 120)
})
let encender = 0
encender = 0
basic.forever(function () {
    if (encender == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
    }
})
