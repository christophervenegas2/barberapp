import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [BottomNavigationComponent],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [BottomNavigationComponent]
})

export class SharedModule {}
