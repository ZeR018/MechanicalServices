class LearnMode {
    constructor(main, stepQueue, learnMassages, scrollParameter) {
        this.main = main
        this.stepQueue = stepQueue
        this.scrollParameter = scrollParameter
        this.learnMassages = learnMassages
        this.popup = new Popup()
        for (let i = 0; i < this.stepQueue.getQueue().length; ++i) {
            $(`#controlElement${this.stepQueue.getQueue()[i]}`).
                append(`<div id="learnMassage${this.stepQueue.getQueue()[i]}" class="learnMassage">${this.learnMassages[i]}</div>`)
        }

        this.popup.setText("Обучение завершено успешно")


    }

    async mainSequence() {
        while (this.stepQueue.getCurrentQueueElem() != -1) {
            let numberOfControlElem = this.stepQueue.getCurrentQueueElem()
            let currentControlElem = $(`#controlElement${numberOfControlElem}`)
            let currentLearnMassage = $(`#learnMassage${numberOfControlElem}`)
            if (!this.isVisible(currentControlElem)) {
                let currentScrollTop = this.scrollWindow(currentControlElem, this.scrollParameter)
                $('body').animate({
                    scrollTop: currentScrollTop
                }, 1300, () => {
                    this.controlElemOn(currentControlElem, currentLearnMassage)
                })
            } else {
                this.controlElemOn(currentControlElem, currentLearnMassage)
            }



            await new Promise(resolve => {
                currentControlElem.one('click', (event) => {
                    this.controlElemOff(currentControlElem, currentLearnMassage)
                    let controlElemClick = eval(`this.main.controlElement${numberOfControlElem}Click.bind(this.main)`)
                    controlElemClick().then(() => setTimeout(() => resolve(), 1000))
                })
            }).then(() => this.stepQueue.nextStep())


        }

        this.popup.activate(0)

    }

    controlElemOn(currentControlElem, currentLearnMassage) {
        currentControlElem.addClass('_active')
        currentLearnMassage.addClass('_active')
    }

    controlElemOff(currentControlElem, currentLearnMassage) {
        currentControlElem.removeClass('_active')
        currentLearnMassage.removeClass('_active')
    }



    isVisible(element) {
        let top_of_element = element.offset().top;
        let bottom_of_element = element.offset().top + element.outerHeight();
        let bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        let top_of_screen = $(window).scrollTop();
        return ((bottom_of_screen > bottom_of_element) && (top_of_screen < top_of_element))
    }

    scrollWindow(currentControlElem, scrollParameter) {
        let currentScrollTop
        let offsetTop = currentControlElem.offset().top
        let innerHeight = currentControlElem.outerHeight()
        if (offsetTop - scrollParameter < 0) {
            currentScrollTop = 0
        } else if (offsetTop + innerHeight + scrollParameter > $(document).innerHeight()) {
            currentScrollTop = $(document).innerHeight() - $(window).innerHeight()
        } else {
            currentScrollTop = offsetTop - scrollParameter
        }
        return currentScrollTop
    }

}