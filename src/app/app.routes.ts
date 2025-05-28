import { Routes } from '@angular/router';
  
import { IndexComponent } from './useridentity/index/index.component';
import { ViewComponent } from './useridentity/view/view.component';
import { CreateComponent } from './useridentity/create/create.component';
import { EditComponent } from './useridentity/edit/edit.component';
  
export const routes: Routes = [
      { path: 'useridentity', redirectTo: 'useridentity/index', pathMatch: 'full'},
      { path: 'useridentity/index', component: IndexComponent },
      { path: 'useridentity/:userId/view', component: ViewComponent },
      { path: 'useridentity/create', component: CreateComponent },
      { path: 'useridentity/:userId/edit', component: EditComponent },
      { path: '', redirectTo: 'useridentity/index', pathMatch: 'full'},
  ];