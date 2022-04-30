import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { CategoryProductListingComponent } from './category-product-listing/category-product-listing.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { AccountsComponent } from './accounts/accounts.component';
import { GiftCardComponent } from './gift-card/gift-card.component';
import { CorporateRequirementsComponent } from './corporate-requirements/corporate-requirements.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    CategoryProductListingComponent,
    ProductPreviewComponent,
    AccountsComponent,
    GiftCardComponent,
    CorporateRequirementsComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
