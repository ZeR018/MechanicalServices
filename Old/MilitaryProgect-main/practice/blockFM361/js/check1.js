let constructFunction = function () {
    for (let i = 0; i < coordsLamps.length; i++) {
        this.lamps.set(`lamp${i}`, new Elem(`lamp${i}`, {
            "0": "../img/off_lamp.png",
            "1": setActiveLampColor(i)
        },
            [0, 1, 2, 4].includes(i) ? "1" : "0", {
            "top": `${coordsLamps[i][0]}px`,
            "left": `${coordsLamps[i][1]}px`,
            "max-width": `${coordsLamps[i][2]}px`
        }))
    }
    for (let i = 0; i < coordsTumblers.length; i++) {
        if (i === 0) continue
        this.tumblers.set(`tumbler${i}`, new Elem(`tumbler${i}`, setTumblerKind(i),
            [3,].includes(i) ? "0" : "1", {
            "top": `${coordsTumblers[i][0]}px`,
            "left": `${coordsTumblers[i][1]}px`,
            "max-width": `${coordsTumblers[i][2]}px`
        }))
    }

    this.tumblers.set(`tumbler${0}`, new Elem(`tumbler${0}`, {
        "0": "../img/left_tumbler.png",
        "1": "../img/left_tumbler.png",
        "2": "../img/left_tumbler.png"
    },
        "0", {
        "top": `${coordsTumblers[0][0]}px`,
        "left": `${coordsTumblers[0][1]}px`,
        "max-width": `${coordsTumblers[0][2]}px`
    }))

    for (let i = 0; i < coordsButtons.length; i++) {
        this.buttons.set(`button${i}`, new Elem(`button${i}`, {
            "0": "../img/button.png"
        }, "0", {
            "top": `${coordsButtons[i][0]}px`,
            "left": `${coordsButtons[i][1]}px`,
            "max-width": `${coordsButtons[i][2]}px`
        }))
    }
    for (let i = 0; i < coordsAnvils.length; i++) {
        this.anvils.set(`anvil${i}`, new Anvil(`anvil${i}`, '../img/anvil.png', anvilState[i], "1", {
            "top": `${coordsAnvils[i][0]}px`,
            "left": `${coordsAnvils[i][1]}px`,
            "max-width": `${coordsAnvils[i][2]}px`
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
    let learnMassages = ["Переключатель ВКЛ-ВЫКЛ-ДИСТ в положение ВКЛ",
        "Переключатель КОНТРОЛЬ ЯЧЕЕК (ВЫКЛ-У1…У6) – в положение ВЫКЛ",
        "Тумблер РАЗР ПОДСТР – в положение ВЫКЛ",
        "Тумблер РЕЖИМ – в положение «2»",
        "Тумблер ВКЛ ИНД – в положение ВКЛ"
    ]


    let scrollParameter = 400


    let main = new Main(constructFunction)


    let stepQueue = new StepQueue([1, 3, 10, 11, 13])

    let learnMode = new LearnMode(main, stepQueue, learnMassages, scrollParameter)
    learnMode.mainSequence()
} else {


    let main = new Main(constructFunction)

    let stepQueue = new StepQueue([[1, 3, 10, 11, 13]])

    let controlMode = new ControlMode(main, stepQueue)
    controlMode.mainSequence()
    controlMode.errorMassage()
}