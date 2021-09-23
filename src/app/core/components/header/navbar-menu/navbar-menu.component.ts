import { Component } from "@angular/core";

@Component({
  selector: "app-navbar-menu",
  templateUrl: "./navbar-menu.component.html",
  styleUrls: ["./navbar-menu.component.scss"],
})
export class NavbarMenuComponent {
  isActive: boolean = false;

  toggleActive(): void {
    this.isActive = !this.isActive;
  }
}
