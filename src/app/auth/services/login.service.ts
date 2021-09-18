import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "src/app/core/models/user";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  loggedIn = new BehaviorSubject<boolean>(false);

  userLogin = new BehaviorSubject<string>("");

  constructor(private router: Router) {}

  login(user: User): void {
    this.loggedIn.next(true);
    this.userLogin.next(user.login);
    localStorage.setItem("user", JSON.stringify(user));
    this.router.navigate(["/"]);
  }

  logout(): void {
    this.loggedIn.next(false);
    this.userLogin.next("");
    localStorage.clear();
    this.router.navigate(["/"]);
  }

  isLoggedIn(): Observable<boolean> {
    this.loggedIn.next(Boolean(localStorage.getItem("user")));
    return this.loggedIn.asObservable();
  }

  getUserName(): Observable<string> {
    return this.userLogin.asObservable();
  }
}
