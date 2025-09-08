import { Crud } from '@/pages/crud/crud';
import { InputDemo } from '@/pages/uikit/inputdemo';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '', component: InputDemo, data: { breadcrumb: 'Inventory Input Demo' }},
    {path: 'non/production', component: Crud, data: { breadcrumb: 'Inventory Crud' }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
