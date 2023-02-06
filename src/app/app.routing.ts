// importar los modulos del router de angular

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"


// importar componentes a los cuales les quiero hacer una pagina exclusiva

import { IndexComponent } from "./components/index/index.component";
import { ProductsComponent } from "./components/products/products.component";
import { ContactComponent } from "./components/contact/contact.component";
import { AboutComponent } from "./components/about/about.component";
import { UbicationComponent } from "./components/ubication/ubication.component";
import { ErrorComponent } from "./components/error/error.component";
import { LogInComponent } from "./components/log-in/log-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";


// array de rutas

const appRoutes: Routes = [
    { path: '', pathMatch:'full', redirectTo:'home' },
    { path: 'products', component: ProductsComponent },
    { path: 'ubication', component: UbicationComponent },
    { path: 'about', component: AboutComponent },
    { path: 'home', component: IndexComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'signIn', component: LogInComponent },
    { path: 'signUp', component: SignUpComponent },
    { path: '**', component: ErrorComponent}
];

// exportar el modulo de rutas 

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
