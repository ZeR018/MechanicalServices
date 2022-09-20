let constructFunction = function () {
    for (let i = 0; i < coordsLamps.length; i++) {
        this.lamps.set(`lamp${i}`, new Elem(`lamp${i}`, {
            "0": "../img/off_lamp.png",
            "1": setActiveLampColor(i)
        },
            setLampsStartState(i), {
            "top": `${coordsLamps[i][0]}px`,
            "left": `${coordsLamps[i][1]}px`,
            "max-width": `${coordsLamps[i][2]}px`
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
        this.anvils.set(`anvil${i}`, new Anvil(`anvil${i}`, '../img/anvil.png', anvilState[i], "2", {
            "top": `${coordsAnvils[i][0]}px`,
            "left": `${coordsAnvils[i][1]}px`,
            "max-width": `${coordsAnvils[i][2]}px`
        }))
    }
    for (let i = 0; i < coordsButtons8.length; i++) {
        this.buttons.set(`button8${i}`, new Elem(`button8_${i}`, {
            "0": "./img/button8.png"
        }, "0", {
            "top": `${coordsButtons8[i][0]}px`,
            "left": `${coordsButtons8[i][1]}px`,
            "max-width": `${coordsButtons8[i][2]}px`
        }))
    }
    for (let i = 0; i < coordsButtons6.length; i++) {
        this.buttons.set(`button6${i}`, new Elem(`button6_${i}`, {
            "0": "./img/button6.png"
        }, "0", {
            "top": `${coordsButtons6[i][0]}px`,
            "left": `${coordsButtons6[i][1]}px`,
            "max-width": `${coordsButtons6[i][2]}px`
        }))
    }
    for (let i = 0; i < coordsButtons5.length; i++) {
        this.buttons.set(`button5${i}`, new Elem(`button5_${i}`, {
            "0": "./img/button5.png"
        }, "0", {
            "top": `${coordsButtons5[i][0]}px`,
            "left": `${coordsButtons5[i][1]}px`,
            "max-width": `${coordsButtons5[i][2]}px`
        }))
    }
    for (let i = 0; i < coordsButtons7.length; i++) {
        this.buttons.set(`button7${i}`, new Elem(`button7_${i}`, {
            "0": "./img/button7.png"
        }, "0", {
            "top": `${coordsButtons7[i][0]}px`,
            "left": `${coordsButtons7[i][1]}px`,
            "max-width": `${coordsButtons7[i][2]}px`
        }))
    }
    for (let i = 0; i < coordsButtons1.length; i++) {
        this.buttons.set(`button1${i}`, new Elem(`button1_${i}`, {
            "0": "./img/button1.png"
        }, "0", {
            "top": `${coordsButtons1[i][0]}px`,
            "left": `${coordsButtons1[i][1]}px`,
            "max-width": `${coordsButtons1[i][2]}px`
        }))
    }
    for (let i = 0; i < coordsButtons4.length; i++) {
        this.buttons.set(`button4${i}`, new Elem(`button4_${i}`, {
            "0": "./img/button4.png"
        }, "0", {
            "top": `${coordsButtons4[i][0]}px`,
            "left": `${coordsButtons4[i][1]}px`,
            "max-width": `${coordsButtons4[i][2]}px`
        }))
    }
    for (let i = 0; i < coordsButtons9.length; i++) {
        this.buttons.set(`button9${i}`, new Elem(`button9_${i}`, {
            "0": "./img/button9.png"
        }, "0", {
            "top": `${coordsButtons9[i][0]}px`,
            "left": `${coordsButtons9[i][1]}px`,
            "max-width": `${coordsButtons9[i][2]}px`
        }))
    }
    for (let i = 0; i < coordsButtons2.length; i++) {
        this.buttons.set(`button2${i}`, new Elem(`button2_${i}`, {
            "0": "./img/button2.png"
        }, "0", {
            "top": `${coordsButtons2[i][0]}px`,
            "left": `${coordsButtons2[i][1]}px`,
            "max-width": `${coordsButtons2[i][2]}px`
        }))
    }
    for (let i = 0; i < coordsButtons3.length; i++) {
        this.buttons.set(`button3${i}`, new Elem(`button3_${i}`, {
            "0": "./img/button3.png"
        }, "0", {
            "top": `${coordsButtons3[i][0]}px`,
            "left": `${coordsButtons3[i][1]}px`,
            "max-width": `${coordsButtons3[i][2]}px`
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
    let learnMassages = [
        'переключатель СЕАНС – в положение "ОБЩ"',
        'переключатель КОД – в положение "К прм ИМИТ"',
        'переключатель КАНАЛ – в положение "ОБЩ"',
        'переключатель СЛОВО – в положение "2"',
        'переключатель ВЫБОР СВЯЗИ – в положение "ПСВ"',
        'переключатель НОМЕР Ф3 – в согласно номера ПК',
        'переключатель РЕЖИМЫ РК – в положение "АВТ ФК"'
    ]

    let scrollParameter = 400

    let main = new Main(constructFunction)

    let stepQueue = new StepQueue([1, 6, 15, 21, 42, 43, 50])

    let learnMode = new LearnMode(main, stepQueue, learnMassages, scrollParameter)
    learnMode.mainSequence()
} else {

    let main = new Main(constructFunction)

    let stepQueue = new StepQueue([[1, 6, 15, 21, 42, 43, 50]])

    let controlMode = new ControlMode(main, stepQueue)
    controlMode.mainSequence()
    controlMode.errorMassage()
}