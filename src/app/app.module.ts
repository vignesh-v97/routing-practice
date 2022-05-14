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
import { AccountsRoutingModule } from './accounts/accounts-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from '@angular/forms';
import { ProductPreviewEntryComponent } from './product-preview/product-preview-entry.component';
import { PopUpService } from './pop-up/pop-up.service';
import { ProductPreviewRoutingModule } from './product-preview/product-preview-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    CategoryProductListingComponent,
    ProductPreviewComponent,
    ProductPreviewEntryComponent,
    AccountsComponent,
    GiftCardComponent,
    CorporateRequirementsComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AccountsRoutingModule,
    BrowserAnimationsModule,
    ProductPreviewRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule
  ],
  bootstrap: [AppComponent],
  providers: [PopUpService]
})
export class AppModule { }
