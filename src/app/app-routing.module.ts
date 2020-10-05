import { CreateProductComponent } from './products/create-product/create-product.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ListProductsComponent },
  { path: 'addnew', component: CreateProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
