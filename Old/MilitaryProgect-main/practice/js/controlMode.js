class ControlMode {
    constructor(main, stepQueue) {
        this.main = main
        this.stepQueue = stepQueue
        this.popup = new Popup()
    }

    async mainSequence() {
        while (this.stepQueue.getCurrentQueueElem() != -1) {
            let currentQueueElem = this.stepQueue.getCurrentQueueElem()
            if (currentQueueElem instanceof Array) {
                await this.handlingListOfControlElemNum(currentQueueElem)
            }
            else {
                await this.handlingControlElemNum(currentQueueElem)
            }
            this.stepQueue.nextStep()
        }

        this.popup.setText("Задание выполнено успешно!")
        this.popup.activate(500)
    }

    handlingControlElemNum(currentQueueElem) {
        return new Promise(resolve => {
            $(`#controlElement${currentQueueElem}`).one('click', () => {
                let controlElemClick = eval(`this.main.controlElement${currentQueueElem}Click.bind(this.main)`)
                controlElemClick()
                resolve()
            })
        })
    }

    handlingListOfControlElemNum(currentQueueElem) {
        return new Promise(resolve => {
            let clickCount = 0
            for (let numberOfControlElem of currentQueueElem) {
                $(`#controlElement${numberOfControlElem}`).one('click', (event) => {
                    let controlElemClick = eval(`this.main.controlElement${numberOfControlElem}Click.bind(this.main)`)
                    controlElemClick()
                    ++clickCount
                    if (clickCount === currentQueueElem.length) {
                        resolve()
                    }
                })
            }
        })
    }

    errorMassage() {
        $('.controlElem').on('click', (event) => {
            let currentQueueElem = this.stepQueue.getCurrentQueueElem()
            if (currentQueueElem instanceof Array) {
                let num = Number(event.target.id.replace(/\D/g, ''))
                if (!currentQueueElem.includes(num)) {
                    this.popup.setText('Задание не выполнено!')
                    this.popup.activate(500)
                }
            }
            else {
                if (event.target.id != `controlElement${currentQueueElem}`) {
                    this.popup.setText('Задание не выполнено!')
                    this.popup.activate(500)
                }
            }
        })
    }

}