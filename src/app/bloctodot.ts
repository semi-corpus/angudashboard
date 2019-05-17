export class BlocToDot {
    type = "blocToDot"
    name : string
    duration : number
    lock = false
    position : number

    get date(): Date{
        var today = new Date();
        return today
    }
}