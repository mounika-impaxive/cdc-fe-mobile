import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'add-qsn',
    loadChildren: () => import('./questions/add-qsn/add-qsn.module').then( m => m.AddQsnPageModule)
  },
  {
    path: 'manage-qsn',
    loadChildren: () => import('./questions/manage-qsn/manage-qsn.module').then( m => m.ManageQsnPageModule)
  },
  {
    path: 'trp-qsn',
    loadChildren: () => import('./questions/trp-qsn/trp-qsn.module').then( m => m.TrpQsnPageModule)
  },
  {
    path: 'children',
    loadChildren: () => import('./users/children/children.module').then( m => m.ChildrenPageModule)
  },
  {
    path: 'therapists',
    loadChildren: () => import('./users/therapists/therapists.module').then( m => m.TherapistsPageModule)
  },
  {
    path: 'goals',
    loadChildren: () => import('./goals/goals.module').then( m => m.GoalsPageModule)
  },
  {
    path: 'update-goals',
    loadChildren: () => import('./update-goals/update-goals.module').then( m => m.UpdateGoalsPageModule)
  },
  {
    path: 'therapy',
    loadChildren: () => import('./therapies/therapy/therapy.module').then( m => m.TherapyPageModule)
  },
  {
    path: 'manage-children',
    loadChildren: () => import('./manage-users/manage-children/manage-children.module').then( m => m.ManageChildrenPageModule)
  },
  {
    path: 'manage-therapists',
    loadChildren: () => import('./manage-users/manage-therapists/manage-therapists.module').then( m => m.ManageTherapistsPageModule)
  },
  {
    path: 'manage-therapy',
    loadChildren: () => import('./therapies/manage-therapy/manage-therapy.module').then( m => m.ManageTherapyPageModule)
  },
  {
    path: 'progress-report',
    loadChildren: () => import('./progress-report/progress-report.module').then( m => m.ProgressReportPageModule)
  },
  {
    path: 'update-children',
    loadChildren: () => import('./users/update-children/update-children.module').then( m => m.UpdateChildrenPageModule)
  },
  {
    path: 'update-therapists/:id',
    loadChildren: () => import('./users/update-therapists/update-therapists.module').then( m => m.UpdateTherapistsPageModule)
  },
  {
    path: 'update-therapy/:id',
    loadChildren: () => import('./therapies/update-therapy/update-therapy.module').then( m => m.UpdateTherapyPageModule)
  },
  {
    path: 'manage-goals',
    loadChildren: () => import('./manage-goals/manage-goals.module').then( m => m.ManageGoalsPageModule)
  },
  {
    path: 'insights',
    loadChildren: () => import('./insights/insights.module').then( m => m.InsightsPageModule)
  },
  {
    path: 'therapist-view',
    loadChildren: () => import('./views/therapist-view/therapist-view.module').then( m => m.TherapistViewPageModule)
  },
  {
    path: 'parent-view',
    loadChildren: () => import('./views/parent-view/parent-view.module').then( m => m.ParentViewPageModule)
  },
  {
    path: 'therapist-insight',
    loadChildren: () => import('./views/therapist-insight/therapist-insight.module').then( m => m.TherapistInsightPageModule)
  },
  {
    path: 'parent-insight',
    loadChildren: () => import('./views/parent-insight/parent-insight.module').then( m => m.ParentInsightPageModule)
  },
  {
    path: 'sidebar',
    loadChildren: () => import('./sidebar/sidebar.module').then( m => m.SidebarPageModule)
  },
  {
    path: 'update-goal',
    loadChildren: () => import('./update-goal/update-goal.module').then( m => m.UpdateGoalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
