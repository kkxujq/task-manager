import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { MatToolbarModule, MatIconModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    HttpModule
  ],
  declarations: [
    HeaderComponent, 
    SidebarComponent,
    FooterComponent
  ],
  exports: [
     HeaderComponent,
     SidebarComponent,
     FooterComponent
  ]
})
export class CoreModule {  
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) throw new Error('模块已经存在，不能再次加载！');
  }
}
