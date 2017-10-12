import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomBreakPointsProvider } from './custom-breakpoints';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PipTestModule,  PipAppbarModule, PipSidenavModule, PipContentLayoutModule, PipMainLayoutModule } from './pip-webui2-layouts';

import { ExampleListModule } from './examples-list/examples-list.module';
import { AppComponent } from './app.component';
import { MainLayoutExampleComponent } from './main-layout-example/main-layout-example.component';
import { DocumentLayoutExampleComponent } from './document-layout-example/document-layout-example.component';
import { TilesLayoutExampleComponent } from './tiles-layout-example/tiles-layout-example.component';
import { MainMenuLayoutExampleComponent } from './main-menu-layout-example/main-menu-layout-example.component';

import { MainLayoutExampleModule } from './main-layout-example/main-layout-example.module';
import { DocumentLayoutExampleModule } from './document-layout-example/document-layout-example.module';
import { TilesLayoutExampleModule } from './tiles-layout-example/tiles-layout-example.module';
import { MainMenuLayoutExampleModule } from './main-menu-layout-example/main-menu-layout-example.module';

const appRoutes: Routes = [
  { path: 'main', component: MainLayoutExampleComponent },
  { path: 'document', component: DocumentLayoutExampleComponent },
  { path: 'tiles', component: TilesLayoutExampleComponent },
  { path: 'menu', component: MainMenuLayoutExampleComponent },
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
    MatButtonModule,
    MatIconModule,

    PipTestModule,
    PipAppbarModule, 
    PipSidenavModule,
    PipContentLayoutModule,
    PipMainLayoutModule,

    ExampleListModule,
    MainLayoutExampleModule,
    DocumentLayoutExampleModule,
    TilesLayoutExampleModule,
    MainMenuLayoutExampleModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
 