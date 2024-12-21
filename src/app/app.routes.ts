import { Routes } from '@angular/router';
import { gAuthGuard } from './shared/guard/gaurdauth/g-auth.guard';
import { gComponetGuard } from './shared/guard/G-componet/g-componet.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./core/layout/auth/auth.component').then((c) => c.AuthComponent),
    canActivate: [gAuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./core/pages/authPages/login/login.component').then(
            (c) => c.LoginComponent
          ),
        canActivate: [gAuthGuard],
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./core/pages/authPages/signup/signup.component').then(
            (c) => c.SignupComponent
          ),
        canActivate: [gAuthGuard],
      },
      {
        path: 'ForgetPassword',
        loadComponent: () =>
          import(
            './core/pages/authPages/forgetpassword/forgetpassword.component'
          ).then((c) => c.ForgetpasswordComponent),
        canActivate: [gAuthGuard],
      },
      {
        path: 'VerifyResetCode',
        loadComponent: () =>
          import('./core/pages/authPages/verifycode/verifycode.component').then(
            (c) => c.VerifycodeComponent
          ),
        canActivate: [gAuthGuard],
      },
      {
        path: 'RestPassword',
        loadComponent: () =>
          import(
            './core/pages/authPages/resetpassword/resetpassword.component'
          ).then((c) => c.ResetpasswordComponent),
        canActivate: [gAuthGuard],
      },
      {
        path: 'cahngePassword',
        loadComponent: () =>
          import(
            './core/pages/authPages/change-password/change-password.component'
          ).then((c) => c.ChangePasswordComponent),
        canActivate: [gAuthGuard],
      },
    ],
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./core/pages/home/home.component').then((c) => c.HomeComponent),
    canActivate: [gComponetGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./core/pages/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
        canActivate: [gComponetGuard],
      },
      {
        path: 'allexams',
        loadComponent: () =>
          import('./core/pages/exams/all-exams/all-exams.component').then(
            (c) => c.AllExamsComponent
          ),
        canActivate: [gComponetGuard],
      },
      {
        path: 'exams/:id',
        loadComponent: () =>
          import('./core/pages/exams/exams/exams.component').then(
            (c) => c.ExamsComponent
          ),
        canActivate: [gComponetGuard],
      },
    ],
  },
  {
    path: 'notfound',
    loadComponent: () =>
      import('./core/pages/notfound/notfound.component').then(
        (c) => c.NotfoundComponent
      ),
    canActivate: [gComponetGuard],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./core/pages/notfound/notfound.component').then(
        (c) => c.NotfoundComponent
      ),
  },
];
