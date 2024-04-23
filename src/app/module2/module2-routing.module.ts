import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Module2Component } from './module2/module2.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const child1Routes: Routes = [
  {
    path: '',
    component: Module2Component,
    children: [
      {
        path: 'child1',
        component: Child1Component,
      },

      {
        path: 'child2',
        component: Child2Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(child1Routes)],
  exports: [RouterModule],
})
export class Module1RoutingModule {}
