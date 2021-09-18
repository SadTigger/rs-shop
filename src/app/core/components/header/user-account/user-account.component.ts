import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { LoginService } from "src/app/auth/services/login.service";
import { User } from "src/app/core/models/user";
import { LoginPopupComponent } from "../login-popup/login-popup.component";

@Component({
  selector: "app-user-account",
  templateUrl: "./user-account.component.html",
  styleUrls: ["./user-account.component.scss"],
})
export class UserAccountComponent implements OnInit {
  isPressed: boolean = false;

  isLoggedIn$!: Observable<boolean>;

  username$!: Observable<string>;

  username!: string;

  user!: User;

  constructor(private dialog: MatDialog, private loginService: LoginService) {}

  ngOnInit() {
    this.username$ = this.loginService.getUserName();
    // this.loginService.getUserName().subscribe(name => this.username = name);
    this.isLoggedIn$ = this.loginService.isLoggedIn();
  }

  login(): void {
    const dialogConfig = new MatDialogConfig();
    if (this.isPressed) {
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      this.dialog.open(LoginPopupComponent);
      this.toggle();
    }
  }

  logout(): void {
    this.loginService.logout();
  }

  toggle(): void {
    this.isPressed = !this.isPressed;
  }
}
