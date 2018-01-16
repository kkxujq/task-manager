import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule} from './login/login.module';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MatSidenavModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
