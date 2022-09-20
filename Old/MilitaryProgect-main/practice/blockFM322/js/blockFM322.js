
class Main {
    constructor(constructFunction) {
        this.lamps = new Map()
        this.tumblers = new Map()
        this.buttons = new Map()
        this.anvils = new Map()
        this.arrows = new Map()
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

            "anvil1":
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


                },

                "7": () => {

                },

                "8": () => {


                }
            }



        }
    }

    async controlElement0Click() {

    }

    async controlElement1Click() {
        this.anvils.get('anvil0').setState("0")
    }

    async controlElement2Click() {
        this.anvils.get('anvil0').setState("1")
    }

    async controlElement3Click() {
        this.anvils.get('anvil0').setState("2")
    }

    async controlElement4Click() {
        this.anvils.get('anvil0').setState("3")
    }

    async controlElement5Click() {
        this.anvils.get('anvil0').setState("4")
    }


    async controlElement6Click() {
        this.anvils.get('anvil0').setState("5")
    }

    async controlElement7Click() {
        this.anvils.get('anvil0').setState("6")
    }

    async controlElement8Click() {
        this.anvils.get('anvil0').setState("7")
    }

    async controlElement9Click() {
        this.anvils.get('anvil0').setState("8")
    }

    async controlElement10Click() {
        this.anvils.get('anvil0').setState("9")
    }

    async controlElement11Click() {
        this.anvils.get('anvil1').setState("0")
    }

    async controlElement12Click() {
        this.anvils.get('anvil1').setState("1")
    }

    async controlElement13Click() {
        this.anvils.get('anvil1').setState("2")
    }

    async controlElement14Click() {
        this.anvils.get('anvil1').setState("3")
    }

    async controlElement15Click() {
        this.anvils.get('anvil1').setState("3")
    }

    async controlElement16Click() {

    }

    async controlElement17Click() {
        this.anvils.get('anvil2').setState("0")
    }

    async controlElement18Click() {
        this.anvils.get('anvil2').setState("1")
    }

    async controlElement19Click() {
        this.anvils.get('anvil2').setState("2")
    }



}