let string = ""
radio.setGroup(1)
basic.forever(function () {
    string = serial.readString()
    serial.writeLine("Rueckgabe: " + string)
    radio.sendString(string)
    basic.showString(string)
})
