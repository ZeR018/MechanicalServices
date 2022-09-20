let constructFunction = function () {
    for (let i = 0; i < coordsLamps.length; i++) {
        this.lamps.set(`lamp${i}`, new Elem(`lamp${i}`, {
            "0": "../img/off_lamp.png",
            "1": i == 15 ? "../img/red_lamp.png" : "../img/green_lamp.png"
        },
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 17,].includes(i) ? "1" : "0", {
            "top": `${coordsLamps[i][0]}px`,
            "left": `${coordsLamps[i][1]}px`,
            "max-width": `${coordsLamps[i][2]}px`
        }))
    }
    for (let i = 0; i < coordsTumblers.length; i++) {
        this.tumblers.set(`tumbler${i}`, new Elem(`tumbler${i}`, {
            "0": i == 0 ? "../img/left_tumbler.png" : "../img/down_tumbler.png",
            "1": i == 0 ? "../img/right_tumbler.png" : "../img/up_tumbler.png"
        },
            [0, 1, 2, 3, 7].includes(i) ? "1" : "0", {
            "top": `${coordsTumblers[i][0]}px`,
            "left": `${coordsTumblers[i][1]}px`,
            "max-width": `${coordsTumblers[i][2]}px`
        }))
    }
    for (let i = 0; i < coordsButtons.length; i++) {
        this.buttons.set(`button${i}`, new Elem(`button${i}`, {
            "0": "../img/button.png"
        }, "0", {
            "top": `${coordsButtons[i][0]}px`,
            "left": `${coordsButtons[i][1]}px`,
            "max-width": `${coordsButtons[i][2]}px`
        }))
    }
    for (let i = 0; i < coordsControlElems.length; i++) {
        this.controlElements.set(`controlElement${i}`, new ControlElem(`controlElement${i}`, {
            "top": `${coordsControlElems[i][0]}px`,
            "left": `${coordsControlElems[i][1]}px`,
            "width": `${coordsControlElems[i][2]}px`,
            "height": `${coordsControlElems[i][3]}px`,
        }))
    }
}

let mode = localStorage.getItem("mode");


if (mode === "learn") {
    let learnMassages = ['Нажмите кнопку ЗАКР ЗАСЛ',
        'Выключите тумблер ВКЛ под надписью ВЕНТИЛЯЦИЯ',
        'Выключите тумблер КОНТЕЙНЕР под надписью ВЕНТИЛЯЦИЯ',
    ]

    let scrollParameter = 400


    let queue = [4, 7, 9]
    let stepQueue = new StepQueue(queue)

    let main = new Main(constructFunction)
    main.control = "local"
    main.voltage = "on"
    main.dampers = "open"
    main.ventilation = "on"


    let learnMode = new LearnMode(main, stepQueue, learnMassages, scrollParameter)
    learnMode.mainSequence()
} else {


    let queue = [[4, 7, 9]]
    let stepQueue = new StepQueue(queue)

    let main = new Main(constructFunction)
    main.control = "local"
    main.voltage = "on"
    main.dampers = "open"
    main.ventilation = "on"

    let controlMode = new ControlMode(main, stepQueue)
    controlMode.mainSequence()
    controlMode.errorMassage()
}