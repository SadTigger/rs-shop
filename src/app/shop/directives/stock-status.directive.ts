import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appStockStatus]",
})
export class StockStatusDirective implements OnInit {
  @Input() availableAmount!: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.availableAmount < 5) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        "filter",
        "invert(38%) sepia(60%) saturate(839%) hue-rotate(315deg) brightness(104%) contrast(91%)"
      );
    } else if (this.availableAmount < 19) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        "filter",
        "invert(88%) sepia(88%) saturate(1495%) hue-rotate(10deg) brightness(108%) contrast(102%)"
      );
    } else {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        "filter",
        "invert(47%) sepia(98%) saturate(356%) hue-rotate(93deg) brightness(98%) contrast(87%)"
      );
    }
  }
}
