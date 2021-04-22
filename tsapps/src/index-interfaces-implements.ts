interface Flyable {
    fly(whoisFlyling: string): string;
}

interface Landing {
    land(whoisLanding: string): string;
}

class Bird implements Flyable, Landing {
    fly(whoisFlyling: string): string {
        return whoisFlyling;
    }
    land(whoisLanding: string): string {
        return whoisLanding
    }
}
class Jet implements Flyable, Landing {
    fly(whoisFlyling: string): string {
        return whoisFlyling;
    }
    land(whoisLanding: string): string {
        return whoisLanding
    }
}
let bird = new Bird();
console.log(bird.fly('Bird is flying'))
console.log(bird.land('Bird is landing'))

let jet = new Jet();
console.log(jet.fly('Jet is flying'))
console.log(jet.land('Jet is landing'))