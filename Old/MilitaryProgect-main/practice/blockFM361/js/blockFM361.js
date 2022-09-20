class Main {
    constructor(constructFunction) {
        this.lamps = new Map()
        this.tumblers = new Map()
        this.buttons = new Map()
        this.anvils = new Map()
        this.controlElements = new Map()
        constructFunction.call(this)
        this.obj = {

            "tumbler0":
            {
                "0": () => {


                },

                "1": () => {

                }
            },

            "anvil0":
            {
                "0": () => {

                },

                "1": () => {

                },

                "2": () => {


                },

                "3": () => {

                },

                "4": () => {


                },

                "5": () => {

                },

                "6": () => {


                }
            },


        }
    }



    async controlElement0Click() {
        this.tumblers.get('tumbler0').setState("0")
        $('#tumbler0').css({ 'transform': 'rotate(0deg)' })
    }

    async controlElement1Click() {
        this.tumblers.get('tumbler0').setState("1")
        $('#tumbler0').css({ 'transform': 'rotate(180deg)' })
    }

    async controlElement2Click() {

    }

    async controlElement3Click() {
        this.anvils.get('anvil0').setState("0")
    }

    async controlElement4Click() {
        this.anvils.get('anvil0').setState("1")
    }

    async controlElement5Click() {
        this.anvils.get('anvil0').setState("2")
    }


    async controlElement6Click() {
        this.anvils.get('anvil0').setState("3")
    }

    async controlElement7Click() {
        this.anvils.get('anvil0').setState("4")
    }

    async controlElement8Click() {
        this.anvils.get('anvil0').setState("5")
    }

    async controlElement9Click() {
        this.tumblers.get('tumbler1').setState("1")
    }

    async controlElement10Click() {
        this.tumblers.get('tumbler1').setState("0")
    }

    async controlElement11Click() {
        this.tumblers.get('tumbler2').setState("0")
    }

    async controlElement12Click() {
        this.tumblers.get('tumbler2').setState("1")
    }

    async controlElement13Click() {
        this.tumblers.get('tumbler3').setState("1")
    }

    async controlElement14Click() {
        this.tumblers.get('tumbler3').setState("0")
    }

    async controlElement15Click() {

    }

    async controlElement16Click() {
        this.tumblers.get('tumbler0').setState("2")
        $('#tumbler0').css({ 'transform': 'rotate(90deg)' })
    }



}