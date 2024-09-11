import { Routes } from '@angular/router';
import { HomepgComponent } from './homepg/homepg.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

export const routes: Routes = [
    { path: '', component: HomepgComponent },
    { path: 'country/:alpha3Code', component: CountryDetailsComponent } 
];
