import { Component } from "@angular/core";

@Component({
  selector: "app-header-cart",
  templateUrl: "./header-cart.component.html",
  styleUrls: ["./header-cart.component.scss"],
})
export class HeaderCartComponent {
  isPressed: boolean = false;

  toggle(): void {
    this.isPressed = !this.isPressed;
  }
}
