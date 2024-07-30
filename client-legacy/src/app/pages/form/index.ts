import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Form',
        loadComponent: async () => (await import('./form.component')).FormComponent,
    },
];
