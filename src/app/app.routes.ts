import { Routes } from "@angular/router";
import { LoginPageComponent } from "@/features/auth/presentation/pages";
import { MainPageComponent } from "@/features/home/presentation/pages";
import { ClientPageComponent } from "./features/client/presentation/pages/client-page/client-page.component";

export const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "login", component: LoginPageComponent },
  { path: "clientes", component: ClientPageComponent },
];
