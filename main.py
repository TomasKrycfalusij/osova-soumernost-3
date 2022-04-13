#OSA
a = 2
displej = 5
def draw_osa():
    for i in range(displej):
        led.plot_brightness(a, i, 100)
draw_osa()
#OBDELNIK
obdelnik = [[0, 1], [0, 4], [2, 4], [2, 1]]

#BODY
for bod in obdelnik:
    led.plot(bod[0], bod[1])
#MIRROR
for bod2 in obdelnik:
    led.plot(abs(bod2[0]-4), bod2[1])
basic.pause(1000)

#BLIKANI
basic.clear_screen()
for t in range(2):
    for blikani in obdelnik:
        draw_osa()
        led.plot(blikani[0], blikani[1])
        basic.pause(500)
        basic.clear_screen()
    obdelnik[0][0] = abs(obdelnik[0][0] - 4)
    obdelnik[1][0] = abs(obdelnik[1][0] - 4)
