//IS -A  inheritance:

class Account {
    protected myvar: string = "Account class"
    
    constructor(public id: string, public minbalance: number) {
        console.log('Account')
    }
    protected getBank(): string {
        return 'MyBank'
    }
}
class SavingsAccount extends Account {
    constructor(id: string = "A001", minbalance: number = 0) {
        super(id, minbalance); //call base class constructor
        console.log("Savings Account" + this.myvar)
    }
    public displayBankDetails(): string {
        return this.getBank();
    }
    public displayAccountDetails(): string {
        return `Account details ${this.id} ${this.minbalance}`
    }
}

let sb = new SavingsAccount();
//console.log(sb.myvar);
console.log(sb.displayBankDetails());
//console.log(sb.getBank())
console.log(sb.displayAccountDetails());
