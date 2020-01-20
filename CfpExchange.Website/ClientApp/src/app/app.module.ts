import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './pages/home/home.module';
import { ContactModule } from './pages/contact/contact.module';
import { CfpModule } from './pages/cfp/cfp.module';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/translations/', '.json');
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        HomeModule,
        ContactModule,
        CfpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
