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
    for (let i = 0; i < coordsInds.length; i++) {
        this.smallLamps.set(`ind${i}`, new Elem(`ind${i}`, {
            "0": indsImage(i)
        }, "0", {
            "top": `${coordsInds[i][0]}px`,
            "left": `${coordsInds[i][1]}px`,
            "max-width": `${coordsInds[i][2]}px`
        }))
    }
    for (let i = 0; i < coordsTumblers.length; i++) {
        this.tumblers.set(`tumbler${i}`, new Elem(`tumbler${i}`, setTumblersKind(i),
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

    $(`#tumbler0`).css({
        "transform": "rotate(90deg)"
    })
}



let mode = localStorage.getItem("mode");


if (mode === "learn") {

    let learnMassages = [
        'переключатель ВКЛ-ВЫКЛ-ДИСТ – в положение ВЫКЛ',
        'тумблер ВКЛ ПИТ СВЯЗИ – в положение МЕСТН',
        'тумблер РК – в положение ВКЛ',
        'кнопки ВКЛЮЧИТЬ 5П43 (1,2,3,4) – в положение ВЫКЛ',
        'кнопки ВКЛЮЧИТЬ 5П43 (1,2,3,4) – в положение ВЫКЛ',
        'кнопки ВКЛЮЧИТЬ 5П43 (1,2,3,4) – в положение ВЫКЛ',
        'кнопки ВКЛЮЧИТЬ 5П43 (1,2,3,4) – в положение ВЫКЛ',
        'тумблер Σ5П43 – в положение ВЫКЛ',
        'переключатель КОНТРОЛЬ ЯЧЕЕК (ВЫКЛ-У4…У21) – в положение ВЫКЛ',
        'переключатель ТИП 5В55 – в положение ВЫКЛ',
        'переключатель ГОТОВА-УГЛЫ ВВЕДЕНЫ – в положение ВЫКЛ',
        'тумблер ФМ ИСПР – в положение ВЫКЛ',
        'тумблер ФР383 ИСПР – в положение ВЫКЛ',
        'тумблер ДАТЧ ПУ ИСПР – в положение ВКЛ',
        'тумблер ФБ342А ИСПР – в положение ВКЛ',
        'тумблер ТПК ВЕРТ – в положение ВКЛ',
        'тумблер ТПК ГОР – в положение ВЫКЛ',
        'тумблер ГОТОВА – в положение ВЫКЛ',
        'тумблер НАЛИЧИЕ ПУ – в положение ВКЛ',
        'тумблер ГОТОВН ДИСТ ВКЛ ПУ – в положение ВКЛ',
        'тумблер НАКЛОН ≥50 – в положение ВЫКЛ',
        'тумблер ФБ341А ВКЛ – в положение ВЫКЛ',
        'тумблер ВКЛ ФБ342А – в положение ВЫКЛ',
        'тумблер БР-ТР – в положение ТР',
        'тумблер ВКЛ ИНД – в положение ВКЛ',

    ]


    let scrollParameter = 400


    let main = new Main(constructFunction)


    let stepQueue = new StepQueue([1, 5, 23, 25, 26, 27, 28, 30, 32, 37, 41, 47, 49, 50, 52, 54, 57, 61, 62, 64, 73, 67, 69, 71, 74])

    let learnMode = new LearnMode(main, stepQueue, learnMassages, scrollParameter)
    learnMode.mainSequence()
} else {


    let main = new Main(constructFunction)

    let stepQueue = new StepQueue([[1, 5, 23, 25, 26, 27, 28, 30, 32, 37, 41, 47, 49, 50, 52, 54, 57, 61, 62, 64, 73, 67, 69, 71, 74]])

    let controlMode = new ControlMode(main, stepQueue)
    controlMode.mainSequence()
    controlMode.errorMassage()
}