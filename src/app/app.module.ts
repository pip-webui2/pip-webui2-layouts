import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  PipAppbarModule,
  PipMediaModule,
  PipShadowModule,
  PipNavExpanderModule,
  PipRootLayoutModule,
  PipSidenavPosition,
  PipSidenavStartModule,
  PipSidenavEndModule
} from 'pip-webui2-layouts';
import { PipThemesModule, pipWebUI2ThemesList } from 'pip-webui2-themes';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CardLayoutExampleModule } from './card-layout-example/card-layout-example.module';
import { DocumentLayoutExampleModule } from './document-layout-example/document-layout-example.module';
import { ExamplesListModule } from './examples-list/examples-list.module';
import { FxLayoutExampleModule } from './fx-layout-example/fx-layout-example.module';
import { MainLayoutExampleModule } from './main-layout-example/main-layout-example.module';
import { MainMenuLayoutExampleModule } from './main-menu-layout-example/main-menu-layout-example.module';
import { ScrollableLayoutExampleModule } from './scrollable-layout-example/scrollable-layout-example.module';
import { TilesLayoutExampleModule } from './tiles-layout-example/tiles-layout-example.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    PipThemesModule.withConfig({
      themes: pipWebUI2ThemesList
    }),
    PipAppbarModule.forRoot(),
    PipMediaModule.forRoot(),
    PipShadowModule,
    PipNavExpanderModule,
    PipSidenavStartModule.forRoot({
      views: [
        {
          name: 'mobile',
          alias: 'lt-sm',
          position: PipSidenavPosition.Root,
          mode: 'over'
        }
      ]
    }),
    PipSidenavEndModule.forRoot({
      views: [
        {
          name: 'default',
          position: PipSidenavPosition.Root,
          mode: 'side',
          width: 350
        },
        {
          name: 'mobile',
          alias: 'lt-sm',
          position: PipSidenavPosition.Root,
          mode: 'over'
        }
      ]
    }),
    PipRootLayoutModule,

    AppRoutingModule,
    CardLayoutExampleModule,
    DocumentLayoutExampleModule,
    ExamplesListModule,
    FxLayoutExampleModule,
    MainMenuLayoutExampleModule,
    MainLayoutExampleModule,
    ScrollableLayoutExampleModule,
    TilesLayoutExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
