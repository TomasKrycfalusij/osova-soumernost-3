// OSA
let a = 2
let displej = 5
function draw_osa() {
    for (let i = 0; i < displej; i++) {
        led.plotBrightness(a, i, 100)
    }
}

draw_osa()
// OBDELNIK
let obdelnik = [[0, 1], [0, 4], [2, 4], [2, 1]]
// BODY
for (let bod of obdelnik) {
    led.plot(bod[0], bod[1])
}
// MIRROR
for (let bod2 of obdelnik) {
    led.plot(Math.abs(bod2[0] - 4), bod2[1])
}
basic.pause(1000)
// BLIKANI
basic.clearScreen()
for (let t = 0; t < 2; t++) {
    for (let blikani of obdelnik) {
        draw_osa()
        led.plot(blikani[0], blikani[1])
        basic.pause(500)
        basic.clearScreen()
    }
    obdelnik[0][0] = Math.abs(obdelnik[0][0] - 4)
    obdelnik[1][0] = Math.abs(obdelnik[1][0] - 4)
}
