import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookListComponent} from "./library/book-list/book-list.component";
import {CardListComponent} from "./library/card-list/card-list.component";
import {CardCreateComponent} from "./library/card-create/card-create.component";
import {BookReturnComponent} from "./library/book-return/book-return.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'book-list'},
  {path: 'book-list', component: BookListComponent},
  {path: 'book-return/:id', component: BookReturnComponent},
  {path: 'card-list', component: CardListComponent},
  {path: 'card-create/:id', component: CardCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
