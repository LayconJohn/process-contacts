export default class People {
    readonly name: string;
    private phone: string;

    constructor(
        name: string, 
        phone:string
    ){
        this.name = name;
        this.phone = phone;
    }

    public getPhone() {
        return this.phone;
    }

    public getName() {
        return this.name;
    }

    public udpatePhone(value: string) {
        if(value.length !== 13) throw new Error("Invalid format phone")
        this.phone = value
    }
}