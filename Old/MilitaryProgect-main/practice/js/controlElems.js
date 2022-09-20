class ControlElem {
    constructor(id, styles, parentBlock) {
        this.id = id
        this.styles = styles
        this.initElem()
    }

    initElem() {
        $('.img-body').append(`<div class="controlElem" id=${this.id}></div>`)
        $(`#${this.id}`).css(this.styles)
    }

}