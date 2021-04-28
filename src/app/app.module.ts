import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { TableComponent } from './table/table.component';
import { FilterNameForTable } from './filterNameForTable.pipe';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { OpComponent } from './op/op.component';
 
const routers: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'table2',
    component: LoginComponent
  },
  {
    path: 'table',
    component: OpComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    TableComponent,
    FilterNameForTable,
    LoginComponent,
    OpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
