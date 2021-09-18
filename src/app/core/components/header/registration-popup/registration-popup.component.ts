import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { LoginService } from "src/app/auth/services/login.service";
import { User } from "src/app/core/models/user";

@Component({
  selector: "app-registration-popup",
  templateUrl: "./registration-popup.component.html",
  styleUrls: ["./registration-popup.component.scss"],
})
export class RegistrationPopupComponent implements OnInit {
  loginInvalid: boolean = false;

  form!: FormGroup;

  user!: User;

  constructor(
    public dialogRef: MatDialogRef<RegistrationPopupComponent>,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl("", [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  register(): void {
    this.user = {
      login: this.form.value.login,
      password: this.form.value.password,
    };
    this.loginService.login(this.user);
    this.dialogRef.close();
  }
}
