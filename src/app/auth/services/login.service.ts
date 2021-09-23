import { HttpClient } from "@angular/common/http";
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

  token!: string;

  api: string = "http://localhost:3004";

  constructor(private router: Router, private http: HttpClient) {}

  getToken(user: User) {
    return this.http.post<string>(`${this.api}/users/register`, user);
  }

  login(user: User): void {
    this.loggedIn.next(true);
    this.userLogin.next(user.login);
    this.getToken(user).subscribe((response) => {
      const obj = JSON.parse(JSON.stringify(response));
      user.token = obj.token;
      localStorage.setItem("user", JSON.stringify(user));
      this.router.navigate(["/"]);
    });
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
