import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';

import { HeaderPage } from './header.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../tabs/tabs.module').then(m => m.TabsPageModule),
    component: TabsPage
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderPageRoutingModule {}
