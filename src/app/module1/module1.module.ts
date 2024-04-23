import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { CommonModule } from '@angular/common';
import { Module1Component } from './module1/module1.component';
import { Module1RoutingModule } from './module1-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, Module1RoutingModule],
  declarations: [Module1Component, Child1Component, Child2Component],
})
export class Module1Module {}
