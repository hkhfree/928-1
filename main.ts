basic.forever(function () {
    music.playTone(523, music.beat(BeatFraction.Whole))
    pins.digitalWritePin(DigitalPin.P5, 1)
    basic.pause(100)
    music.playTone(392, music.beat(BeatFraction.Whole))
    pins.digitalWritePin(DigitalPin.P5, 0)
    basic.pause(100)
})
