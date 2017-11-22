import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomBreakPointsProvider } from './custom-breakpoints';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';

import { PipBreadcrumbModule, PipNavIconModule, PipPrimaryActionsModule, PipNavModule, PipNavMenuModule } from 'pip-webui2-nav';

import { PipShadowModule, PipAppbarModule, PipSidenavModule, PipRightnavModule, PipMainModule, PipRootModule, PipSidenavToggleModule } from './pip-webui2-layouts';

import { ExampleListModule } from './examples-list/examples-list.module';
import { AppComponent } from './app.component';
import { MainLayoutExampleComponent } from './main-layout-example/main-layout-example.component';
import { DocumentLayoutExampleComponent } from './document-layout-example/document-layout-example.component';
import { TilesLayoutExampleComponent } from './tiles-layout-example/tiles-layout-example.component';
import { MainMenuLayoutExampleComponent } from './main-menu-layout-example/main-menu-layout-example.component';
import { CardLayoutExampleComponent } from './card-layout-example/card-layout-example.component';
import { ScrollableLayoutExampleComponent } from './scrollable-layout-example/scrollable-layout-example.component';

import { MainLayoutExampleModule } from './main-layout-example/main-layout-example.module';
import { DocumentLayoutExampleModule } from './document-layout-example/document-layout-example.module';
import { TilesLayoutExampleModule } from './tiles-layout-example/tiles-layout-example.module';
import { MainMenuLayoutExampleModule } from './main-menu-layout-example/main-menu-layout-example.module';
import { CardLayoutExampleModule } from './card-layout-example/card-layout-example.module';
import { ScrollableLayoutExampleModule } from './scrollable-layout-example/scrollable-layout-example.module';

const appRoutes: Routes = [
  { path: 'media', component: MainLayoutExampleComponent },
  { path: 'document', component: DocumentLayoutExampleComponent },
  { path: 'tiles', component: TilesLayoutExampleComponent },
  { path: 'menu', component: MainMenuLayoutExampleComponent },
  { path: 'card', component: CardLayoutExampleComponent },
  { path: 'scrollable', component: ScrollableLayoutExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'document' }
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
    MatToolbarModule,

    // Nav dependencies
    PipBreadcrumbModule, 
    PipNavIconModule, 
    PipPrimaryActionsModule, 
    PipNavModule, 
    PipNavMenuModule,

    // Layouts dependencies
    PipShadowModule,
    PipAppbarModule,
    PipSidenavModule,
    PipRightnavModule,
    PipSidenavToggleModule,
    PipMainModule,
    PipRootModule,

    ExampleListModule,
    MainLayoutExampleModule,
    DocumentLayoutExampleModule,
    TilesLayoutExampleModule,
    MainMenuLayoutExampleModule,
    CardLayoutExampleModule,
    ScrollableLayoutExampleModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
