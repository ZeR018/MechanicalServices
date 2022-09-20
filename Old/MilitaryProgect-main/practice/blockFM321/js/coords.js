const coordsLamps = [
    [30, 180, 120],
    [30, 285, 120],
    [330, 55, 120],
    [330, 425, 120],
]

const coordsButtons = [
    [45, 390, 90],
    [990, 255, 90]
]

const coordsBlueButtons = [
    [770, 345, 90],
    [770, 452, 90]
]

const coordsTumblers = [
    [757, 68, 36],
    [757, 170, 36]
]

const coordsAnvils = [
    [630, 250, 90]
]

const coordsArrows = [
    [400, 225, 150]
]

const coordsControlElems = [
    [65, 410, 50, 50],
    [600, 190, 50, 30],
    [570, 235, 50, 30],
    [570, 300, 50, 30],
    [600, 350, 50, 30],
    [740, 60, 50, 30],
    [820, 60, 50, 30],
    [740, 145, 80, 30],
    [820, 160, 60, 30],
    [765, 340, 100, 100],
    [765, 447, 100, 100],
    [1010, 275, 50, 50],
]

const anvilState = [{
    0: 30,
    1: 60,
    2: 115,
    3: 150,
}]

function setActiveLampColor(i) {
    if ([0, ].includes(i)) {
        return "../img/yellow_lamp.png"
    }
    if ([1, 3].includes(i)) {
        return "../img/red_lamp.png"
    }
    return "../img/green_lamp.png"
}

function setTumblerKind(i) {
    return {
        "0": "../img/down_tumbler.png",
        "1": "../img/up_tumbler.png"
    }
}