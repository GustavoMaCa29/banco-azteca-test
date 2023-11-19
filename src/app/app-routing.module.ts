import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NavBarComponent} from "./common/components/nav-bar/nav-bar.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: NavBarComponent,
        children: [{
          path: '',
          pathMatch: 'full',
          redirectTo: 'home'
        }, {
          path: 'home',
          loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
        },
        ]
      },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
