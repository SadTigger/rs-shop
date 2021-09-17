import { Component } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { LoginPopupComponent } from "../login-popup/login-popup.component";

@Component({
  selector: "app-user-account",
  templateUrl: "./user-account.component.html",
  styleUrls: ["./user-account.component.scss"],
})
export class UserAccountComponent {
  isPressed: boolean = false;

  isLoggedIn: boolean = false;

  constructor(private dialog: MatDialog) {}

  login(): void {
    const dialogConfig = new MatDialogConfig();
    if (this.isPressed) {
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      this.dialog.open(LoginPopupComponent);
      this.toggle();
    }
  }

  toggle(): void {
    this.isPressed = !this.isPressed;
  }
}
