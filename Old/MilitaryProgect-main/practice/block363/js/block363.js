class Main {
    constructor(constructFunction) {
        this.lamps = new Map()
        this.tumblers = new Map()
        this.buttons = new Map()
        this.anvils = new Map()
        this.controlElements = new Map()
        constructFunction.call(this)
        this.voltage = "on"
        this.obj = {

            "tumbler0": {
                "0": () => {
                    this.voltage = "off"
                    this.lamps.get('lamp3').setState("0")
                    this.lamps.get('lamp2').setState("0")

                },

                "1": () => {
                    if (this.voltage === "off") {
                        this.voltage = "on"
                        this.lamps.get('lamp3').setState("1")
                        setTimeout(() => {
                            this.lamps.get('lamp3').setState("0")
                            this.lamps.get('lamp2').setState("1")
                        }, 500)
                    }
                }
            },

            "anvil0": {
                "0": () => {

                },

                "1": () => {

                },

                "2": () => {


                },

                "3": () => {

                },

                "4": () => {


                }
            }



        }
    }


    async controlElement0Click() {
        this.tumblers.get('tumbler0').setState("1")
        this.obj["tumbler0"]["1"]()
    }

    async controlElement1Click() {
        this.tumblers.get('tumbler0').setState("0")
        this.obj["tumbler0"]["0"]()
    }

    async controlElement2Click() {
        this.anvils.get('anvil0').setState("0")
    }

    async controlElement3Click() {
        this.anvils.get('anvil0').setState("1")
    }

    async controlElement4Click() {
        this.anvils.get('anvil0').setState("2")
    }

    async controlElement5Click() {
        this.anvils.get('anvil0').setState("3")
    }


    async controlElement6Click() {
        this.anvils.get('anvil0').setState("4")
    }







}