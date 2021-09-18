import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { LoginService } from "src/app/auth/services/login.service";
import { User } from "src/app/core/models/user";
import { RegistrationPopupComponent } from "../registration-popup/registration-popup.component";

@Component({
  selector: "app-login-popup",
  templateUrl: "./login-popup.component.html",
  styleUrls: ["./login-popup.component.scss"],
})
export class LoginPopupComponent implements OnInit {
  form!: FormGroup;

  user!: User;

  loginInvalid = false;

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<RegistrationPopupComponent>,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl("", [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  login(): void {
    this.user = {
      login: this.form.value.login,
      password: this.form.value.password,
    };
    this.loginService.login(this.user);
    this.dialogRef.close();
  }

  registration(): void {
    this.dialogRef.close();
    this.dialog.open(RegistrationPopupComponent);
  }
}
