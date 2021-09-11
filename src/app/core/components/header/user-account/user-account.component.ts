import { Component } from "@angular/core";

@Component({
  selector: "app-user-account",
  templateUrl: "./user-account.component.html",
  styleUrls: ["./user-account.component.scss"],
})
export class UserAccountComponent {
  isPressed: boolean = false;

  toggle(): void {
    this.isPressed = !this.isPressed;
  }
}
