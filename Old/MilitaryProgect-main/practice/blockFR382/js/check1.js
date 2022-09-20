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
    for (let i = 0; i < coordsSmallLamps.length; i++) {
        this.smallLamps.set(`smallLamp${i}`, new Elem(`smallLamp${i}`, {
            "0": "img/lamp2.png",
            "1": "img/lamp1.png"
        }, "0", {
            "top": `${coordsSmallLamps[i][0]}px`,
            "left": `${coordsSmallLamps[i][1]}px`,
            "max-width": `${coordsSmallLamps[i][2]}px`
        }))
    }
    for (let i = 0; i < coordsTumblers.length; i++) {
        this.tumblers.set(`tumbler${i}`, new Elem(`tumbler${i}`, {
            "0": "../img/down_tumbler.png",
            "1": "../img/up_tumbler.png"
        },
            tumblersStartState(i), {
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
    for (let i = 0; i < coordsQuaterButtons.length; i++) {
        this.quaterButtons.set(`quaterButton${i}`, new Elem(`quaterButton${i}`, {
            "0": quaterButtonsImage(i)
        }, "0", {
            "top": `${coordsQuaterButtons[i][0]}px`,
            "left": `${coordsQuaterButtons[i][1]}px`,
            "max-width": `${coordsQuaterButtons[i][2]}px`
        }))
    }
    for (let i = 0; i < coordsAnvils.length; i++) {
        this.anvils.set(`anvil${i}`, new Anvil(`anvil${i}`, '../img/anvil.png', anvilState[i], anvilsStartState(i), {
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
    let learnMassages = ['тумблер ВКЛ ПИТ - в положение "ВКЛ"',
        'переключатель КОД - в положение "К Пр"',
        'переключатель КАНАЛ - в положение "Общ"',
        'переключатель СЛОВО - в положение "2"',
        'тумблер ИМИТ ИНФ - в положение "ВЫКЛ"',
        'переключатель БР-РК-КС - в положение "РК"',
        'переключатель ЛИТ1-ЛИТ2 - В ПОЛОЖЕНИЕ "ЛИТ1"',
        'переключатель ПУ1-ПУ2-ПУ3 в положение "ПУ1"',
        'кнопка ДР - в положение "ВЫКЛ"',
        'кнопка ПЕРЕСТР - в положение "ВЫКЛ"',
        'кнопка ВКЛ ЛС - в положение "ВЫКЛ"',
        'кнопка ПАЗ-ПХЗ - в положение "ВЫКЛ"',
        'кнопка УГЛЫ ВВЕДЕНЫ - в положение "ВЫКЛ"',
        'тумблеры КЛЮЧИ - в положение "ВЫКЛ"',
        'тумблеры КЛЮЧИ - в положение "ВЫКЛ"',
        'тумблеры КЛЮЧИ - в положение "ВЫКЛ"',
        'тумблеры КЛЮЧИ - в положение "ВЫКЛ"',
        'тумблеры ЗАДЕРЖКИ(1p, 2p) - в положение "ВЫКЛ"',
        'тумблеры ЗАДЕРЖКИ(1p, 2p) - в положение "ВЫКЛ"',
        'переключатель y - в положение "0°"',
        'переключатель θ - в положение "-45°"',
        'переключатель НОМЕР Ф3 - в положение 1'
    ]


    let scrollParameter = 400


    let main = new Main(constructFunction)


    let stepQueue = new StepQueue([1, 4, 5, 11, 15, 17, 19, 21, 26, 27, 29, 30, 38, 57, 59, 61, 63, 65, 67, 73, 82, 90])

    let learnMode = new LearnMode(main, stepQueue, learnMassages, scrollParameter)
    learnMode.mainSequence()
} else {


    let main = new Main(constructFunction)

    let stepQueue = new StepQueue([[1, 4, 5, 11, 15, 17, 19, 21, 26, 27, 29, 30, 38, 57, 59, 61, 63, 65, 67, 73, 82, 90]])

    let controlMode = new ControlMode(main, stepQueue)
    controlMode.mainSequence()
    controlMode.errorMassage()
}