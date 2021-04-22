//overriding / method defining

class Account {
    constructor() {
        console.log('account class')
    }
    protected getBalance(): number {
        return 100;
    }
}
class SavingsAccount extends Account {
    constructor() {
        super();
        console.log('account class')
    }
    //override
    public getBalance(): number {
        return 1000 + super.getBalance();
    }

}
let sb = new SavingsAccount();
console.log(sb.getBalance())