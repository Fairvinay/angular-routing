import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { JobBannerComponent } from './job-banner.component';
import { JobBannerRoutes } from './job-banner.routes';

@NgModule({
  declarations: [JobBannerComponent],
  exports: [JobBannerComponent],
  imports: [
    RouterModule.forChild(JobBannerRoutes),
    CommonModule,
    ComponentsModule
  ]
})
export class JobBannerModule {}
