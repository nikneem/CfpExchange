import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultPageTemplateComponent } from './default-page-template/default-page-template.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [DefaultPageTemplateComponent],
    imports: [CommonModule, RouterModule, SharedModule, MaterialModule]
})
export class DefaultPageTemplateModule {}
