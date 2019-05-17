export class BlocPerf {    
    type = "blocPerf"
    name : string
    performanceGoal : number
    currentPerf : number
    lock = false

    get date(): Date{
        var today = new Date();
        return today
    }

    get result():number {
        return Math.round(this.currentPerf * 100 / this.performanceGoal)
    }
}