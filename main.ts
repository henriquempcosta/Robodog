for (let index = 0; index < 2; index++) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(500)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
}
basic.pause(10000)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
basic.pause(2000)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
basic.pause(50000)
