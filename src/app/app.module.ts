import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { NavBottomComponent } from './nav-bottom/nav-bottom.component';
import { SharedModule } from './shared/shared.module';
import { BottomNavigationComponent } from './shared/components/bottom-navigation/bottom-navigation.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, SharedModule],
  declarations: [AppComponent, AuthComponent, HomeComponent, NavBottomComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [BottomNavigationComponent]
})
export class AppModule {}
