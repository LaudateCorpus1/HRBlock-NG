//private 

class AuthService {
    private password: string = "Abbb3333434"

    private generatePassword() {
        return '88822dwwewewe';
    }

    public getPass(): string {
        return this.generatePassword() + this.password
    }

}
let authService = new AuthService();
//console.log(authService.password);
//console.log(authService.generatePassword());
console.log(authService.getPass())