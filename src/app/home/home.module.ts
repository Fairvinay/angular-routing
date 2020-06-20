import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentsModule } from './../components/components.module';
import { HomeComponent } from './home.component';
/*import { UserComponent } from './user/user.component'; */
  import { UserModule } from './user/user.module';  
import { RouterModule } from '@angular/router';
@NgModule({ 
  imports: [CommonModule, ComponentsModule, RouterModule , UserModule ],
  declarations: [HomeComponent ],
  exports: [HomeComponent ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
