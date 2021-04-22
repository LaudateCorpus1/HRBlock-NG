//abstract class 

interface Flyable {
    fly(whoisFlyling: string): string;
}

abstract class Bird implements Flyable {
    constructor() {
        console.log('Bird is initalized')
    }
    //abstract method
    protected abstract buildNest(whoBuildNest: string): string;
    //concrete method
    public saveBirds(): string {
        return 'Save Birds from Hunter'
    }
    fly(whoisFlyling: string): string {
        return whoisFlyling;
    }
}
class Crow extends Bird {
    constructor() {
        super();
    }
    public buildNest(whoBuildNest: string): string {
        return whoBuildNest;
    }
    fly(whoisFlyling: string): string {
        return whoisFlyling;
    }

}
class Warbler extends Bird {
    constructor() {
        super();
    }
    public buildNest(whoBuildNest: string): string {
        return whoBuildNest;
    }
}

let bird = new Crow();
console.log(bird.saveBirds(), bird.buildNest('Crow'))
let bird1 = new Crow();
console.log(bird1.saveBirds(), bird1.buildNest('WarBler'))