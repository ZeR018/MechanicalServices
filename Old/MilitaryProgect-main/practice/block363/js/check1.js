let constructFunction = function () {
    for (let i = 0; i < coordsLamps.length; i++) {
        this.lamps.set(`lamp${i}`, new Elem(`lamp${i}`, {
            "0": "../img/off_lamp.png",
            "1": i == 3 ? "../img/red_lamp.png" : "../img/green_lamp.png"
        },
            [0, 1, 2].includes(i) ? "1" : "0", {
            "top": `${coordsLamps[i][0]}px`,
            "left": `${coordsLamps[i][1]}px`,
            "max-width": `${coordsLamps[i][2]}px`
        }))
    }
    for (let i = 0; i < coordsTumblers.length; i++) {
        this.tumblers.set(`tumbler${i}`, new Elem(`tumbler${i}`, {
            "0": "../img/down_tumbler.png",
            "1": "../img/up_tumbler.png"
        },
            "1", {
            "top": `${coordsTumblers[i][0]}px`,
            "left": `${coordsTumblers[i][1]}px`,
            "max-width": `${coordsTumblers[i][2]}px`
        }))
    }
    for (let i = 0; i < coordsButtons.length; i++) {
        this.buttons.set(`button${i}`, new Elem(`button${i}`, {
            "0": `img/button${[0, 1, 2].includes(i) ? 1 : i - 1}.png`
        }, "0", {
            "top": `${coordsButtons[i][0]}px`,
            "left": `${coordsButtons[i][1]}px`,
            "max-width": `${coordsButtons[i][2]}px`
        }))
    }
    this.anvils.set('anvil0', new Anvil('anvil0', '../img/anvil.png', {
        0: 0,
        1: 35,
        2: 90,
        3: 145,
        4: 180
    }, "1", {
        "top": `${coordsAnvils[0][0]}px`,
        "left": `${coordsAnvils[0][1]}px`,
        "max-width": `${coordsAnvils[0][2]}px`
    }))

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
    let learnMassages = ['Выключите тумблер ВКЛ БЛОКА',
        'Выключите тумблер ВКЛ РСт'
    ]

    let scrollParameter = 400


    let main = new Main(constructFunction)

    let stepQueue = new StepQueue([1, 2])

    let learnMode = new LearnMode(main, stepQueue, learnMassages, scrollParameter)
    learnMode.mainSequence()
} else {


    let main = new Main(constructFunction)


    let stepQueue = new StepQueue([[1, 2]])

    let controlMode = new ControlMode(main, stepQueue)
    controlMode.mainSequence()
    controlMode.errorMassage()
}