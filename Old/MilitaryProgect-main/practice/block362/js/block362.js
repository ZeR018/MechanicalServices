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
        this.tumblers.get('tumbler0').setState("1")
        this.obj["tumbler0"]["1"]()
    }

    async controlElement2Click() {
        this.tumblers.get('tumbler0').setState("0")
        this.obj["tumbler0"]["0"]()
    }

    async controlElement3Click() {
        this.anvils.get('anvil0').setState("0")
    }

    async controlElement4Click() {
        this.anvils.get('anvil0').setState("0")
    }

    async controlElement5Click() {
        this.anvils.get('anvil0').setState("1")
    }


    async controlElement6Click() {
        this.anvils.get('anvil0').setState("2")
    }

    async controlElement7Click() {
        this.anvils.get('anvil0').setState("3")
    }

    async controlElement8Click() {
        this.anvils.get('anvil0').setState("4")
    }

    async controlElement9Click() {
        this.anvils.get('anvil0').setState("5")
    }

    async controlElement10Click() {
        this.anvils.get('anvil0').setState("6")

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
        this.anvils.get('anvil1').setState("4")
    }

    async controlElement16Click() {
        this.anvils.get('anvil1').setState("5")
    }

    async controlElement17Click() {
        this.anvils.get('anvil1').setState("6")
    }

    async controlElement18Click() {
        this.anvils.get('anvil1').setState("7")
    }

    async controlElement19Click() {
        this.anvils.get('anvil1').setState("8")
    }


}