RunComp.SetLightLevel()
radio.setGroup(33)
let start = false
let cas = 0
basic.forever(function on_forever() {
    console.logValue("dist", RunComp.ping(DigitalPin.P12, DigitalPin.P13, 500))
    basic.pause(500)
})
RunComp.OnLightDrop(function on_light_drop() {
    
    if (start == true) {
        music.playTone(Note.C, music.beat())
        cas = control.millis()
        radio.sendNumber(cas)
    }
    
})
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
})
