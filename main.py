RunComp.set_light_level()
radio.set_group(33)
start = False
cas = 0

def on_forever():
    console.log_value("dist", RunComp.ping(DigitalPin.P12, DigitalPin.P13, 500))
    basic.pause(500)

basic.forever(on_forever) 



def on_light_drop():
    global start, cas
    if start == True:
        music.play_tone(Note.C, music.beat())
        cas = control.millis()
        radio.send_number(cas)
    

RunComp.on_light_drop(on_light_drop)



    

