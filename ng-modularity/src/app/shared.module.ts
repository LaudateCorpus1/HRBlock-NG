import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HighlightDirective } from "./directives/highlight.directive";
import { DecimalFractionPipe } from "./pipes/decimalfraction.pipe";


@NgModule({
    declarations: [DecimalFractionPipe, HighlightDirective],
    imports: [CommonModule, FormsModule],
    exports: [CommonModule, FormsModule, DecimalFractionPipe, HighlightDirective]
})
export class SharedModule { }