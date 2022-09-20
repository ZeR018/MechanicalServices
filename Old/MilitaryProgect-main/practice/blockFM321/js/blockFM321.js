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

    }

    async controlElement2Click() {

    }

    async controlElement3Click() {

    }

    async controlElement4Click() {

    }

    async controlElement5Click() {
        this.tumblers.get('tumbler0').setState("1")

    }


    async controlElement6Click() {
        this.tumblers.get('tumbler0').setState("0")
    }

    async controlElement7Click() {
        this.tumblers.get('tumbler1').setState("1")
    }

    async controlElement8Click() {
        this.tumblers.get('tumbler1').setState("0")
    }

    async controlElement9Click() {

    }

    async controlElement10Click() {

    }

    async controlElement11Click() {

    }





}