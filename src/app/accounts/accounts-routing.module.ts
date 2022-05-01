import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorporateRequirementsComponent } from '../corporate-requirements/corporate-requirements.component';
import { GiftCardComponent } from '../gift-card/gift-card.component';
import { AccountsComponent } from './accounts.component';

const routes: Routes = [
  {
    path: 'accounts',
    component: AccountsComponent,
    children: [
        {
          path: 'gift',
          component: GiftCardComponent
        },
        {
          path: 'corporate',
          component: CorporateRequirementsComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
