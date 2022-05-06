import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { CategoryProductListingComponent } from './category-product-listing/category-product-listing.component';
import { CategoryComponent } from './category/category.component';
import { CorporateRequirementsComponent } from './corporate-requirements/corporate-requirements.component';
import { GiftCardComponent } from './gift-card/gift-card.component';
import { HomeComponent } from './home/home.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categories',
    component: CategoryComponent
  },
  {
    path: 'categories/:id',
    component: CategoryProductListingComponent
  },
  {
    path: 'preview',
    component: ProductPreviewComponent
  },
  {
    path: 'accounts',
    component: AccountsComponent
  }
];

@NgModule({
  // imports: [RouterModule.forRoot((routes), { enableTracing: true })],
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
