class Popup {
    constructor() {
        this.popup = $('.popup')
        this.popupBody = $('.popup__body')
        this.popupSpan = $('.popup__massage span')
    }
    setText(text) {
        this.popupSpan.text(text)
    }

    async activate(ms) {
        await new Promise(r => {
            setTimeout(() => {
                this.popup.addClass('_active')
                r()
            }, ms)
        })

        await new Promise(r => {
            setTimeout(() => {
                this.popupBody.addClass('_active')
                r()
            }, 300)
        })

    }
}