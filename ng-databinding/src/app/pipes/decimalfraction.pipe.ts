import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: 'decimalFraction'
})
export class DecimalFractionPipe implements PipeTransform {
    transform(value: number, digit: number = 2) {
        console.log('decimal fraction')
        //10.789445454  => 10.79
        return value.toFixed(digit)
    }
}