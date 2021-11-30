import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnularformsComponent } from './anularforms/anularforms.component';
import { ParentComponent } from './parent/parent.component';
import { ReactformComponent } from './reactform/reactform.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'helper',
    loadChildren: () => import('./helper/helper.module').then(m => m.HelperModule)
  },
  {
    path:'angularforms',
    component:AnularformsComponent
  },
  {
    path:'reactform',
    component:ReactformComponent
  },
  {
    path:'parent',
    component:ParentComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
