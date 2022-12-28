import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppInitializerDataService } from './app-services/app-initializer-data.service';

import { AppComponent } from './app.component';
import { DialogNotAuthorizedComponent } from './dialog-not-authorized/dialog-not-authorized.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AuthTokenInterceptor } from './http-interceptor/auth-token.interceptor';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AngularMaterialModule } from './shared/AngularMaterial.module';
import { SharedModule } from './shared/shared.module';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export function initApp(appInitializerDataService: AppInitializerDataService) {
  return function(): Promise<any> {
    return appInitializerDataService.AppConfigartionData();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent, 
    HeaderComponent,
    FooterComponent,
    DialogNotAuthorizedComponent
       
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,    
    HttpClientModule,
    AngularMaterialModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [AppInitializerDataService],
      multi: true
    },
     /* {
       provide: LocationStrategy, useClass: HashLocationStrategy
     } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
