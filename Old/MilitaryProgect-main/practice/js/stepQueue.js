class StepQueue {
    constructor(stepQueue) {
        this.currentStep = 0
        this.queue = stepQueue
    }
    getCurrentQueueElem() {
        return this.currentStep < this.queue.length ? this.queue[this.currentStep] : -1
    }

    getQueue() {
        return this.queue
    }

    nextStep() {
        ++this.currentStep
    }
}