import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CfpHorizontalTileComponent } from './cfp-horizontal-tile/cfp-horizontal-tile.component';
import { CfpVerticalTileComponent } from './cfp-vertical-tile/cfp-vertical-tile.component';
import { CfpSmallTileComponent } from './cfp-small-tile/cfp-small-tile.component';
import { MaterialModule } from '../material/material.module';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        CfpHorizontalTileComponent,
        CfpVerticalTileComponent,
        CfpSmallTileComponent,
        TopNavigationComponent
    ],
    imports: [CommonModule, RouterModule, MaterialModule, TranslateModule],
    exports: [
        CfpHorizontalTileComponent,
        CfpVerticalTileComponent,
        CfpSmallTileComponent,
        TopNavigationComponent
    ]
})
export class ComponentsModule {}
