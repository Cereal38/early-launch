import { Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { FormComponent } from './pages/form/form.component';

export const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    title: 'Admin',
  },
];
