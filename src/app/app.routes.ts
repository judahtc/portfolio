import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { BlogsComponent } from './blogs/blogs.component';
import { PortalComponent } from './portal/portal.component';
import { AngularOnS3Component } from './angular-on-s3/angular-on-s3.component';
import { AwsFreeTierComponent } from './aws-free-tier/aws-free-tier.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BeanstalkComponent } from './beanstalk/beanstalk.component';
export const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      { path: 'portfolio', component: PortfolioComponent },
      {
        path: 'blogs',
        component: BlogsComponent,
        children: [
          { path: 'angular-on-s3', component: AngularOnS3Component },
          { path: 'aws-free-tier', component: AwsFreeTierComponent },
          { path: 'beanstalk', component: BeanstalkComponent },
          { path: '**', component: PageNotFoundComponent },
        ],
      },
    ],
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
