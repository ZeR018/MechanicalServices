const coordsTumblers = [
    [160, 405, 90],
    [680, 260, 45],
    [682, 415, 90],
    [1100, 290, 45]
]

const coordsLamps = [
    [45, 80, 110],
    [45, 150, 110],
    [45, 220, 110],
    [45, 400, 110],
    [210, 110, 110],
    [210, 255, 110],
    [355, 15, 110],
    [355, 87, 110],
    [355, 160, 110],
    [355, 305, 110],
    [355, 430, 110],
    [420, 250, 110],
    [440, 420, 110],
]

const coordsButtons = [
    [220, 405, 90],
    [1090, 410, 90],
]

const coordsAnvils = [
    [540, 240, 110],
]

const coordsControlElems = [
    [168, 348, 50, 30],
    [168, 515, 50, 30],
    [240, 425, 50, 50],
    [555, 175, 50, 30],
    [530, 200, 50, 30],
    [510, 230, 50, 30],
    [500, 275, 50, 30],
    [510, 315, 50, 30],
    [530, 350, 50, 30],
    [655, 220, 110, 30],
    [780, 260, 50, 30],
    [690, 375, 50, 30],
    [690, 490, 50, 30],
    [1080, 270, 80, 30],
    [1165, 285, 50, 30],
    [1110, 430, 50, 50],
    [120, 423, 50, 30]
]

const anvilState = [{
    0: 0,
    1: 20,
    2: 40,
    3: 95,
    4: 135,
    5: 160
}]

function setActiveLampColor(i) {
    if ([3, 12].includes(i)) {
        return "../img/yellow_lamp.png"
    }
    if ([5, 11].includes(i) || i > 28) {
        return "../img/red_lamp.png"
    }
    return "../img/green_lamp.png"
}

function setTumblerKind(i) {
    if ([0, 2].includes(i)) {
        return {
            "0": "../img/left_tumbler.png",
            "1": "../img/right_tumbler.png"
        }
    }
    return {
        "0": "../img/down_tumbler.png",
        "1": "../img/up_tumbler.png"
    }
}