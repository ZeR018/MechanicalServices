class Elem {
    constructor(id, img, state, styles) {
        this.id = id
        this.img = img
        this.state = state
        this.styles = styles
        this.initElem()
    }

    initElem() {
        $('.img-body').append(`<img class="elem" id=${this.id} src="">`)
        $(`#${this.id}`).css(this.styles)
        this.setState(this.state)
    }


    setState(state) {
        this.state = state
        $(`#${this.id}`).attr("src", this.img[this.state])
    }

}

class Anvil {
    constructor(id, img, rotate, state, styles) {
        this.id = id
        this.img = img
        this.rotate = rotate
        this.state = state
        this.styles = styles
        this.initElem()
    }

    initElem() {
        $('.img-body').append(`<img class="elem" id=${this.id} src=${this.img}>`)
        $(`#${this.id}`).css(this.styles)
        this.setState(this.state)
    }


    setState(state) {
        this.state = state
        $(`#${this.id}`).css('transform', `rotate(${this.rotate[state]}deg)`)
    }
}