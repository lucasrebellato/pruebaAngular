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


// array de rutas

const appRoutes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'ubication', component: UbicationComponent },
    { path: 'about', component: AboutComponent },
    { path: 'home', component: IndexComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: ErrorComponent}
];

// exportar el modulo de rutas 

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
