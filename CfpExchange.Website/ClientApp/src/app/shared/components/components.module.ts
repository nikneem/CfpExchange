import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CfpHorizontalTileComponent } from './cfp-horizontal-tile/cfp-horizontal-tile.component';
import { CfpVerticalTileComponent } from './cfp-vertical-tile/cfp-vertical-tile.component';
import { CfpSmallTileComponent } from './cfp-small-tile/cfp-small-tile.component';

@NgModule({
    declarations: [
        CfpHorizontalTileComponent,
        CfpVerticalTileComponent,
        CfpSmallTileComponent
    ],
    imports: [CommonModule]
})
export class ComponentsModule {}
