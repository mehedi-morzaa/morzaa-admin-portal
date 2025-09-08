import { Component } from '@angular/core';
import { BreadcrumbService } from '../service/breadcrumb.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule,RouterModule,BreadcrumbModule],
  template: `<p-breadcrumb [model]="breadcrumbService.breadcrumbItems" [home]="breadcrumbService.breadcrumbHome"></p-breadcrumb>`,
  styles: ``
})
export class Breadcrumb {
  constructor(public breadcrumbService: BreadcrumbService){}
}
