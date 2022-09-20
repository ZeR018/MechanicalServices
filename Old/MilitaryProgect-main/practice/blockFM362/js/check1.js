let constructFunction = function () {
    for (let i = 0; i < coordsLamps.length; i++) {
        this.lamps.set(`lamp${i}`, new Elem(`lamp${i}`, {
            "0": "../img/off_lamp.png",
            "1": setActiveLampColor(i)
        },
            [0,].includes(i) ? "1" : "0", {
            "top": `${coordsLamps[i][0]}px`,
            "left": `${coordsLamps[i][1]}px`,
            "max-width": `${coordsLamps[i][2]}px`
        }))
    }
    for (let i = 0; i < coordsTumblers.length; i++) {
        this.tumblers.set(`tumbler${i}`, new Elem(`tumbler${i}`, setTumblerKind(i),
            0, {
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
    let learnMassages = ["Переключатель КОНТРОЛЬ ЯЧЕЕК (ВЫКЛ-У1…РУ) – в положение ВЫКЛ",
        "Переключатель КОНТРОЛЬ ЯЧЕЕК (ВЫКЛ-У13…У21) – в положение ВЫКЛ",
        "Переключатель КОНТРОЛЬ ЯЧЕЕК (СИНХР-У25…У37) – в положение СИНХР",
        "Переключатель ФАЗА – в положение β",
        "Тумблер УСТ ФАЗЫ – в положение 90"
    ]


    let scrollParameter = 400


    let main = new Main(constructFunction)


    let stepQueue = new StepQueue([1, 13, 21, 31, 39])

    let learnMode = new LearnMode(main, stepQueue, learnMassages, scrollParameter)
    learnMode.mainSequence()
} else {


    let main = new Main(constructFunction)

    let stepQueue = new StepQueue([[1, 13, 21, 31, 39]])

    let controlMode = new ControlMode(main, stepQueue)
    controlMode.mainSequence()
    controlMode.errorMassage()
}