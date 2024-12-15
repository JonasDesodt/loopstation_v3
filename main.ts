input.onButtonPressed(Button.A, function () {
    input2.push(262)
})
input.onPinPressed(TouchPin.P2, function () {
    input2.push(330)
})
input.onButtonPressed(Button.AB, function () {
    for (let waarde of input2) {
        sequentie.push(waarde)
    }
    input2 = []
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    sequentie = input2
    input2 = []
})
input.onButtonPressed(Button.B, function () {
    input2.push(349)
})
input.onPinPressed(TouchPin.P1, function () {
    input2.push(294)
})
let sequentie: number[] = []
let input2: number[] = []
input2 = []
sequentie = []
let speellijst: number[] = []
basic.forever(function () {
    if (sequentie.length > speellijst.length) {
        speellijst = sequentie
    }
    for (let waarde of speellijst) {
        music.play(music.tonePlayable(waarde, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
