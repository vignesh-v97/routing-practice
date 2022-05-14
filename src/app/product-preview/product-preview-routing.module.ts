import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPreviewEntryComponent } from './product-preview-entry.component';
import { ProductPreviewComponent } from './product-preview.component';

const routes: Routes = [
  {
    path: '',
    component: ProductPreviewComponent,
    children: [
      {
        path: 'popup',
        component: ProductPreviewEntryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductPreviewRoutingModule {}
