import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:
      [
        {
          path: 'about',
          children:
            [
              {
                path: 'members',
                loadChildren: './about/about.module#AboutPageModule'
              }
            ]
        },
        {
          path: 'mycv',
          children:
            [
              {
                path: 'members',
                loadChildren: './mycv/mycv.module#mycvPageModule'
              }
            ]
        },
        {
          path: 'project',
          children:
            [
              {
                path: 'members',
                loadChildren: './project/project.module#ProjectPageModule'
              }
            ]
        },
        {
            path: 'extra',
            children:
              [
                {
                  path: 'members',
                  loadChildren: './extra/extra.module#ExtraPageModule'
                }
              ]
          },
          {
            path: 'contacts',
            children:
              [
                {
                  path: 'members',
                  loadChildren: './contacts/contacts.module#ContactsPageModule'
                }
              ]
          },
        {
          path: 'members',
          redirectTo: './about',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class TabsPageRoutingModule {}
