import { Routes } from "@angular/router";
import { LoginPageComponent } from "@/features/auth/presentation/pages";
import { MainPageComponent } from "@/features/home/presentation/pages";

export const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "login", component: LoginPageComponent },
];
