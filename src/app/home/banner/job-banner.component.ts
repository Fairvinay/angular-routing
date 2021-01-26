import { Component , Input, OnInit, ViewChild, ComponentFactoryResolver , OnDestroy } from '@angular/core'

import { PositionDirective } from '../../common/adcomp/position.directive'

import { PositionItem } from '../../common/adcomp/position-item'

import { JobPositionComponent } from '../advert/job-position.component'
import { PositionComponent } from 'src/app/common/adcomp/position.component';

@Component({
 
selector : 'app-job-banner',
 template: ` <div class="job-banner-example">
            <h3> Positings </h3>
            <ng-template positionHost> </ng-template>
            </div>
            `,
 styleUrls: [ './job-banner.component.css']
})
export class JobBannerComponent implements OnInit , OnDestroy { 

    @Input() jobs : PositionItem[];

    currentJobIndex = -1 ;
    @ViewChild(PositionDirective, {static :true }) positionHost: PositionDirective;
    interval : any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

    ngOnInit() {
        this.loadComponent();
        this.getPosition();
    }

    ngOnDestroy(){
        clearInterval(this.interval)
    }

    loadComponent () {
        this.currentJobIndex = (this.currentJobIndex +1) % this.jobs.length;
        const jobItem = this.jobs[this.currentJobIndex];

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(jobItem.component)

        const viewContainerRef = this.positionHost.viewContainerRef;

        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent<PositionComponent>(componentFactory);
  
        componentRef.instance.data = jobItem.data;

    }

    getPosition (){
      this.interval = setInterval( () => {
        this.loadComponent();
      }, 3000);
    }


}