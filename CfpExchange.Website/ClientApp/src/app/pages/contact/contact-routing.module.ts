import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultPageTemplateComponent } from 'src/app/templates/default-template/default-page-template/default-page-template.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
    {
        path: 'contact',
        component: DefaultPageTemplateComponent,
        children: [{ path: '', component: ContactPageComponent }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule {}
