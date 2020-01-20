import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [ContactPageComponent],
    imports: [CommonModule, ContactRoutingModule, SharedModule]
})
export class ContactModule {}
