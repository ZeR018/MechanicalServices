

class Main {
    constructor(constructFunction) {
        this.lamps = new Map()
        this.tumblers = new Map()
        this.buttons = new Map()
        this.controlElements = new Map()
        constructFunction.call(this)
        this.control = "dist"
        this.voltage = "off"
        this.dampers = "close"
        this.ventilation = "off"
        this.obj = {

            "tumbler0":
            {
                "0": () => {
                    this.control = "dist"
                    this.obj["tumbler1"]["0"]()
                },

                "1": () => {
                    this.control = "local"
                    if (this.tumblers.get("tumbler1").state === "1") {
                        this.obj["tumbler1"]["1"]()
                    }
                }

            },

            "tumbler1":
            {
                "0": () => {
                    this.lamps.get('lamp3').setState("0")
                    this.lamps.get('lamp5').setState("0")
                    this.lamps.get('lamp6').setState("0")
                    this.lamps.get('lamp7').setState("0")
                    this.lamps.get('lamp8').setState("0")
                    this.voltage = "off"
                    for (let key in this.obj) {
                        if (key != "tumbler1" && key != "tumbler0") {
                            this.obj[key]["0"]()
                        }
                    }
                    this.dampersOff()

                },

                "1": () => {
                    if (this.control === "local" && this.voltage === "off") {
                        this.lamps.get('lamp3').setState("1")
                        this.lamps.get('lamp5').setState("1")
                        this.lamps.get('lamp6').setState("1")
                        this.lamps.get('lamp7').setState("1")
                        this.lamps.get('lamp8').setState("1")
                        this.voltage = "on"
                        for (let key in this.obj) {
                            if (this.tumblers.get(key).state === "1" && key != "tumbler1" && key != "tumbler0") {
                                this.obj[key]["1"]()
                            }
                        }
                        if (this.dampers === "close") {
                            this.dampersClose()
                        }
                        else {
                            this.dampersOpen()
                        }
                    }

                },
            },

            "tumbler2":
            {
                "0": () => {
                    this.lamps.get('lamp13').setState("0")
                    this.lamps.get('lamp14').setState("0")
                    this.ventilation = "off"
                },

                "1": () => {
                    if (this.ventilation === "off" && this.voltage === "on") {
                        this.ventilation = "on"
                        this.lamps.get('lamp15').setState("1")
                        setTimeout(() => {
                            this.lamps.get('lamp13').setState("1")

                        }, 6000)
                        setTimeout(() => {
                            this.lamps.get('lamp14').setState("1")
                            this.lamps.get('lamp15').setState("0")
                        }, 8000)
                    }
                },
            },

            "tumbler3":
            {
                "0": () => {
                    this.lamps.get("lamp17").setState("0")
                },

                "1": () => {
                    if (this.voltage === "on") {
                        this.lamps.get("lamp17").setState("1")
                    }
                }
            },

            "tumbler5":
            {
                "0": () => {
                    this.lamps.get("lamp16").setState("0")
                    this.lamps.get("lamp18").setState("0")
                },

                "1": () => {
                    if (this.voltage === "on") {
                        this.lamps.get("lamp18").setState("1")
                        setTimeout(() => {
                            this.lamps.get('lamp16').setState("1")
                        }, 500)
                    }
                }
            },

            "tumbler6":
            {
                "0": () => {
                    this.lamps.get("lamp19").setState("0")
                    this.lamps.get("lamp20").setState("0")
                },

                "1": () => {
                    if (this.voltage === "on") {
                        this.lamps.get("lamp19").setState("1")
                        this.lamps.get("lamp20").setState("1")
                    }
                }
            }
        }



    }




    dampersClose() {
        if (this.voltage === "on") {
            this.lamps.get("lamp9").setState("1")
            this.lamps.get("lamp10").setState("1")
            this.lamps.get("lamp11").setState("0")
            this.lamps.get("lamp12").setState("0")
            this.dampers = "close"
        }
    }

    dampersOpen() {
        if (this.voltage === "on") {
            this.lamps.get("lamp9").setState("0")
            this.lamps.get("lamp10").setState("0")
            this.lamps.get("lamp11").setState("1")
            this.lamps.get("lamp12").setState("1")
            this.dampers = "open"
        }
    }

    dampersOff() {
        this.lamps.get("lamp9").setState("0")
        this.lamps.get("lamp10").setState("0")
        this.lamps.get("lamp11").setState("0")
        this.lamps.get("lamp12").setState("0")
    }




    async controlElement0Click() {
        this.obj["tumbler0"]["0"]()
        this.tumblers.get('tumbler0').setState("0")
    }

    async controlElement1Click() {
        this.obj["tumbler0"]["1"]()
        this.tumblers.get('tumbler0').setState("1")
    }

    async controlElement2Click() {
        this.tumblers.get('tumbler1').setState("1")
        this.obj["tumbler1"]["1"]()
    }

    async controlElement3Click() {
        this.tumblers.get('tumbler1').setState("0")
        this.obj["tumbler1"]["0"]()
    }

    async controlElement4Click() {
        await new Promise(resolve => {
            setTimeout(() => {
                this.dampersClose()
                resolve()
            }, 5000)
        })
    }

    async controlElement5Click() {
        await new Promise(resolve => {
            setTimeout(() => {
                this.dampersOpen()
                resolve()
            }, 5000)
        })
    }


    async controlElement6Click() {
        this.tumblers.get('tumbler2').setState("1")
        this.obj["tumbler2"]["1"]()
        await new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, 8000)
        })
    }

    async controlElement7Click() {
        this.tumblers.get('tumbler2').setState("0")
        this.obj["tumbler2"]["0"]()
    }

    async controlElement8Click() {
        this.tumblers.get('tumbler3').setState("1")
        this.obj["tumbler3"]["1"]()
    }

    async controlElement9Click() {
        this.tumblers.get('tumbler3').setState("0")
        this.obj["tumbler3"]["0"]()
    }

    async controlElement10Click() {
        this.tumblers.get('tumbler4').setState("1")
    }

    async controlElement11Click() {
        this.tumblers.get('tumbler4').setState("0")
    }

    async controlElement12Click() {
        this.tumblers.get('tumbler5').setState("1")
        this.obj["tumbler5"]["1"]()
    }

    async controlElement13Click() {
        this.tumblers.get('tumbler5').setState("0")
        this.obj["tumbler5"]["0"]()
    }

    async controlElement14Click() {
        this.tumblers.get('tumbler6').setState("1")
        this.obj["tumbler6"]["1"]()
    }

    async controlElement15Click() {
        this.tumblers.get('tumbler6').setState("0")
        this.obj["tumbler6"]["0"]()
    }

    async controlElement16Click() {
        this.tumblers.get('tumbler7').setState("1")
    }

    async controlElement17Click() {
        this.tumblers.get('tumbler7').setState("0")
    }

    // clickListener(){
    //     for(let i = 0; i < this.controlElements.size; ++i){
    //         let currentControlElem = $()
    //         currentControlElem.one('click', () => {

    //         })
    //     }
    // }





}

