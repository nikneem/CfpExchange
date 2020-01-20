import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DefaultPageTemplateComponent } from 'src/app/templates/default-template/default-page-template/default-page-template.component';
import { DefaultPageTemplateModule } from 'src/app/templates/default-template/default-template.module';

const routes: Routes = [
    {
        path: 'home',
        component: DefaultPageTemplateComponent,
        children: [{ path: '', component: HomePageComponent }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), DefaultPageTemplateModule],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
