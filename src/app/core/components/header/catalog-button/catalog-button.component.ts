import { Component } from "@angular/core";

@Component({
  selector: "app-catalog-button",
  templateUrl: "./catalog-button.component.html",
  styleUrls: ["./catalog-button.component.scss"],
})
export class CatalogButtonComponent {
  isPressed: boolean = false;

  text: string = "Каталог товаров";

  toggle(): void {
    this.isPressed = !this.isPressed;
  }
}
