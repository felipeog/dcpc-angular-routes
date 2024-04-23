import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { CommonModule } from '@angular/common';
import { Module1RoutingModule } from './module2-routing.module';
import { Module2Component } from './module2/module2.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, Module1RoutingModule],
  declarations: [Module2Component, Child1Component, Child2Component],
})
export class Module2Module {}
