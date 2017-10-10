import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomBreakPointsProvider } from './custom-breakpoints';

import { PipTestModule } from './pip-webui2-layouts';

import { ExampleListModule } from './examples-list/examples-list.module';
import { AppComponent } from './app.component';
import { MainLayoutExampleComponent } from './main-layout-example/main-layout-example.component';
import { DocumentLayoutExampleComponent } from './document-layout-example/document-layout-example.component';
import { MainLayoutExampleModule } from './main-layout-example/main-layout-example.module';
import { DocumentLayoutExampleModule } from './document-layout-example/document-layout-example.module';

const appRoutes: Routes = [
  { path: 'main', component: MainLayoutExampleComponent },
  { path: 'document', component: DocumentLayoutExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'main' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FlexLayoutModule,
    PipTestModule,

    ExampleListModule,
    MainLayoutExampleModule,
    DocumentLayoutExampleModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
 