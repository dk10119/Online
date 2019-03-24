import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
},
{
    path: 'about',
    loadChildren: './about/about.module#AboutPageModule'
},
{
    path: 'mycv',
    loadChildren:
        './mycv/mycv.module#MycvPageModule'
},
{
    path: 'project',
    loadChildren: './project/project.module#ProjectPageModule'
},
{
    path: 'extra',
    loadChildren: './extra/extra.module#ExtraPageModule'
},
{
    path: 'contacts',
    loadChildren: './contacts/contacts.module#ContactsPageModule'
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
